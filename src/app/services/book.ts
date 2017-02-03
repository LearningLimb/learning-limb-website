import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api';
import { Book } from '../models';

@Injectable()
export class BookService {
    private books: Book[] = [];

    constructor(private api: ApiService) {
        for (let i = 0; i < 6; i++) {
            this.books.push({
                id: String(i + 1),
                title: 'Jonny, the Pickiest of all the Picky Eaters!',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan mi vel tincidunt mattis. Aliquam hendrerit facilisis aliquet. Suspendisse potenti. Nam vitae elementum augue.',
                price: 20.00,
                coverUrl: '/assets/sample_cover.png',
                gender: 'neutral',
                previewPageUrls: [
                    '/assets/parents-picnic.png',
                    '/assets/monkey-leaning-tree.png',
                    '/assets/pirate-boy.png',
                    '/assets/monkey-pirate.png',
                    '/assets/jumping-boy.png'
                ]
            });
        }
    }

    list(gender?: string): Observable<Book[]> {
        // return this.api.get('/api/books');

        return Observable.from(this.books)
            .filter(book => gender ? book.gender === gender || book.gender === 'neutral' : true)
            .toArray();
    }

    get(id: string): Observable<Book> {
        // return this.api.get(`/api/books/${id}`);
        return Observable.from(this.books).take(1);
    }
}
