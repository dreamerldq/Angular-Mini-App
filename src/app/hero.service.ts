import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable} from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable()
export class HeroService {
  private heroesUrl = 'http://47.93.217.181:3000/news';
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add("英雄数组已被成功返回")
    return Observable.of(HEROES) //使用Observable.of将一个Hero[]类型的对象封装成一个Observable对象
  }
  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return Observable.of(HEROES.find(hero => hero.id === id));
  }
  getNew(id: number) {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
  getNews () {
    return this.http.get(this.heroesUrl)
    .pipe(
      catchError(this.handleError('getHeroes', []))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return Observable.of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }
}
