import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../models/auth';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable()
export class AuthService {
  private authUrl: string = `${environment.apiUrl}/auth`;
  constructor(private http: HttpClient) {}

  login(auth: Auth) {
    return this.http.post<User>(`${this.authUrl}/login`, auth);
  }
}
