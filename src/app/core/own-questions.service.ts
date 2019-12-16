
import {of as observableOf,  Observable } from 'rxjs';

import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../models/questions.model';




@Injectable()
export class OwnQuestionsService {
    categories: Category[];

    constructor(private http: HttpClient) { }

    loadCategories(): Observable<Category[]> {
        if (this.categories) return observableOf(this.categories);
        return this.http.get<Category[]>('assets/questions.json').pipe(
            tap((categories: Category[]) => this.categories = categories.map(data => Object.assign(new Category(), data))));
    }

    get hasQuestions(): boolean {
        return this.categories.some(cat => cat.questions.some(question => !question.disabled));
    }
}
