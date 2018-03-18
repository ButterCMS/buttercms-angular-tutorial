import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import 'hammerjs';

import {AppComponent} from './app.component';
import {TopnavComponent} from './topnav/topnav.component';
import {CustomerComponent} from './customer/listing/customer.listing.component';
import {CustomerDetailsComponent} from './customer/details/customer.details.component';
import {FaqComponent} from './faq/faq.component';
import {BlogPostComponent} from './blog-post/blog-post.component';
import {MiscComponent} from './misc/misc.component';
import {AppMaterialModule} from './_shared';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {ButterCMSService} from './_services';


@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    CustomerComponent,
    CustomerDetailsComponent,
    FaqComponent,
    BlogPostComponent,
    MiscComponent,
    HomeComponent
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
  providers: [ButterCMSService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
