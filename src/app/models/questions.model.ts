export class Question {
    price: number;
    answer: string;
    cat?: boolean;
    disabled?: boolean;
    text?: string;
    video?: string;
    audio?: string;
}

export class Category {
    category: string;
    questions: Question[];

    get disabled () {
      return this.questions.every(q => q.disabled);
    }
}
