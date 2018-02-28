import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { OwnStartComponent } from './own-start/own-start.component';
import { OwnPlayerComponent } from './own-player/own-player.component';
import { OwnPlayersComponent } from './own-players/own-players.component';


@NgModule({
    declarations: [
        AppComponent,
        OwnStartComponent,
        OwnPlayerComponent,
        OwnPlayersComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
