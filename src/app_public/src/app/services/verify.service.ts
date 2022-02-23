import {Inject, Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Uporabnik} from "../classes/uporabnik";
import {SHRAMBA_BRSKALNIKA} from "../classes/shramba";

@Injectable({
  providedIn: 'root'
})
export class VerifyService {

  private apiUrl = environment.apiUrl;
  private tokenName = 'dog-walkers-token';

  constructor(
    private readonly http: HttpClient,
    @Inject(SHRAMBA_BRSKALNIKA) private readonly storage: Storage
  ) { }

  public getNonVerified(): Promise<Uporabnik[]> {
    const url: string = `${(this.apiUrl)}/zavrnjeni`;

    return this.http
      .get(url)
      .toPromise()
      .then(data => data as Uporabnik[])
      .catch(error => this.handleError(error));
  }

  public verifyUser(userID: string): Promise<any> {
    const url: string = `${(this.apiUrl)}/potrdi/${userID}`;

    const httpAttributes = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem(this.tokenName)}`
      })
    };

    return this.http
      .put(url, httpAttributes)
      .toPromise()
      .then(data => data as any)
      .catch(error => this.handleError(error));
  }

  public denyUser(userID: string): Promise<any> {
    const url: string = `${(this.apiUrl)}/zavrni/${userID}`;

    const httpAttributes = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem(this.tokenName)}`
      })
    };

    return this.http
      .put(url, httpAttributes)
      .toPromise()
      .then(data => data as any)
      .catch(error => this.handleError(error));
  }

  private handleError(napaka: any): Promise<any> {
    console.error('Prišlo je do napake', napaka);
    return Promise.reject(napaka.message || napaka);
  }
}
