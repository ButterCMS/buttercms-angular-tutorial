import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {ButterCMSService} from '../../_services';
import {map, take} from 'rxjs/operators';


@Component({
  selector: 'app-blog-post-details',
  templateUrl: './blog-post.details.component.html',
  styleUrls: ['./blog-post.details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlogPostDetailsComponent implements OnInit {

  constructor(protected route: ActivatedRoute,
              protected butterCMSService: ButterCMSService) {
  }

  protected slug$: Observable<string>;
  public post = {
    meta : null,
    data:  null
  };

  ngOnInit() {
    this.slug$ = this.route.paramMap
      .pipe(
        map(params => (params.get('slug')))
      );

    this.slug$.pipe(
      take(1))
      .subscribe(slug => {
        this.butterCMSService.blogPost(slug).pipe(
          take(1)
        )
          .subscribe(result => {
            this.post = result;
          });
      });
  }
}
