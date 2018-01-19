import { Injectable, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Member } from './models/Member';
import { MemberResponse } from './models/MemberResponse';

@Injectable()
export class DataService {
  githubUsers: Array<any> = new Array<any>()
  members: Array<any> = new Array<any>()
  constructor(private _http: HttpClient) {
    this.getData()
  }

  getData(): void {
    console.log(environment.SERVER_BASE_URL + 'miembros')
    this._http.get<Member[]>(environment.SERVER_BASE_URL + 'miembros')
      .subscribe(
        success => {
          // console.log(success)
          this.members = success
          console.log(this.members)
          this.extractGithubUsernames()
        },
        err => {
          console.log(err)
        }
      )
    
  }

  private extractGithubUsernames(): void {
    this.members.forEach(m => {
      console.log(m.github_user)
      this.githubUsers.unshift(m.github_user)
    })
  }
}
