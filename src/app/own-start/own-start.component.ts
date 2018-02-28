import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
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
            transition('inactive => active', animate('1s ease-in')),
            transition('active => inactive', animate('1s ease-out'))
        ])
    ]
})
export class OwnStartComponent implements OnInit, OnDestroy {
    charState = 'inactive';
    audio: HTMLAudioElement;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.playIntro();
        this.startAnimation();
    }

    ngOnDestroy() {
        this.audio.pause();
    }

    playIntro() {
        this.audio = new Audio('assets/zastavka.mp3');
        this.audio.load();
        this.audio.play();
    }

    startAnimation() {
        const delay = 3 + Math.random() * 10;
        setTimeout(() => this.charState = 'active', delay * 1000);
    }

    animationDone(event) {
        if (event.toState === 'active') {
            this.charState = 'inactive';
        } else {
            this.startAnimation();
        }
    }

    @HostListener('click') onClick() {
        this.router.navigate(['/categories']);
    }
}
