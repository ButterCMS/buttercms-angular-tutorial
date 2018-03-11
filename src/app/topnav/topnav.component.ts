import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {TopnavItem, Topnav} from '../_models/index';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit, OnDestroy {

  constructor(private router: Router) {
  }

  topnav: Topnav;
  private subscription: Subscription;

  ngOnInit() {
    this.createTopNavItems();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private createTopNavItems() {
    this.topnav = {
      home: [
        {
          textContent: 'Home',
          icon: 'home',
          svg: true,
          click: () => this.gotoHome()
        }
      ],
      commonItems: [
        {
          textContent: 'Customer',
          icon: undefined,
          activeCondition: '/customer',
          click: () => this.gotoCustomer()
        },
        {
          textContent: 'FAQ',
          icon: undefined,
          activeCondition: '/faq',
          click: () => this.gotoFaq()
        },
        {
          textContent: 'Blog Posts',
          icon: undefined,
          activeCondition: '/blog',
          click: () => this.gotoBlogPosts()
        },
        {
          textContent: 'RSS, Atom & Sitemap',
          icon: undefined,
          activeCondition: '/rss',
          click: () => this.gotoMisc()
        }
      ]
    };
  }

  gotoHome() {
    this.router.navigate([`/home`]);
  }
  gotoCustomer() {
    this.router.navigate([`/customer`]);
  }

  gotoFaq() {
    this.router.navigate([`/faq`]);
  }

  gotoBlogPosts() {
    this.router.navigate([`/blog`]);
  }

  gotoMisc() {
    this.router.navigate([`/rss`]);
  }
}

