import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {butterService} from '../../_services';
import {map, take} from 'rxjs/operators';


@Component({
    selector: 'app-blog-post-details',
    templateUrl: './blog-post.details.component.html',
    styleUrls: ['./blog-post.details.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BlogPostDetailsComponent implements OnInit {

    constructor(protected route: ActivatedRoute) {
    }

    protected slug$: Observable<string>;
    public post = {
        meta: null,
        data: null
    };

    ngOnInit() {
        this.slug$ = this.route.paramMap
            .pipe(
                map(params => (params.get('slug')))
            );

        this.slug$.pipe(
            take(1))
            .subscribe(slug => {
                butterService.post.retrieve(slug)
                    .then((res) => {
                        // console.log(res.data)
                        this.post = res.data;
                    }).catch((res) => {
                    console.log(res);
                });
            });
    }
}
