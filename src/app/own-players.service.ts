import {Injectable} from '@angular/core';

@Injectable()
export class OwnPlayersService {
    players = {
        red: 0,
        yellow: 0,
        green: 0
    };

    currentAmount: number = 0;

    constructor() {
    }

    incrementScore(player: string) {
        this.players[player] += this.currentAmount;
    }

    decrementScore(player: string) {
        this.players[player] -= this.currentAmount;
    }
}
