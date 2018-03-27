import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {ButterCMSService} from '../../_services';
import {map, take} from 'rxjs/operators';


@Component({
    selector: 'app-customer-details',
    templateUrl: './customer.details.component.html',
    styleUrls: ['./customer.details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

    constructor(protected route: ActivatedRoute,
                protected butterCMSService: ButterCMSService) {
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
                this.butterCMSService.customer(slug).pipe(
                    take(1)
                )
                    .subscribe(result => {
                        this.page = result ? result.data : null;
                    });
            });
    }
}
