export class Question {
    price: number;
    text?: string;
    answer: string;
    video?: string;
    audio?: string;
}

export class Category {
    category: string;
    questions: Question[];
}
