"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var notFound_component_1 = require("./shared/notFound.component");
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: home_component_1.HomeComponent },
    { path: 'not-found', component: notFound_component_1.NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
]);
//# sourceMappingURL=app.routing.js.map