import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostModule } from './blog/posts/post.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // AppRoutingModule,
    RouterModule.forRoot( [
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
      // { path: '**', redirectTo: 'posts', pathMatch: 'full' }
    ] ),
    PostModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
