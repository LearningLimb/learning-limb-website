import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api';
import { Book } from '../models';

@Injectable()
export class BookService {
    private books: Book[] = [
        {
            id: '1',
            title: 'Jonny, the Pickiest of all the Picky Eaters!',
            price: 20.00,
            coverUrl: '/assets/sample_cover.png',
            gender: 'neutral'
        }, {
            id: '2',
            title: 'Jonny, the Pickiest of all the Picky Eaters!',
            price: 20.00,
            coverUrl: '/assets/sample_cover.png',
            gender: 'neutral'
        }, {
            id: '3',
            title: 'Jonny, the Pickiest of all the Picky Eaters!',
            price: 20.00,
            coverUrl: '/assets/sample_cover.png',
            gender: 'neutral'
        }, {
            id: '4',
            title: 'Jonny, the Pickiest of all the Picky Eaters!',
            price: 20.00,
            coverUrl: '/assets/sample_cover.png',
            gender: 'neutral'
        }, {
            id: '5',
            title: 'Jonny, the Pickiest of all the Picky Eaters!',
            price: 20.00,
            coverUrl: '/assets/sample_cover.png',
            gender: 'neutral'
        }
    ];

    constructor(private api: ApiService) { }

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
