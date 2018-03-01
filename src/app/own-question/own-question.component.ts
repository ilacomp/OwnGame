import {Component, OnInit, HostListener} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {OwnQuestionsService} from '../core/own-questions.service';
import {OwnPlayersService} from '../core/own-players.service';
import {Category, Question} from '../models/questions.model';


enum FormState {
    See,
    Cat,
    Think,
    WaitAnswer,
    Answer
};

@Component({
    selector: 'own-own-question',
    templateUrl: './own-question.component.html',
    styleUrls: ['./own-question.component.scss']
})
export class OwnQuestionComponent implements OnInit {
    static TIMEOUT = 30;
    category: Category;
    question: Question;
    timer;
    expired = OwnQuestionComponent.TIMEOUT;
    state: FormState = FormState.See;
    timerAudio: HTMLAudioElement;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private ownQuestionsService: OwnQuestionsService,
                private onwPlayersService: OwnPlayersService) {
    }

    ngOnInit() {
        this.ownQuestionsService.loadCategories().subscribe(categories => {
            this.category = categories[this.route.snapshot.params['categoryId']];
            this.question = this.category.questions[this.route.snapshot.params['questionId']];
            this.question.disabled = true;
            this.onwPlayersService.currentAmount = this.question.price;
            // TEST STUBS
            // this.question.text = '';
            // this.question.video = 'http://techslides.com/demos/sample-videos/small.mp4';
            // this.question.audio = 'http://www.evidenceaudio.com/wp-content/uploads/2014/10/lyricslap.mp3';

            if (this.question.cat) {
                this.state = FormState.Cat;
                new Audio('assets/cat.mp3').play();
            }
        });
    }

    @HostListener('click', ['$event.target'])
    onClick(target) {
        if (target.nodeName === 'BUTTON') return;

        switch (this.state) {
            case FormState.Cat:
                return this.state = FormState.See;
            case FormState.See:
                return this.startTimer();
            case FormState.Think:
                return this.stopTimer();
            case FormState.WaitAnswer:
                return this.state = FormState.Answer;
            default:
                return this.router.navigate(['/categories']);
        }
    }

    startTimer() {
        this.timerAudio = new Audio('assets/30sec.mp3');
        this.timerAudio.play();
        this.state = FormState.Think;
        this.expired = OwnQuestionComponent.TIMEOUT;
        this.timer = setInterval(() => {
            --this.expired;
            if (this.expired < 0.5) {
                this.stopTimer();
                new Audio('assets/timeout.mp3').play();
            }
        }, 1000);
    }

    stopTimer() {
        this.timerAudio.pause();
        clearInterval(this.timer);
        this.state = FormState.WaitAnswer;
    }

    get showCat() {
        return this.state === FormState.Cat;
    }

    get showTimer() {
        return this.state === FormState.Think;
    }

    get showAnswer() {
        return this.state === FormState.Answer;
    }

    get showQuestion() {
        return [FormState.See, FormState.WaitAnswer, FormState.Think].includes(this.state);
    }
}
