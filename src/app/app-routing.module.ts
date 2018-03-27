import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerComponent} from './customer/listing/customer.listing.component';
import {FaqComponent} from './faq/faq.component';
import {BlogPostComponent} from './blog-post/listing/blog-post.component';
import {HomeComponent} from './home/home.component';
import {CustomerDetailsComponent} from './customer/details/customer.details.component';
import {BlogPostDetailsComponent} from './blog-post/details/blog-post.details.component';
import {FeedComponent} from './feed/feed.component';

const appRoutes: Routes = [
    {path: 'customer', component: CustomerComponent},
    {path: 'customer/:slug', component: CustomerDetailsComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'blog', component: BlogPostComponent},
    {path: 'blog/:slug', component: BlogPostDetailsComponent},
    {path: 'rss', component: FeedComponent},
    {path: 'home', component: HomeComponent},
    {path: '**', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
