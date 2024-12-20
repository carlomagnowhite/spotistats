import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage',
  standalone: true
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): unknown {

    if( !images ){
      return 'assets/images/noimage.png';
    }

    if( images.length > 0 ){
      return images[0].url;
    }else{
      return 'assets/images/noimage.png';
    }

    return null;
  }

}
