import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../models/questions.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';


@Injectable()
export class OwnQuestionsService {
    categories: Category[];

    constructor(private http: HttpClient) { }

    loadCategories(): Observable<Category[]> {
        if (this.categories) return Observable.of(this.categories);
        return this.http.get<Category[]>('assets/questions.json')
            .do((categories: Category[]) => this.categories = categories.map(data => Object.assign(new Category(), data)));
    }

    get hasQuestions(): boolean {
        return this.categories.some(cat => cat.questions.some(question => !question.disabled));
    }
}
