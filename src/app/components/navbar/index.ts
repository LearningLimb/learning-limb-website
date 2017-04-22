import { Component, OnInit, NgZone } from '@angular/core';
import { UserService } from '../../services';

@Component({
    selector: 'navbar',
    templateUrl: './template.html',
    styleUrls: ['./styles.scss']
})
export class NavBarComponent implements OnInit {

    constructor(public userService: UserService, private zone: NgZone){}

    ngOnInit() {
        if (window.location.hash === '#_=_') {
            window.location.hash = '';
        }

        this.userService.isAuthenticated().subscribe(res => console.log('User is logged in'), err => console.log('User is not logged in'));
    }
}
