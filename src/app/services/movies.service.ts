import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getFeatures() {
    // tslint:disable-next-line:max-line-length
    return this.http.get(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-01-30&api_key=ab447e64065a4c8a7a826a62eb951942&language=es&include_image_language=es`);
  }
}
