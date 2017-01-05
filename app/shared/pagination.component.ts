import {Component, Input, Output, EventEmitter} from '@angular/core';
import {OnChanges} from '@angular/core';

@Component({
    selector: 'pagination',
    template: `
        <nav aria-label="Page navigation" *ngIf="items.length > pageSize">
            <ul class="pagination">
                <li [class.disabled]="currentPage == 1">
                <a aria-label="Previous" (click)="previous()">
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                <li *ngFor="let page of pages" (click)="changePage(page)" [class.active]="currentPage==page"><a>{{page}}</a></li>               
                <li [class.disabled]="currentPage == pages.length">
                <a aria-label="Next" (click)="next()">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
        </nav>
    `
   
})

export class PaginationComponent implements OnChanges{
    @Input() items = [];
    @Output() pageChanged = new EventEmitter();
    pages: any[];
    pageSize = 10;
    currentPage;

    ngOnChanges() {
        this.currentPage = 1;
        var pagesCount = Math.ceil(this.items.length / this.pageSize);
        this.pages = [];
        for(var i=1; i<=pagesCount; i++) {
            this.pages.push(i);
        }
    }

    changePage(page) {
        this.currentPage = page;
        this.pageChanged.emit(page);
    }

    previous() {
        if(this.currentPage == 1)
            return;

        this.currentPage--;
        this.pageChanged.emit(this.currentPage);
    }

    next() {
        if(this.currentPage == this.pages.length)
            return;
        
        this.currentPage++;
        this.pageChanged.emit(this.currentPage);
    }


}

