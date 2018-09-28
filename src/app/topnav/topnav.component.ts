import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Topnav} from '../models';

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
                    click: () => this.gotoCustomer()
                },
                {
                    textContent: 'FAQ',
                    icon: undefined,
                    click: () => this.gotoFaq()
                },
                {
                    textContent: 'Blog Posts',
                    icon: undefined,
                    click: () => this.gotoBlogPosts()
                },
                {
                    textContent: 'RSS, Atom & Sitemap',
                    icon: undefined,
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

