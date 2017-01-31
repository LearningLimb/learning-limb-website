import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { ApiService } from './api';
import { Observable } from 'rxjs';
import { User } from '../models';

@Injectable()
export class UserService {
    public currentUser: User = null;

    constructor(private api: ApiService) {}

    isAuthenticated(): Observable<any> {
        this.api.setHeaders({
            Accept: 'text/html, application/json'
        });
        return this.api.get('/auth/authenticated')
            .do(user => {
                console.log('isAuthenticated');
                console.log(user);
                this.api.setHeaders({ Accept: 'application/json'})
                this.currentUser = user;
            });
    }

    register(user: User): Observable<any> {
        return this.api.post('/auth/local/register', user)
            .do(user => this.currentUser = user);
    }
    
    login(user: User): Observable<any> {
        return this.api.post('/auth/local/login', user)
            .do(user => {
                console.log('login');
                console.log(user);
                this.currentUser = user
            });
    }
}
