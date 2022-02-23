import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LocationApiResult } from "../classes/location-api-result";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private teachingApiUrl = 'https://teaching.lavbic.net/api/kraji';

  constructor(private http: HttpClient) { }

  public getAllLocations(): Promise<LocationApiResult[]> {
    const url: string = `${(this.teachingApiUrl)}/vsi`;

    return this.http
      .get(url)
      .toPromise()
      .then(data => data as LocationApiResult)
      .catch(error => this.handleError(error));
  }

  public getLocationsSortedByName(): Promise<LocationApiResult[]> {
    return this.getAllLocations()
      .then(data => {
        data.sort((a: any, b: any) => a.kraj.localeCompare(b.kraj));
        return this.uniqueLocations(data, 'kraj');
      })
      .catch(error => this.handleError(error))
  }

  public uniqueLocations(array: any, propertyName: string) {
    return array.filter((e: { [x: string]: any; }, i: any) => array.findIndex((a: { [x: string]: any; }) => a[propertyName] === e[propertyName]) === i);
  }

  private handleError(napaka: any): Promise<any> {
    console.error('Prišlo je do napake', napaka);
    return Promise.reject(napaka.message || napaka);
  }
}
