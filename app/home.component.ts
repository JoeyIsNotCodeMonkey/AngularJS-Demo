import {Component} from '@angular/core'

@Component({
    template: `
        <p>This is an AngularJS demo project, which implements most of the basic features
        in AngularJS 2.x such as modules, router, service, forms, validations etc.</p>
        <p>I followed the instructions provided by Mosh Hamedani to finish this project. 
        Thanks to Mosh! His AngularJS tutorial is awesome, which is available on the Udemy.</p>
        <p>This web app relies on the "json place holder", so it is a pure front-end 
        practice. You can fakely add, update, modify and delete users, the corresponding http 
        request can be checked on the browser developer tools (I use chrome).</p>
        <p>Besides, you can view the posts and their details including comments. Posts are 
        paginated, and are able to be filtered by author.</p>
    
    `

})

export class HomeComponent {
    
}