import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OwnStartComponent} from './own-start/own-start.component';
import {OwnCategoriesComponent} from './own-categories/own-categories.component';
import {OwnQuestionComponent} from './own-question/own-question.component';
import {OwnResultComponent} from './own-result/own-result.component';

const appRoutes: Routes = [
    {
        path: '',
        component: OwnStartComponent
    },
    {
        path: 'categories',
        component: OwnCategoriesComponent,
    },
    {
        path: 'categories/:categoryId/:questionId',
        component: OwnQuestionComponent
    },
    {
        path: 'result',
        component: OwnResultComponent
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
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
