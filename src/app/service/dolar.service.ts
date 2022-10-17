import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DolarService {

  constructor( private http: HttpClient) { }

  getDolares(): Observable<any> {

    return this.http.get('https://www.dolarsi.com/api/api.php?type=valoresprincipales');
  }
}
