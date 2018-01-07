import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Member } from '../models/Member';
import { User } from '../models/User';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  private readonly githubUsers: Array<any> = [
    'JustinCast'
  ]
  private readonly BASE_API_URL = 'https://api.github.com/users/'
  public members: Array<Member> = []

  constructor(public _http: HttpClient) { }

  ngOnInit() {
    this.githubUsers.forEach(user => {
      this._http.get<User>(this.BASE_API_URL + user)
      .subscribe(
        data => {
          this.members.unshift(new Member(
            data.name,
            "",
            data.bio,
            data.followers,
            data.avatar_url
          ))
        },
        err => {
          console.log(err)
        }
      )
    });
  }

}
