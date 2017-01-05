import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';


@Component({
    template: `<h3>Users</h3>
                <div *ngIf="isLoading">Getting data...</div>     
                <p><a routerLink="/users/new" class="btn btn-primary" role="button">New User</a></p>          
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr *ngFor="let user of users">
                            <td>{{user.name}}</td>
                            <td>{{user.email}}</td>
                            <td>
                                <a [routerLink]="['/users', user.id]">
                                    <i class="glyphicon glyphicon-edit"></i>
                                </a>
                            </td>
                            <td><i (click)="deleteUser(user)" class="glyphicon glyphicon-remove clickable"></i></td>
                        </tr>
                    </tbody>
                </table>
                `


})

export class UsersComponent implements OnInit{
    isLoading = true;
    users = [];

    constructor(private _usersService: UsersService) {
        
    }

    ngOnInit() {
        this._usersService.getUsers()
            .subscribe(users => {
                this.isLoading = false;
                this.users = users;
            },
            null,
            () => {this.isLoading = false});
    }

    deleteUser(user) {
        if(confirm("Are you sure you want to delete " + user.name + "?")) {
            var index = this.users.indexOf(user);
            this.users.splice(index, 1);
            this._usersService.deleteUser(user.id)
                .subscribe(null, 
                    err => {
                        alert("Cound not delete the user");
                        this.users.splice(index, 0, user);
                    });
        }
    }
}