import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commentFilter'
})
export class CommentFilterPipe implements PipeTransform {

  transform(value: any, args: any[]): any {
    const subComments = [];

    value.forEach(element => {
      console.log('args: ');
      console.log(args);
      console.log('element: ');
      console.log(element);
      if (element.parent_id === args) {
        subComments.push(element);
      }
    });
    console.log(subComments);

    return subComments;
  }

}
