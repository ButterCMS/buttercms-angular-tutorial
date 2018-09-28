import {Component, OnInit} from '@angular/core';
import {butterService} from '../services';

@Component({
    selector: 'app-misc',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
    protected rss;
    protected atom;
    protected sitemap;

    constructor() {
    }

    ngOnInit() {
        butterService.feed.retrieve('rss').then((res) => {
            this.rss = res.data.data;
        });

        butterService.feed.retrieve('atom').then((res) => {
            this.atom = res.data.data;
        });

        butterService.feed.retrieve('sitemap').then((res) => {
            this.sitemap = res.data.data;
        });
    }
}
