import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class StudioService {
  private studioUrl = 'http://47.93.217.181:3000/studios'
  constructor(private http:HttpClient) { }
  getStudio(id: number) {
    const url = `${this.studioUrl}/${id}`;
    return this.http.get(url).pipe(
      catchError(this.handleError(`getStudio id=${id}`))
    );
  }
  getStudios () {
    return this.http.get(this.studioUrl)
    .pipe(
      catchError(this.handleError('getStudios', []))
    );
  }
  updateStudios(id,studio){
    const url = `${this.studioUrl}/${id}`;
    return this.http.patch(url,studio,httpOptions)
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return Observable.of(result as T);
    };
  }
}
