import {Component, Input} from '@angular/core';
import {OwnPlayersService} from '../core/own-players.service';

@Component({
    selector: 'own-own-player',
    templateUrl: './own-player.component.html',
    styleUrls: ['./own-player.component.scss']
})
export class OwnPlayerComponent {
    @Input('color') color: string;

    constructor(private service: OwnPlayersService) {
    }

    get score(): number {
        return this.service.players[this.color].score;
    }

    get name(): string {
        return this.service.players[this.color].name;
    }

    incrementScore() {
        this.service.incrementScore(this.color);
    }

    decrementScore() {
        this.service.decrementScore(this.color);
    }
}
