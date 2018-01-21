import { Component,OnInit, OnDestroy, Input, AfterViewInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GithubUser } from '../models/GithubUser';
import { User } from '../models/User';
import { DialogService } from '../dialog/dialog.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit, OnDestroy, AfterViewInit {
  githubUsers: Array<any>
  private readonly BASE_API_URL = 'https://api.github.com/users/'
  public members: Array<GithubUser> = []

  constructor(public data: DataService, public _http: HttpClient, public dialogService: DialogService) {
    this.githubUsers = this.data.githubUsers
  }

  ngOnInit() {
    this.githubUsers.forEach(user => {
      this._http.get<User>(this.BASE_API_URL + user)
      .subscribe(
        data => {
          this.members.unshift(new GithubUser(
            data.name,
            "",
            this.setBioMaxLeng(data.bio),
            data.followers,
            data.following,
            data.avatar_url,
            this.setCompany(data.company),
            data.login,
            data.public_repos,
            data.public_gists
          ))
        },
        err => {
          console.log(err)
        }
      )
    });
  }

  ngAfterViewInit() {
    /**
     * lo siguiente es necesario para quitar el padding por defecto que trae la libreria para paginació
     */ 
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.zero-padding { padding: 0; background-color: #424242 }';
    document.getElementsByTagName('head')[0].appendChild(style);
    let ul = document.getElementsByClassName("ngx-pagination")
    ul[0].classList.add('zero-padding')
  }

  ngOnDestroy() {

  }

  private setBioMaxLeng(bio: string): string{
    let maxLenght: number = 67
    if(bio === null){
      bio = 'Sin Bio'
      return bio
    }
    if(bio.length > maxLenght){
      bio = bio.substring(0, maxLenght)
      bio += '...'
    }
    return bio
  }
  private setCompany(company: string): string{
    if(company === null)
      company = 'No hay grupo'
    return company
  }

  openDialog(): void {
    this.dialogService
    .confirm('', '')
    .subscribe();
  }
}
