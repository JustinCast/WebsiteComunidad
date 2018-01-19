import { Injectable, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Member } from './models/Member';
import { MemberResponse } from './models/MemberResponse';

@Injectable()
export class DataService implements OnInit {
  readonly githubUsers: Array<any> = []
  members: Array<Member> = []
  constructor(private _http: HttpClient) {
    this.ngOnInit()
    // = [
    //   'Josu8e',
    //   'Baxi19',
    //   'Eliomar-Rodriguez',
    //   'EstebanBlanco',
    //   'jafetSuarez',
    //   'alejo18',
    //   'ErwinSalas',
    //   'CarlosMarioV',
    //   'jvsquez19',
    //   'Lazuli26',
    //   'LChacon',
    //   'kemblyqa',
    //   'JoseCHidalgo',
    //   'JustinCast',
    //   'migueladanrm',
    //   'Marcofeli',
    //   'BrayanArrieta',
    //   'juliomontano1997',
    //   'angelomedina',
    //   'xRaGeX'
    // ]
  }
  public get Users(): Array<any> {
    return this.githubUsers
  }
  
  ngOnInit(): void {
    console.log(environment.SERVER_BASE_URL + 'miembros')
    this._http.get<MemberResponse>(environment.SERVER_BASE_URL + 'miembros')
      .subscribe(
        success => {
          // console.log(success)
          this.members = success.members
          console.log(this.members)
        },
        err => {
          console.log(err)
        }
      )
    
  }

  private extractGithubUsernames(): void {
    this.members.forEach(m => {
      this.githubUsers.unshift(m.GithubUser)
    })
  }
}
