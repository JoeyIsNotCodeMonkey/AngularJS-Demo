import { Router, RouterModule  }     from '@angular/router';

import { HomeComponent }     from './home.component';
import { NotFoundComponent } from './shared/notFound.component';

export const routing = RouterModule.forRoot([
	{ path: '', component: HomeComponent },
    { path: 'not-found', component: NotFoundComponent },
	{ path: '**', redirectTo: 'not-found' }
]);