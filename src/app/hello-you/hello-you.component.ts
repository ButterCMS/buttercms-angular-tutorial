import {Component, OnInit} from '@angular/core';

import {butterService} from '../services';

@Component({
    selector: 'app-hello-you',
    template: `
        <h1>Hello-You</h1>
        <p>
            Headline:
            {{headlines?.data?.homepage_headline}}
        </p>
        <p>
            Sample Post:
            {{posts? posts.data[0]?.url : 'no posts'}}
        </p>
    `,
    styles: []
})
export class HelloYouComponent implements OnInit {

    posts;
    headlines;

    constructor() {
    }

    ngOnInit() {
        this.fetchPosts();
        this.fetchHeadline();
    }

    private fetchHeadline() {
        butterService.content.retrieve(['homepage_headline'])
            .then((res) => {
                console.log('Headline from ButterCMS');
                console.log(res);
                this.headlines = res.data;
            });
    }

    private fetchPosts() {
        butterService.post.list({
                page: 1,
                page_size: 10
            })
            .then((res) => {
                console.log('Content from ButterCMS');
                console.log(res);
                this.posts = res.data;
            });
    }
}
