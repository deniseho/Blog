import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-content',
  templateUrl: './post-content.component.html',
  styleUrls: ['./post-content.component.scss']
})
export class PostContentComponent implements OnInit {

  post: Post;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
