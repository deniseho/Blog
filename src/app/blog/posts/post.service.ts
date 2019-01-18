import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:9001/posts';

  constructor(private http: HttpClient) {}

  getPostsList(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl).pipe(
      tap(data => console.log('posts: ' + JSON.stringify(data)))
    );
  }

  getPostContent(id: number): Observable<Post> {
    return this.getPostsList().pipe(
      map((posts: Post[]) => posts.find(p => p.id === id))
    );
  }

}
