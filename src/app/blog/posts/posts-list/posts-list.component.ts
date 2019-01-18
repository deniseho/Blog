import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  posts: Post[] = [];

  constructor(
    private postService: PostService,
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
