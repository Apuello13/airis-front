import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userName: string = '';
  typeUser: string = '';
  constructor(
    private router: Router,
    private _alert: AlertService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getTypeUser();
    this.getUserName();
  }

  getTypeUser(): void {
    const typeUser = sessionStorage.getItem('typeUser');
    if (typeUser) this.typeUser = typeUser;
  }

  logOut(): void {
    this._alert.logOut().then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/login']);
        sessionStorage.removeItem('user');
      }
    });
  }

  getUserName(): void {
    this.userName = this.getSessionStorage()?.name;
  }

  getSessionStorage() {
    const session = sessionStorage.getItem('user');
    if (session) return JSON.parse(session);
  }
}
