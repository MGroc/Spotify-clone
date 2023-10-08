import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api
  constructor(private http: HttpClient) { 
    
  }

  getAllTracks$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
        map(({data}:any) => {
          return data
        })
      )
  }

  getAllRandom$(): Observable<any> {
    return this.http.get(`${this.URL}/tracks`)
      .pipe(
        map(({data}:any) => {
          return data.reverse()
        })
      )
  }
}
