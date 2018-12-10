import {Component, OnInit} from '@angular/core';
import {butterService} from '../services';

@Component({
    selector: 'app-blog-post-listing',
    templateUrl: './blog-post-listing.component.html',
    styleUrls: ['./blog-post-listing.component.scss']
})
export class BlogPostListingComponent implements OnInit {
    public posts: any[];

    constructor() {
    }

    ngOnInit() {
        butterService.post.list({
            page: 1,
            page_size: 10
        }).then((res) => {
            this.posts = res.data.data;
        });
    }

}
