import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../models/questions.model';

@Injectable()
export class OwnQuestionsService {
    categories: Category[];

    constructor(private http: HttpClient) {
    }

    loadCategories() {
        this.http.get<Category[]>('assets/questions.json')
            .subscribe((categories: Category[]) => this.categories = categories);
    }

}
