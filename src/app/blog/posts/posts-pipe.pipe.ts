import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post';

@Pipe({
  name: 'postsPipe'
})
export class PostsPipe implements PipeTransform {

  transform(posts: any) {

  }

}
