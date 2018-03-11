import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerComponent} from './customer/customer.component';
import {FaqComponent} from './faq/faq.component';
import {BlogPostComponent} from './blog-post/blog-post.component';
import {MiscComponent} from './misc/misc.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {path: 'customer', component: CustomerComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'blog', component: BlogPostComponent},
  {path: 'rss', component: MiscComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
