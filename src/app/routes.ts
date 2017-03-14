import {RouterModule} from '@angular/router';
import * as Components from './components';

export const routes = RouterModule.forRoot([
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: Components.HomeComponent
    },
    {
        path: 'books',
        component: Components.BooksComponent
    },
    {
        path: 'books/:id',
        component: Components.BookDetailComponent
    },
    {
        path: 'books/:id/editor',
        component: Components.BookEditorComponent
    },
    {
        path: 'about',
        component: Components.AboutComponent
    },
    {
        path: 'support',
        component: Components.SupportComponent
    },
    {
        path: 'cart',
        component: Components.CartComponent
    },
    {
        path: 'signup',
        component: Components.SignupComponent
    },
]);