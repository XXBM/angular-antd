import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TestService {


  private testUrl = `automation/test`;

  constructor(private http: HttpClient) { }


  getHeroes(): Observable<string[]> {
    return this.http.get<string[]>(this.testUrl);
  }
}
