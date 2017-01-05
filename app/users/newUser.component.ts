import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {UsersService} from './users.service';
import {User} from './user';

@Component({
    templateUrl: 'app/users/newUser.component.html',
})

export class NewUserComponent implements OnInit{
    form: FormGroup;
    title: string;
    user = new User();

    constructor(
        fb: FormBuilder,
        private _router: Router,
        private _route: ActivatedRoute,
        private _usersService: UsersService
        ) {
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
            
        });
    }

    
    ngOnInit(){
        var id = this._route.params.subscribe(params => {
            var id = +params["id"];

              this.title = id ? "Edit User" : "New User";
        
        if (!id)
			return;
            
        this._usersService.getUser(id)
			.subscribe(
                user => this.user = user,
                response => {
                    if (response.status == 404) {
                        this._router.navigate(['not-found']);
                    }
                });
        });
    }

    save() {
        if(this.user.id) {
            this._usersService.updateUser(this.user)
                .subscribe(x => {
                    this._router.navigate(['users']);
                });
        } else {
            this._usersService.createUser(this.user)
                .subscribe(x => {
                    this._router.navigate(['users']);
                });
        }
            
    }
}