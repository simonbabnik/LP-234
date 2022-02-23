import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Oglas } from "../classes/oglas";
import { SHRAMBA_BRSKALNIKA } from "../classes/shramba";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private apiUrl = environment.apiUrl;
  private postApiUrl = `${environment.apiUrl}/oglasi`;
  private tokenName = 'dog-walkers-token';

  constructor(
    private http: HttpClient,
    @Inject(SHRAMBA_BRSKALNIKA) private storage: Storage
  ) { }

  public getAllPosts(): Promise<Oglas[]> {
    const url: string = this.postApiUrl;
    return this.http
      .get(url)
      .toPromise()
      .then(odgovor => odgovor as Oglas[])
      .catch(this.handleError);
  }

  public addPost(data: Oglas): Promise<any> {
    const url: string = this.postApiUrl;

    const httpAttributes = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem(this.tokenName)}`
      })
    };

    return this.http
      .post(url, data, httpAttributes)
      .toPromise()
      .then(response => response as any)
      .catch(this.handleError);
  }

  public editPost(data: Oglas): Promise<any> {
    const url: string = `${this.postApiUrl}/${data._id}`;

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

  public deletePost(postID: string): Promise<any> {
    const url: string = `${this.postApiUrl}/${postID}`;

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

  public getSortedByLocation(location: string): Promise<Oglas[]> {
    const url: string = `${this.postApiUrl}/sortiraj/${location}`;

    return this.http
      .get(url)
      .toPromise()
      .then(odgovor => odgovor as Oglas[])
      .catch(this.handleError);
  }

  getSortedByBestRated() {
    const url: string = `${this.apiUrl}/sortiraj-oglase-ocena`;

    return this.http
      .get(url)
      .toPromise()
      .then(odgovor => odgovor as Oglas[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Prišlo je do napake', error.error["sporočilo"] || error.error.errmsg || error.message || error);
    return Promise.reject(error.error["sporočilo"] || error.error.errmsg || error.message || error);
  }
}
