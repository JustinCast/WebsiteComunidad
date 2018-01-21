import { Component, AfterViewInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { AuthenticationService } from './auth/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  constructor(
    public authService: AuthService,
    public authentication: AuthenticationService,
    public router: Router
  ) {
  }
  
  ngAfterViewInit(): void {
    //document.body.style.backgroundImage = "url('../assets/mac.jpg');"
  }

  openDialog(): void {
    if(this.authentication.isLoggedIn()){
      this.router.navigate(['admin'])
      return
    }
    else {
      this.authService
      .confirm('', '')
      .subscribe(result =>{
        console.log(result)
      })
    }
  }

  logout(): boolean {
    this.authentication.logout();
    return false;
  }
}
