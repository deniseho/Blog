import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/interfaces/post';
import { IComment } from 'src/interfaces/comment';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/services/post.service';
import { map, tap } from 'rxjs/operators';
import { CommentService } from 'src/services/comment.service';

@Component( {
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss']
} )

export class PostContentComponent implements OnInit {

  post: IPost;
  comments: IComment[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private commentService: CommentService,
  ) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get( 'id' );
    if ( param ) {
      const id = +param;
      this.getPost( id );

    }
  }

  getPost( id: number ) {
    this.postService.getPostContent(id).subscribe(
      data => this.post = data
    );

    this.commentService.getPostComments(id).subscribe(
      data => this.comments = data
    );

  }

}
