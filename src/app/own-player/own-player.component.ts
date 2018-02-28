import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
    selector: 'own-own-player',
    templateUrl: './own-player.component.html',
    styleUrls: ['./own-player.component.scss']
})
export class OwnPlayerComponent implements OnInit, OnDestroy {
    @Input('color') color: string;
    @Input('amount') amount: number;
    score: number = 0;


    constructor() {
    }

    ngOnInit() {
        this.score = +localStorage.getItem('score' + this.color) || 0;
    }

    ngOnDestroy() {
        localStorage.setItem('score' + this.color, this.score.toString());
    }

    incrementScore() {
        this.score += this.amount;
    }

    decrementScore() {
        this.score -= this.amount;
    }
}
