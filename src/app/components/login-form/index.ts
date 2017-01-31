import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services';
import { User } from '../../models';

@Component({
    selector: 'login-form',
    templateUrl: './template.html',
    styleUrls: ['./styles.scss']
})
export class LoginFormComponent implements OnInit {
    user: User;

    constructor(public userService: UserService, private router: Router) {
    }

    ngOnInit() {
        this.clearFields();
    }

    onSubmit() {
        this.userService.login(this.user).subscribe(data => {
            this.clearFields();
            this.router.navigateByUrl('/home');
        });
    }

    clearFields() {
        let user = new User();
        user.local = { email: null, password: null };

        this.user = user;
    }
}
