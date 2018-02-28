import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {OwnQuestionsService} from './own-questions.service';
import {OwnPlayersService} from './own-players.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        OwnQuestionsService,
        OwnPlayersService
    ]
})
export class CoreModule {}
