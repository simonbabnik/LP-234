import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Uporabnik } from '../classes/uporabnik';
import { SHRAMBA_BRSKALNIKA } from "../classes/shramba";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UporabnikiService {

  constructor(private http: HttpClient,
    @Inject(SHRAMBA_BRSKALNIKA) private storage: Storage) { }

  uporabnikiApi: string = `${environment.apiUrl}/uporabniki/`;
  dashboard: string = `${environment.apiUrl}/dashboard/`;
  private tokenName = 'dog-walkers-token';

  getAllUsers() {
      return this.http.get(this.uporabnikiApi).toPromise().then(result => result as Array<Uporabnik>)
  }

  getUser(id: string) {
    return this.http.get(this.uporabnikiApi + id).toPromise().then(result => result as Uporabnik)
  }

  editUser(data: Uporabnik): Promise<any> {
    const url: string = `${this.uporabnikiApi}${data._id}`;

    const httpAttributes = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem(this.tokenName)}`
      })
    };

    return this.http
      .put(url, data, httpAttributes)
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);
  }

  deleteUser(data: Uporabnik) {
    const url: string = `${this.dashboard}${data._id}`;

    const httpAttributes = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem(this.tokenName)}`
      })
    };

    return this.http
      .delete(url, httpAttributes)
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Prišlo je do napake', error.error["sporočilo"] || error.error.errmsg || error.message || error);
    return Promise.reject(error.error["sporočilo"] || error.error.errmsg || error.message || error);
  }
}
