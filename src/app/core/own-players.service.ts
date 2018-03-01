import {Injectable} from '@angular/core';

@Injectable()
export class OwnPlayersService {
    players = {
        red: {
            name: 'Борщевики',
            score: 0
        },
        yellow: {
            name: 'Ким Чен Сыр',
            score: 0
        },
        brown: {
            name: 'Мама-Обама',
            score: 0
        }
    };

    currentAmount: number = 0;

    constructor() {
    }

    incrementScore(player: string) {
        this.players[player].score += this.currentAmount;
    }

    decrementScore(player: string) {
        this.players[player].score -= this.currentAmount;
    }
}
