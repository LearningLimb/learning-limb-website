import { Component } from '@angular/core';

@Component({
    selector: 'books',
    templateUrl: './template.html',
    styleUrls: ['./styles.scss']
})
export class BooksComponent {
    books: string[] = ['a', 'b', 'c', 'd', 'e'];
}
