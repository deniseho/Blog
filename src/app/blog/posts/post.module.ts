import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostContentComponent } from './post-content/post-content.component';
import { PostService } from '../../../services/post.service';
import { CommentService } from 'src/services/comment.service';

@NgModule( {
  declarations: [
    PostsListComponent,
    PostContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild( [
      { path: 'posts', component: PostsListComponent },
      { path: 'posts/:id', component: PostContentComponent}
    ] ),
  ],
  providers: [
    PostService,
    CommentService
  ]
} )
export class PostModule { }
