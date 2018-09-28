import {Component, OnInit} from '@angular/core';
import {butterService} from '../../services';

@Component({
    selector: 'app-blog-post',
    templateUrl: './blog-post.component.html',
    styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
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
