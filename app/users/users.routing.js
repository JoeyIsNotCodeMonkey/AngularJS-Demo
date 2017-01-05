"use strict";
var router_1 = require("@angular/router");
var users_component_1 = require("./users.component");
var newUser_component_1 = require("./newUser.component");
exports.usersRouting = router_1.RouterModule.forChild([
    {
        path: 'users/:id',
        component: newUser_component_1.NewUserComponent,
    },
    {
        path: 'users/new',
        component: newUser_component_1.NewUserComponent,
    },
    { path: 'users', component: users_component_1.UsersComponent }
]);
//# sourceMappingURL=users.routing.js.map