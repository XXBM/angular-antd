import { Injectable  } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TableService {

  randomUserUrl = '/automation/displayAllAwardsRanks';

  getUsers(
    pageIndex: number = 1,
    pageSize: number = 10,
  ): Observable<{}> {
    const params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('rows', `${pageSize}`);
    return this.http.get(`${this.randomUserUrl}`, {
      params
    });
  }

  constructor(private http: HttpClient) {}
}
