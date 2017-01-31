import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services';
import { User } from '../../models';

@Component({
    selector: 'signup',
    templateUrl: './template.html',
    styleUrls: ['./styles.scss']
})
export class SignupComponent implements OnInit {
    user: User;

    constructor(private auth: UserService, private router: Router) {
    }

    ngOnInit() {
        // If aleady authenticated navigate to /home
        this.auth.isAuthenticated().subscribe(() => {
            this.router.navigateByUrl('/home');
        });

        this.user = new User();
        this.user.local = { email: null, password: null };
    }

    onSubmit() {
        this.auth.register(this.user).subscribe(() => {
            this.router.navigateByUrl('/home');
        }, (error) => console.log(error));
    }
}
