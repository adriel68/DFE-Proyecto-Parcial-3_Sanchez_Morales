import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Event } from '../models/event';
import { Observable } from 'rxjs';

const API_PATH = 'https://65663850eb8bb4b70ef30e25.mockapi.io/API/';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }


  getEventList(): Observable<Event[]> {
    const path = API_PATH + 'eventos';
    return this.http.get<Event[]>(path);
  }
}
