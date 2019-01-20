import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/services/post.service';
import { IPost } from 'src/interfaces/post';
import { IComment } from 'src/interfaces/comment';
import { Router } from '@angular/router';
import { CommentService } from 'src/services/comment.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts: IPost[] = [];
  comments: IComment[] = [];

  constructor(
    private postService: PostService,
    private commentService: CommentService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.postService.getPostsList().subscribe(
      data => {
        this.posts = data;
      }
    );
  }


  // todo: sort the posts by date
  // get sortData() {
  //   return this.posts.sort((a, b) => {
  //     return <any>new Date(b.publish_date) - <any>new Date(a.publish_date);
  //   });
  // }

}
