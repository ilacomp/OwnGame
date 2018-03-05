import {AfterViewInit, Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';

@Component({
    selector: 'own-start',
    templateUrl: './own-start.component.html',
    styleUrls: ['./own-start.component.scss'],
    animations: [
        trigger('charState', [
            state('inactive', style({
                transform: 'scaleX(1)'
            })),
            state('active', style({
                transform: 'scaleX(-1)'
            })),
            transition('inactive => active', animate('1s ease-in-out')),
            transition('active => inactive', animate('1s ease-in-out'))
        ])
    ]
})
export class OwnStartComponent implements OnInit, OnDestroy, AfterViewInit {
    charState: string;
    audio: HTMLAudioElement;
    start: boolean;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.playIntro();
    }

    ngOnDestroy() {
        this.audio.pause();
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.start = true;
            setTimeout(this.startCharAnimation.bind(this), 2000);
        }, 10000);
    }

    playIntro() {
        this.audio = new Audio('assets/zastavka.mp3');
        this.audio.play();
        this.audio.addEventListener('ended', () => {
            this.audio = new Audio('assets/closing.mp3');
            this.audio.loop = true;
            this.audio.play();
        });
    }

    startCharAnimation() {
        const delay = 3 + Math.random() * 10;
        setTimeout(() => this.charState = 'active', delay * 1000);
    }

    animationDone(event) {
        if (event.fromState === 'void') return;
        if (event.toState === 'active') {
            this.charState = 'inactive';
        } else {
            this.startCharAnimation();
        }
    }

    @HostListener('click') onClick() {
        this.router.navigate(['/categories']);
    }
}
