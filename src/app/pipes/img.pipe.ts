import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const url = environment.imgUrl;

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform(img: string, size: string = 'w500'): string {
    if (!img) {
      return './assets/img/no-image-banner.jpg';
    }
    const imgUrl = `${url}/${size}${img}`;
    console.log(imgUrl);
    return imgUrl;
  }

}
