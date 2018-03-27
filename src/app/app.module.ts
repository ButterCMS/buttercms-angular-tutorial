import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Butter} from 'buttercms';

import 'hammerjs';

import {AppComponent} from './app.component';
import {TopnavComponent} from './topnav/topnav.component';
import {CustomerComponent} from './customer/listing/customer.listing.component';
import {CustomerDetailsComponent} from './customer/details/customer.details.component';
import {FaqComponent} from './faq/faq.component';
import {BlogPostComponent} from './blog-post/listing/blog-post.component';
import {AppMaterialModule} from './_shared';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';

import {BlogPostDetailsComponent} from './blog-post/details/blog-post.details.component';
import {FeedComponent} from './feed/feed.component';


@NgModule({
    declarations: [
        AppComponent,
        TopnavComponent,
        CustomerComponent,
        CustomerDetailsComponent,
        FaqComponent,
        BlogPostComponent,
        BlogPostDetailsComponent,
        HomeComponent,
        FeedComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FlexLayoutModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppMaterialModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
