import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

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

  addTrack$(body: any): Observable<any> {
    console.log('body parametro:', body)

    return this.http.post(`${this.URL}/tracks/add`, body)
    
  }

  deleteTrack(uid: any): Observable<any> {
    return this.http.delete(`${this.URL}/tracks/delete/${uid}`)
  }

  editTrack(uid: any, name: any): Observable<any> {
    console.log('uid ', uid, 'name ', name)
    return this.http.put(`${this.URL}/tracks/edit/${uid}`, name)
  }
}
