import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiCallService {

  public constructor(
    private httpClient: HttpClient
  ) {
  }

  public get<T>(url: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.httpClient
      .get<T>(
        url,
        {
          params,
        }
      );
  }

  public download<T>(url: string, params: HttpParams = new HttpParams(), responseType: any): Observable<T> {
    return this.httpClient
      .get<T>(
        url,
        {
          params,
          responseType
        }
      );
  }

  public post<T>(url: string, body?: any, params: HttpParams = new HttpParams()): Observable<T> {
    return this.httpClient
      .post<T>(
        url,
        body,
        {
          params,
        }
      );
  }

  public patch<T>(url: string, body?: any, params: HttpParams = new HttpParams()): Observable<T> {
    return this.httpClient
      .patch<T>(
        url,
        body,
        {
          params,
        }
      );
  }

  public put<T>(url: string, body?: any, params: HttpParams = new HttpParams()): Observable<T> {
    return this.httpClient
      .put<T>(
        url,
        body,
        {
          params,
        }
      );
  }

  public delete<T>(url: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.httpClient
      .delete<T>(
        url,
        {
          params,
        }
      );
  }
}
