import {Inject, Injectable} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthApiResult } from '../classes/auth-api-result';
import { SHRAMBA_BRSKALNIKA } from '../classes/shramba';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private apiUrl = environment.apiUrl;

  constructor(
    private readonly http: HttpClient,
    @Inject(SHRAMBA_BRSKALNIKA) private shramba: Storage
  ) { }

  prijavljen = new BehaviorSubject<boolean>(false);
  public get Prijavljen(): Observable<boolean>{
    return this.prijavljen.asObservable();
  }

  private b64Utf8(niz: string): string {
    return decodeURIComponent(
      Array.prototype.map
        .call(
          atob(niz),
          (znak: string) => {
            return '%' + ('00' + znak.charCodeAt(0).toString(16)).slice(-2);
          }
        )
        .join('')
    );
  }

  public jePrijavljen(): boolean {
    const token: string = this.getToken();
    if (token) {
      const koristnaVsebina = JSON.parse(this.b64Utf8(token.split('.')[1]));
      return koristnaVsebina.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }

  private authentication(urlAddress: string, data: any): Promise<AuthApiResult> {
    const url = `${this.apiUrl}/${urlAddress}`;
    return this.http
      .post(url, data)
      .toPromise()
      .then(rezultat => rezultat as AuthApiResult)
      .catch(this.handleError);
  }

  public getId(): string {
    const token: string = this.getToken();
    if (token) {
      return  JSON.parse(this.b64Utf8(token.split('.')[1]));
    } else {
      return "false";
    }
  }

  public getToken(): string {
    return this.shramba.getItem('dog-walkers-token') as string;
  }

  public saveToken(token: string): void {
    this.shramba.setItem('dog-walkers-token', token);
  }

  public login(email: string, password: string): Promise<any> {
    console.log('In login:)');

    return this.authentication('prijava', {email: email, geslo: password})
      .then((authResult: any) => {
        console.log(authResult);
        this.saveToken(authResult['žeton']);
        this.prijavljen.next(true);
    });
  }

  public logout(): void {
    this.shramba.removeItem('dog-walkers-token');
    this.prijavljen.next(false);
  }

  public async registration(registrationData: any): Promise<any> {
    return this.authentication('registracija', registrationData)
      .then((rezultatAvtentikacije: any) => {
        this.saveToken(rezultatAvtentikacije["žeton"]);
      });
  }

  public getRole(): string {
    if(this.jePrijavljen()) {
      const token: string = this.getToken();
      if (token) {
        let role = JSON.parse(this.b64Utf8(token.split('.')[1])).tipRacuna;
        return role;
      } else {
        return null;
      }
    }
    else {
      return null;
    }

  }

  private handleError(napaka: any): Promise<any> {
    console.error('Prišlo je do napake', napaka.error["sporočilo"] || napaka.error.errmsg || napaka.message || napaka);
    return Promise.reject(napaka.error["sporočilo"] || napaka.error.errmsg || napaka.message || napaka);
  }

}
