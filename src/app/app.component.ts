import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { AuthenticationService } from './auth/authentication.service';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public authService: AuthService,
    public authentication: AuthenticationService,
  ) {
  }

  openDialog(): void {
    this.authService
    .confirm('', '')
    .subscribe(result =>{
      console.log(result)
    })
  }

  logout(): boolean {
    this.authentication.logout();
    return false;
  }
}
