import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { UserService } from '../../services';
import { User } from '../../models';

declare var $;

@Component({
    selector: 'login-form',
    templateUrl: './template.html',
    styleUrls: ['./styles.scss']
})
export class LoginFormComponent implements OnInit {
    @ViewChild('#loginModal') login;
    user: User;
    authError = false;

    constructor(public userService: UserService, private router: Router) {
    }

    ngOnInit() {
        this.clearFields();
    }

    onSubmit() {
        this.userService.login(this.user).subscribe(data => {
            this.clearFields();
            this.router.navigateByUrl('/home');
            $('#loginModal').modal('hide');
        }, err => {
            this.authError = err instanceof Response && err.status === 401;
        });
    }

    clearFields() {
        let user = new User();
        user.local = { email: null, password: null };

        this.user = user;
    }
}
