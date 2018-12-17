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
