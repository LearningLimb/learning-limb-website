import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api';
import { Book } from '../models';

@Injectable()
export class BookService {
  private books: Book[] = [];

  constructor(private api: ApiService) { }

  list(gender?: string): Observable<Book[]> {
    return this.api.get('/api/books')
      .flatMap((res: { books: Book[]}) => Observable.from(res.books))
      .filter(book => gender ? book.gender === gender : true)
      .toArray();
  }

  get(id: string): Observable<Book> {
    return this.api.get(`/api/books/${id}`);
  }
}
