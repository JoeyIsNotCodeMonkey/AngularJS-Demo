import {Router, RouterModule} from '@angular/router';

import {UsersComponent} from './users.component';
import {NewUserComponent} from './newUser.component';


export const usersRouting = RouterModule.forChild([
    {
        path: 'users/:id',
        component: NewUserComponent,
    },
    {
        path: 'users/new',
        component: NewUserComponent,
    },
    {path: 'users', component: UsersComponent}
]);