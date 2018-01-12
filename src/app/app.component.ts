import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public authService: AuthService) {
  }

  openDialog(): void {
    this.authService
    .confirm('', '')
    .subscribe(result =>{
      console.log(result)
    })
  }
}
