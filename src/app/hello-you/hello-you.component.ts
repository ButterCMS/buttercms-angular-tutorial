import {Component, OnInit} from '@angular/core';
import {butterService} from '../_services';

@Component({
    selector: 'app-hello-you',
    templateUrl: './hello-you.component.html',
    styleUrls: ['./hello-you.component.scss']
})
export class HelloYouComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        this.fetchPosts();
        this.fetchHeadline();
    }

    fetchPosts() {
        butterService.post.list({
            page: 1,
            page_size: 10
        })
            .then((res) => {
                console.log('Content from ButterCMS');
                console.log(res);
            });
    }

    fetchHeadline() {
        butterService.content.retrieve(['homepage_headline'])
            .then((res) => {
                console.log('Headline from ButterCMS');
                console.log(res);
            });
    }
}
