import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './template.html',
    styleUrls: ['./styles.scss']
})
export class AppComponent {

    constructor(private title: Title){
        this.title.setTitle('LearningLimb - Put Your Family In The Story!');
    }
}
