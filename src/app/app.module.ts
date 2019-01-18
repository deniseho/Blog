import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostModule } from './blog/posts/post.module';
import { RouterModule } from '@angular/router';
import { PostsPipe } from './blog/posts/posts-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostsPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forChild( [
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
    ] ),
    PostModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
