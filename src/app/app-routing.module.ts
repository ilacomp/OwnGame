import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OwnStartComponent} from './own-start/own-start.component';

const appRoutes: Routes = [
    {path: 'start', component: OwnStartComponent},
    {path: '**', redirectTo: '/start', pathMatch: 'full'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
