import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import {NotFoundComponent} from './notFound.component';
import { PaginationComponent } from './pagination.component';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PaginationComponent,
        NotFoundComponent       
    ],
    exports: [
        PaginationComponent
    ]
})
export class SharedModule { 
}