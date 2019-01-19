import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { IComment } from 'src/interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private commentsUrl = 'http://localhost:9001/comments';

  constructor(private http: HttpClient) { }

  getAllComments(): Observable<IComment[]> {
    return this.http.get<IComment[]>(this.commentsUrl).pipe(
      tap(data => console.log('All comments: ' + JSON.stringify(data)))
    );
  }

  getPostComments(id: number): Observable<IComment[]> {
    return this.getAllComments().pipe(
      map((comments: IComment[]) => comments.filter(c => c.postId === id))
    );
  }


}
