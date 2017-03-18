import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BookService, UserService } from '../../services';
import { Book } from '../../models';

@Component({
    selector: 'books',
    templateUrl: './template.html',
    styleUrls: ['./styles.scss']
})
export class BookEditorComponent implements OnInit {
    private reader: FileReader = new FileReader();

    bookId: string;
    book: Observable<Book>;
    model: any = {};
    skinColors = ['white', 'brown', 'black'];
    hairColors = ['yellow', 'brown', 'black', 'orange'];

    selectedHairColor: string;
    selectedSkinColor: string;
    selectedImageData = '/assets/Portrait_placeholder.png';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private bookService: BookService,
        public userService: UserService,
        private zone: NgZone
    ) { }

    ngOnInit() {
        this.reader.onload = (e) => {
         this.zone.run(() => {
             this.selectedImageData = e.target['result'];
         }); 
        }
        this.book = this.route.params.switchMap(params => {
            this.bookId = params['id'];
            return this.bookService.get(this.bookId);
        });
    }

    updateImage(e) {
        this.model.image = e.target.files[0];
        this.reader.readAsDataURL(this.model.image);
    }

}
