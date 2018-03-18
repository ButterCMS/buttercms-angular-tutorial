import {Component, OnInit} from '@angular/core';
import {take} from 'rxjs/operators';
import {ButterCMSService} from '../_services';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor(protected butterCMSService: ButterCMSService) {
  }

  public faq: any = {
    items: [],
    title: 'FAQ'
  };

  ngOnInit() {
    this.butterCMSService.faq().pipe(
      take(1)
    )
      .subscribe(result => {
        if (result) {
          this.faq.items = result.data.faq_items;
          this.faq.title = result.data.faq_headline;
        }
      });
  }
}
