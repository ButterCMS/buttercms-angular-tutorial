import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HelloYouComponent} from './hello-you/hello-you.component';
import {BlogPostDetailsComponent} from './blog-post-details/blog-post-details.component';
import {BlogPostListingComponent} from './blog-post-listing/blog-post-listing.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {CustomerListingComponent} from './customer-listing/customer-listing.component';
import {FaqComponent} from './faq/faq.component';
import {FeedComponent} from './feed/feed.component';
import {TopnavComponent} from './topnav/topnav.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppMaterialModule} from './shared';
import {HomeComponent} from './home/home.component';


@NgModule({
    declarations: [
        AppComponent,
        HelloYouComponent,
        BlogPostDetailsComponent,
        BlogPostListingComponent,
        CustomerDetailsComponent,
        CustomerListingComponent,
        FaqComponent,
        FeedComponent,
        HomeComponent,
        TopnavComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FlexLayoutModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppMaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
