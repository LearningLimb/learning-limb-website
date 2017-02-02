import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BookService } from '../../services';
import { Book } from '../../models';

@Component({
    selector: 'books',
    templateUrl: './template.html',
    styleUrls: ['./styles.scss']
})
export class BooksComponent implements OnInit {
    books: Observable<Book[]>;
    gender: string = null;

    constructor(private route: ActivatedRoute, private router: Router, private bookService: BookService) {}

    ngOnInit() {
        this.gender = this.route.snapshot.queryParams['gender'] || null;
        this.books = this.gender ? this.bookService.list(this.gender) : Observable.from([]).toArray();
    }

    setGender(gender: string) {
        this.gender = gender;
        this.books = this.bookService.list(this.gender);
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: {
                gender: gender
            }
        });
    }
}
