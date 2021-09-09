import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';


import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Note } from '../models/note';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  private url = 'http://localhost:3000/notes';
  private handleError: HandleError;

  constructor(private http: HttpClient) {

  }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.url);
  }
}
