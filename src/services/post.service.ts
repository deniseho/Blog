import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from 'src/interfaces/post';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postsUrl = 'http://localhost:9001/posts';
  private commentsUrl = 'http://localhost:9001/posts';

  constructor(private http: HttpClient) {}

  getPostsList(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.postsUrl);
  }

  getPostContent(id: number): Observable<IPost> {
    return this.getPostsList().pipe(
      map((posts: IPost[]) => posts.find(p => p.id === id))
    );
  }

}
