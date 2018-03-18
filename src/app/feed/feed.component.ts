import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {take} from 'rxjs/operators';
import {ButterCMSService} from '../_services';

@Component({
  selector: 'app-misc',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  protected rss$: Observable<any>;
  protected atom$: Observable<any>;
  protected sitemap$: Observable<any>;

  constructor(protected butterCMSService: ButterCMSService) {
  }

  ngOnInit() {
    this.rss$ = this.butterCMSService.feeds('rss').pipe(
      take(1)
    );

    this.atom$ = this.butterCMSService.feeds('atom').pipe(
      take(1)
    );

    this.sitemap$ = this.butterCMSService.feeds('sitemap').pipe(
      take(1)
    );
  }

  okToShow() {
    return this.butterCMSService.isConnected();
  }
}
