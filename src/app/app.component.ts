import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { AuthenticationService } from './auth/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public authService: AuthService,
    public authentication: AuthenticationService,
    public router: Router
  ) {
  }

  openDialog(): void {
    if(this.authentication.isLoggedIn){
      this.router.navigate(['admin'])
      return
    }
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
