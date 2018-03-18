import {Component, OnInit} from '@angular/core';
import {ButterCMSService} from '../../_services';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  public posts: any[];

  constructor(private butterCMSService: ButterCMSService) {
  }

  ngOnInit() {
    this.butterCMSService.blogPosts().pipe(
      take(1)
    )
      .subscribe(result => {
        this.posts = result ? result.data : null;
      });
  }

}
