import {Component, OnInit} from '@angular/core';
import {take} from 'rxjs/operators';
import {ButterCMSService} from '../../_services';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.listing.component.html',
  styleUrls: ['./customer.listing.component.scss']
})
export class CustomerComponent implements OnInit {

  public pages: any[];

  constructor(private butterCMSService: ButterCMSService) {
  }

  ngOnInit() {
    this.butterCMSService.customers().pipe(
        take(1)
    )
      .subscribe( result => {
        this.pages = result.data;
      });
  }
}
