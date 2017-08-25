import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'cats',
  pure: false
})
export class CatsPipe implements PipeTransform {

  transform(input: Member[], desiredCats) {
    var output: Member[] = [];
    if(desiredCats === "low") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].cats <= 5) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCats === "high") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].cats > 5) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
