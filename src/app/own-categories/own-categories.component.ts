import {Component, OnInit} from '@angular/core';
import {OwnQuestionsService} from '../core/own-questions.service';
import {Category, Question} from '../models/questions.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'own-own-categories',
    templateUrl: './own-categories.component.html',
    styleUrls: ['./own-categories.component.scss']
})
export class OwnCategoriesComponent implements OnInit {
    selectedCategory: Category;
    selectedQuestion: Question;

    constructor(private questionsService: OwnQuestionsService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
    }

    get categories(): Category[] {
        return this.questionsService.categories;
    }

    select(cat: Category, question: Question) {
        this.selectedCategory = cat;
        this.selectedQuestion = question;
        const categoryId = this.categories.indexOf(cat);
        const questionId = cat.questions.indexOf(question);
        setTimeout(() => {
            this.router.navigate([categoryId, questionId], {relativeTo: this.route});
        }, 1000);
    }
}
