import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {butterService} from '../../services';
import {map, take} from 'rxjs/operators';


@Component({
    selector: 'app-customer-details',
    templateUrl: './customer.details.component.html',
    styleUrls: ['./customer.details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

    constructor(protected route: ActivatedRoute) {
    }

    protected slug$: Observable<string>;
    public page: any;

    ngOnInit() {
        this.slug$ = this.route.paramMap
            .pipe(
                map(params => (params.get('slug')))
            );

        this.slug$.pipe(
            take(1))
            .subscribe(slug => {
                butterService.page.retrieve('customer_case_study', slug)
                    .then((res) => {
                        this.page = res.data.data;
                    }).catch((res) => {
                    console.log(res);
                });
            });
    }
}
