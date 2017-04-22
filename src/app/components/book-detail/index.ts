import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BookService, UserService } from '../../services';
import { Book } from '../../models';

@Component({
    selector: 'll-book-detail',
    templateUrl: './template.html',
    styleUrls: ['./styles.scss']
})
export class BookDetailComponent implements OnInit {
    bookId: string;
    book: Observable<Book>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private bookService: BookService,
        public userService: UserService
    ) { }

    ngOnInit() {
        this.book = this.route.params.switchMap(params => {
            this.bookId = params['id'];
            return this.bookService.get(this.bookId);
        });
    }

}
