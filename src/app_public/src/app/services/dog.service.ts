import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { DogApiResult } from '../classes/dog-api-result';
import { environment } from "../../environments/environment";
import { Pes } from '../classes/pes';
import { SHRAMBA_BRSKALNIKA } from "../classes/shramba";

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient,
    @Inject(SHRAMBA_BRSKALNIKA) private storage: Storage) { }

  dogApi: string = "https://api.thedogapi.com/v1/breeds/";
  dogApiKey: string = "1f9c183c-4503-4b3f-8d0f-785695091ea1";
  dogApiUrl = `${environment.apiUrl}/dogs`;
  private tokenName = 'dog-walkers-token';

  getBreedInfo(breed: string) {
    return this.http
    .get(this.dogApi + "search?q=" + breed, {
      headers: new HttpHeaders({
        'x-api-key': '${this.dogApiKey}'
      })
    })
    .toPromise()
    .then(result => result as Array<DogApiResult>)
  }

  getAllBreeds() {
    return this.http
    .get(this.dogApi)
    .toPromise()
    .then(result => result as Array<DogApiResult>)
  }

  getPse() {
    return this.http.get(this.dogApiUrl).toPromise().then(result => result as Array<Pes>)
  }

  addDog(id: string, dog: Pes) {
    const httpAttributes = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem(this.tokenName)}`
      })
    };
    return this.http
      .post(this.dogApiUrl + "/" + id, dog, httpAttributes)
      .toPromise()
      .then(rezultat => rezultat as Pes)
      .catch(this.handleError)
  }

  deleteDog(id: string) {
    var ur = `${this.dogApiUrl}/${id}`
    const httpAttributes = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem(this.tokenName)}`
      })
    };
    return this.http.delete(ur, httpAttributes).toPromise().then(response => response as any).catch(this.handleError);
  }

  editDog(data: Pes): Promise<any> {
    const url: string = `${this.dogApiUrl}/${data._id}`;
    const httpAttributes = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem(this.tokenName)}`
      })
    };

    return this.http.put(url, data, httpAttributes).toPromise().then(response => response as any)
    .catch(this.handleError);

  }

  private handleError(napaka: any): Promise<any> {
    console.error('Prišlo je do napake', napaka.error["sporočilo"] || napaka.error.errmsg || napaka.message || napaka);
    return Promise.reject(napaka.error["sporočilo"] || napaka.error.errmsg || napaka.message || napaka);
  }
}
