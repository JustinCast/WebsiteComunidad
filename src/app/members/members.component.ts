import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Member } from '../models/Member';
import { User } from '../models/User';
import { DialogService } from '../dialog/dialog.service';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  private readonly githubUsers: Array<any> = [
    'Josu8e',
    'Baxi19',
    'Eliomar-Rodriguez',
    'EstebanBlanco',
    'jafetSuarez',
    'alejo18',
    'ErwinSalas',
    'CarlosMarioV',
    'jvsquez19',
    'Lazuli26',
    'LChacon',
    'kemblyqa',
    'JoseCHidalgo',
    'JustinCast',
    'migueladanrm',
  ]
  private readonly BASE_API_URL = 'https://api.github.com/users/'
  public members: Array<Member> = []

  constructor(public _http: HttpClient, public dialogService: DialogService) { }

  ngOnInit() {
    this.githubUsers.forEach(user => {
      this._http.get<User>(this.BASE_API_URL + user)
      .subscribe(
        data => {
          this.members.unshift(new Member(
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

  private setBioMaxLeng(bio: string): string{
    let maxLenght: number = 67
    if(bio === null){
      bio = 'Sin Bio'
      return bio
    }
    if(bio.length > maxLenght)){
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
    .confirm('There is not enough data', 'Let me add a little experience, and I will notice you')
    .subscribe(res => this.result = res);
  }
}
