import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_INITIALIZER, NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {OwnStartComponent} from './own-start/own-start.component';
import {OwnPlayerComponent} from './own-player/own-player.component';
import {OwnPlayersComponent} from './own-players/own-players.component';
import {CoreModule} from './core/core.module';
import {OwnQuestionsService} from './core/own-questions.service';
import { OwnCategoriesComponent } from './own-categories/own-categories.component';
import { OwnQuestionComponent } from './own-question/own-question.component';
import { OwnResultComponent } from './own-result/own-result.component';


@NgModule({
    declarations: [
        AppComponent,
        OwnStartComponent,
        OwnPlayerComponent,
        OwnPlayersComponent,
        OwnCategoriesComponent,
        OwnQuestionComponent,
        OwnResultComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule
    ],
    providers: [
        {
            // Provider for APP_INITIALIZER
            provide: APP_INITIALIZER,
            useFactory: startupServiceFactory,
            deps: [OwnQuestionsService],
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

export function startupServiceFactory(questionService: OwnQuestionsService): Function {
    return () => questionService.loadCategories().subscribe();
}