import { Injectable, Inject } from '@angular/core';
import { ApiService } from './api';
import { Observable } from 'rxjs';

@Injectable()
export class BookService {

    constructor(private api: ApiService) {}

    list() {
        return this.api.get('/api/books');
    }
    
    get(id: string) {
        return this.api.get(`/api/books/${id}`);
    }
}
