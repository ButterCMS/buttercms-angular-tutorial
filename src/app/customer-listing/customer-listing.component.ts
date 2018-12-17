import {Component, OnInit} from '@angular/core';
import {butterService} from '../services';

@Component({
    selector: 'app-customer',
    templateUrl: './customer-listing.component.html',
    styleUrls: ['./customer-listing.component.scss']
})
export class CustomerListingComponent implements OnInit {

    public pages: any[];

    constructor() {
    }

    ngOnInit() {
        butterService.page.list('customer_case_study')
            .then((res) => {
                this.pages = res.data.data;
            });
    }
}
