# Setup
## Install

Install Angular cli

npm install -g @angular/cli

ng version would result in :

```
Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.11.2
@angular-devkit/core         7.1.2
@angular-devkit/schematics   7.1.2
@schematics/angular          7.1.2
@schematics/update           0.11.2
rxjs                         6.3.3
typescript                   3.1.6
```

Setup a new Angular project using Angular cli

```
ng new buttercms-angular-seven 
```

In angular cli prompt, say `YES` to Angular Routing and choose `SCSS` using the arrow keys for the stylesheet format

change directory to the newly created angular application

```
cd buttercms-angular-seven
```


Install Angular Material and Angular Material related packages

```
npm install --save @angular/material @angular/cdk
npm install -S @angular/flex-layout
```

Install ButterCMS
`npm i -S buttercms`
The source code is [available on Github](https://github.com/ButterCMS/buttercms-angular-tutorial)

## Quickstart
Open the project in your code editor of choice.

Under src/app create a directory called `services`

We create a file called `butterCMS.service.ts`. This allows us to have our API Token in one place and not accidentally alter it.

```
import * as Butter from 'buttercms';

export const butterService = Butter('your_api_token');
```

We'll import this file into any component we want to use ButterCMS.

For a Quickstart create a component in angular to load the sample headlines and posts from buttercms

from your `buttercms-angular-seven` directory type:

```
ng g c hello-you -s true -t true --spec false 
```

This will create a component called `hello-you` with inline-style and inline-template with no spec file.
angular cli will also include this component in your app.module.ts

```
import {butterService} from '../services';
```

Inside HelloYouComponent create methods:

```
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
```

Now call this method when the component is loaded by adding it to the `OnInit` lifecycle hook:
```
    ngOnInit() {
      this.fetchPosts();
    }
```

This API request fetches our blog posts. Your account comes with one example post which you'll see in the response.

Next, create another method to retrieve the Homepage Headline Content Field:

```
    private fetchHeadline() {
        butterService.content.retrieve(['homepage_headline'])
            .then((res) => {
                console.log('Headline from ButterCMS');
                console.log(res);
                this.headlines = res.data;
            });
    }
```

Add this method to the `OnInit` lifecycle hook.

```
    ngOnInit() {
        this.fetchPosts();
        this.fetchHeadline();
    }
```

This API request fetches homepage headline content. You can setup your own custom content fields to manage any content kind of content you need.

Hook this component up in Angular by adding `<app-hello-you></app-hello-you> to app.component.html and see it in action!

# Pages
## Integrate your app

With our page defined, the ButterCMS API will return it in JSON format like this:
```
{
    "data": {
        "slug": "acme-co",
        "fields": {
            "facebook_open_graph_title": "Acme Co loves ButterCMS",
            "seo_title": "Acme Co Customer Case Study",
            "headline": "Acme Co saved 200% on Anvil costs with ButterCMS",
            "testimonial": "<p>We've been able to make anvils faster than ever before! - <em>Chief Anvil Maker</em></p>\r\n<p><img src=\"https://cdn.buttercms.com/NiA3IIP3Ssurz5eNJ15a\" alt=\"\" caption=\"false\" width=\"249\" height=\"249\" /></p>",
            "customer_logo": "https://cdn.buttercms.com/c8oSTGcwQDC5I58km5WV",
        }
    }
}
```

Here's how the whole hello-you.component.ts will look like:

```
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

```

This guide uses the [Angular](https://angular.io/) framework and  [Angular cli](https://cli.angular.io/) to generate all our components and package our application.
We are using [Angular Material](https://material.angular.io/) for our look and feel, but feel free to use any other.

Let's get to the code.

###
Now we will build on top of what we have created so far.

In a terminal run

`ng serve`

Your localhost:4200 should be ready to serve your Angular page.


Under src/app look at the file called app-routing.module.ts

Initially it looks like this :

```
 import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
 
 const routes: Routes = [];
 
 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }
 ```

### Update the routes in your app to route to the specified components.
These components are generated by angular cli using `ng g c <my-new-component>`
Here are 8 components we will need to create:

```
ng g c blog-post-details --spec false 
ng g c blog-post-listing --spec false 
ng g c customer-details --spec false 
ng g c customer-listing --spec false 
ng g c faq --spec false 
ng g c feed --spec false 
ng g c home --spec false
ng g c topav --spec false
```

You will also need a `shared` folder that contains a list of Angular Material modules
and a `model` folder, that will contain our topNav models.

Since we are using Angular Material, you will need to provide a `themes` folder that contains what theme we want to use for Angular Material.

Here is how your `app-routing.module.ts` should look like:
```
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FaqComponent} from './faq/faq.component';
import {HomeComponent} from './home/home.component';
import {FeedComponent} from './feed/feed.component';
import {HelloYouComponent} from './hello-you/hello-you.component';
import {BlogPostListingComponent} from './blog-post-listing/blog-post-listing.component';
import {CustomerListingComponent} from './customer-listing/customer-listing.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {BlogPostDetailsComponent} from './blog-post-details/blog-post-details.component';

const appRoutes: Routes = [
    {path: 'customer', component: CustomerListingComponent},
    {path: 'customer/:slug', component: CustomerDetailsComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'blog', component: BlogPostListingComponent},
    {path: 'blog/:slug', component: BlogPostDetailsComponent},
    {path: 'rss', component: FeedComponent},
    {path: 'hello-you', component: HelloYouComponent},
    {path: 'home', component: HomeComponent},
    {path: '**', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}


```


### Setup the Customers Page to list all our customers.
We've already created all the components we need so far.

#### In Customer listing page, we should
1. Import butterService
2. In OnInit hook, use butterService to get the list of customers
3. Store results in `pages` variable and markup (html) will be updated with the data

```
import {Component, OnInit} from '@angular/core';
import {butterService} from '../services';

@Component({
    selector: 'app-customer',
    templateUrl: './customer-listing.component.html',
    styleUrls: ['./customer-listing.component.scss']
})
export class CustomerListingComponent implements OnInit {

    public pages: any[];

    constructor() {
    }

    ngOnInit() {
        butterService.page.list('customer_case_study')
            .then((res) => {
                this.pages = res.data.data;
            });
    }
}
```

#### Display the results in customer-listing.component.html
```
<mat-card>
    <mat-card-title class="page-title">Customers</mat-card-title>
    <mat-divider></mat-divider>
    <mat-card-content class="page-body">
        <mat-card *ngFor="let page of pages">
            <mat-card-title>
                <div class="container">
                    <a [routerLink]="[page.slug]">
                        <div fxLayout="row" fxLayout.xs="column"
                             fxFlex class="content">
                            <div class="blocks">
                                <img src="{{page.fields.customer_logo}}" alt="{{page.fields.seotitle}}" height="64"
                                     width="64"/>
                            </div>
                            <div class="blocks">
                                {{page.fields.headline}}
                            </div>
                        </div>
                    </a>
                </div>
            </mat-card-title>
        </mat-card>
    </mat-card-content>
    <mat-divider></mat-divider>
    <mat-card-footer>
        <div class="page-footer">
            <mat-icon>whatshot</mat-icon>
        </div>
    </mat-card-footer>
</mat-card>
```


### Setup the Customer Page to view single page
In the customer details component

#### Create customer page
1. Import butterService
2. In OnInit hook, use butterService to get the customer page given the slug in the URL path
3. Store results in `page` variable and markup (html) will be updated with the customer data


```
import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {butterService} from '../services';
import {map, take} from 'rxjs/operators';


@Component({
    selector: 'app-customer-details',
    templateUrl: './customer-details.component.html',
    styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

    public page: any;
    protected slug$: Observable<string>;

    constructor(protected route: ActivatedRoute) {
    }

    ngOnInit() {
        this.slug$ = this.route.paramMap
            .pipe(
                map(params => (params.get('slug')))
            );

        this.slug$.pipe(
            take(1))
            .subscribe(slug => {
                butterService.page.retrieve('customer_case_study', slug)
                    .then((res) => {
                        this.page = res.data.data;
                    }).catch((res) => {
                    console.log(res);
                });
            });
    }
}

```

#### Display the result in customer-details.component.html
```
<mat-card>
    <div class="container">
        <div fxLayout="column" class="details">
            <div class="blocks">
                <img src="{{page?.fields?.customer_logo}}" alt="" height="124" width="124"/>
            </div>

            <h1 class="blocks">
                {{page?.fields?.headline}}
            </h1>
            <h3 class="is-size-3">Testimonials</h3>
            <div [innerHTML]="page?.fields?.testimonial"></div>
            <div [innerHTML]="page?.fields?.body"></div>
        </div>
    </div>
</mat-card>
```

We can now navigate to the Customer Page via the list of all Customer Pages or directly via url.

# Content Fields
## Integrate with your app
### Create FAQ Component

In the faq component we need to setup the onInit hook.

#### Setup onInit hook to load FAQ

```
import {Component, OnInit} from '@angular/core';
import {butterService} from '../services';

@Component({
    selector: 'app-faq',
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

    constructor() {
    }

    public faq: any = {
        items: [],
        title: 'FAQ'
    };

    ngOnInit() {
        butterService.content.retrieve(['faq_headline', 'faq_items'])
            .then((res) => {
                console.log(res.data.data);
                this.faq.title = res.data.data.faq_headline;
                this.faq.items = res.data.data.faq_items;
            });
    }
}
```

#### Display the result

```
<mat-card>
    <mat-card-title class="page-title">{{faq.title}}</mat-card-title>
    <mat-divider></mat-divider>
    <mat-card-content class="page-body">
        <mat-card *ngFor="let item of faq.items">
            <mat-card-content>
                <h3>
                    {{item.question}}
                </h3>
                <div>
                    {{item.answer}}
                </div>
            </mat-card-content>
        </mat-card>
    </mat-card-content>
    <mat-divider></mat-divider>
    <mat-card-footer>
        <div class="page-footer">
            <mat-icon>whatshot</mat-icon>
        </div>
    </mat-card-footer>
</mat-card>
```

That's it! The values entered in the Butter dashboard will immediately update the content in our app.


# Blog Engine

To display posts we create a simple `/blog` route in our app and fetch blog posts from the Butter API, as well as a `/blog/:slug` route to handle individual posts.

See our API reference for additional options such as filtering by category or author. The response also includes some metadata we'll use for pagination.


### Setup the Blog page to list all our posts.

In the blog-post-listing component, import butterService and load all posts using the onInit hook.

#### Update component to get all posts
1. import butterService
2. Get all post onInit

```
import {Component, OnInit} from '@angular/core';
import {butterService} from '../services';

@Component({
    selector: 'app-blog-post-listing',
    templateUrl: './blog-post-listing.component.html',
    styleUrls: ['./blog-post-listing.component.scss']
})
export class BlogPostListingComponent implements OnInit {
    public posts: any[];

    constructor() {
    }

    ngOnInit() {
        butterService.post.list({
            page: 1,
            page_size: 10
        }).then((res) => {
            this.posts = res.data.data;
        });
    }
}

```

#### Display the result
```
<mat-card>
    <mat-card-title class="page-title">Blog Posts</mat-card-title>
    <mat-divider></mat-divider>
    <mat-card-content class="page-body">
        <mat-card *ngFor="let post of posts">
            <mat-card-title>

                <a [routerLink]="[post.slug]">
                    <div class="container">
                        <div fxLayout="row" fxLayout.xs="column"
                             fxFlex class="content">
                            <div class="blocks">
                                <img *ngIf="post.featured_image" src="{{post.featured_image}}" alt="featured image"
                                     height="64" width="64"/>
                            </div>
                            <div class="blocks">
                                {{post.title}}
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div fxLayout="column" class="summary">
                            <div [innerHTML]="post.summary"></div>
                        </div>
                    </div>
                </a>
            </mat-card-title>
        </mat-card>
    </mat-card-content>
    <mat-divider></mat-divider>

    <mat-card-footer>
        <div class="page-footer">
            <mat-icon>whatshot</mat-icon>
        </div>
    </mat-card-footer>
</mat-card>

```

### Setup the Blog Post page to list a single post.
blog-post-details will show a single post.

`apps/blog-post-details.component.ts`

#### To show to the single post
1. Import butterService
2. In OnInit hook, use butterService to get the blog-post post given the slug in the URL path
3. Store results in `post` variable and markup (html) will be updated with the customer data

```
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {butterService} from '../services';
import {map, take} from 'rxjs/operators';


@Component({
    selector: 'app-blog-post-details',
    templateUrl: './blog-post-details.component.html',
    styleUrls: ['./blog-post-details.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BlogPostDetailsComponent implements OnInit {

    constructor(protected route: ActivatedRoute) {
    }

    protected slug$: Observable<string>;
    public post = {
        meta: null,
        data: null
    };

    ngOnInit() {
        this.slug$ = this.route.paramMap
            .pipe(
                map(params => (params.get('slug')))
            );

        this.slug$.pipe(
            take(1))
            .subscribe(slug => {
                butterService.post.retrieve(slug)
                    .then((res) => {
                        this.post = res.data;
                    }).catch((res) => {
                    console.log(res);
                });
            });
    }
}
```

#### Display the results
```
<mat-card>
    <div class="container">
        <div fxLayout="column" class="blog-details">
            <div class="container">
                <div fxLayout="row">
                    <h1 class="blocks">
                        {{post.data?.title}}
                    </h1>
                    <div *ngIf="post.meta?.previous_post"><a [routerLink]="post.meta.previous_post"><</a></div>
                    <div *ngIf="post.meta?.next_post"><a [routerLink]="post.meta.next_post">></a></div>
                </div>
                <h4>
                    {{ post.data?.author?.first_name }} {{ post.data?.author?.last_name }}
                </h4>
                <div class="post-body" [innerHTML]="post.data?.body"></div>
            </div>
        </div>
    </div>
</mat-card>
```

Now our app is pulling all blog posts and we can navigate to individual posts.

However, our next/previous post buttons are not working. You should try showing the next/previous posts after this tutorial.



Now our app has a working blog that can be updated easily in the ButterCMS dashboard.

### Categories, Tags, and Authors

Use Butter's APIs for categories, tags, and authors to feature and filter content on your blog:

#### List all categories and get posts by category
Call these methods on the `onInit()` lifecycle hook
```
methods: {
  ...
  getCategories() {
    butter.category.list()
      .then((res) => {
        console.log('List of Categories:')
        console.log(res.data.data)
      })
  },
  getPostsByCategory() {
    butter.category.retrieve('example-category', {
        include: 'recent_posts'
      })
      .then((res) => {
        console.log('Posts with specific category:')
        console.log(res)
      })
  }
},
created() {
  ...
  this.getCategories()
  this.getPostsByCategory()
}
```

### RSS, Atom, and Sitemap

Butter generates RSS, Atom, and sitemap XML markup. To use these on your blog, return the generated XML from the Butter API with the proper content type headers.

Create a file to see an example of what we get back from the API.

`app/feed/feed.component.ts`

```
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
            console.log(res.data.data);
            this.rss = res.data.data;
        });

        butterService.feed.retrieve('atom').then((res) => {
            console.log(res.data.data);
            this.atom = res.data.data;
        });

        butterService.feed.retrieve('sitemap').then((res) => {
            console.log(res.data.data);
            this.sitemap = res.data.data;
        });
    }
}

```
### to display the result we get from butterService

```
<mat-card>
    <mat-card-title class="page-title">RSS, Atom & Sitemap</mat-card-title>
    <mat-divider></mat-divider>
    <div class="feeds">
        <mat-card>
            <mat-card-title>RSS</mat-card-title>
            <mat-card-content>{{rss}}</mat-card-content>
        </mat-card>
        <mat-card>
            <mat-card-title>Atom</mat-card-title>
            <mat-card-content>{{atom}}</mat-card-content>
        </mat-card>
        <mat-card>
            <mat-card-title>Sitemap</mat-card-title>
            <mat-card-content>{{sitemap}}</mat-card-content>
        </mat-card>
    </div>
    <mat-divider></mat-divider>
    <mat-card-footer>
        <div class="page-footer">
            <mat-icon>whatshot</mat-icon>
        </div>
    </mat-card-footer>
</mat-card>

```

Navigate to `localhost:4200/rss`

We can see ButterCMS passes back the entire xml need to create a feed or sitemap. However, this demo page will not work for our subscribers. We need to create xml files they can link to in their RSS readers.

This can be a challenge for a static deployed site built using Angular that has dynamic content.

Fortunately ButterCMS has [Webhooks](https://buttercms.com/docs/api/#webhooks) that we can utilizing to POST change notifications.

#### Setup to create feeds and sitemap
Setup up a listener webhook on your hosting that will trigger a rebuild or redeploy of your static site when it receives a POST request.

Setup a POST Webhook in the ButterCMS dashboard with the Event "Blog Post Create, Update, or Delete" and paste the listener url into Target URL field.

![ButterCMS Webhooks](https://raw.githubusercontent.com/bmrankin/buttercms-vue-tutorial/master/ButterCMS-Webhooks.png "ButterCMS Webhooks")

## Other

View our [Angular Blog engine](https://buttercms.com/angular-blog-engine/) and [Angular Full CMS](https://buttercms.com/angular-cms/) for other examples of using ButterCMS with Angular.
