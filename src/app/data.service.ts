import { Injectable, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http/src/client';
import { MemberInterface } from './models/Member.interface';
import { Member } from './models/Member';

@Injectable()
export class DataService implements OnInit {
  readonly githubUsers: Array<any>
  members: Array<Member>
  constructor(private _http: HttpClient) {
    this.githubUsers = [] // = [
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
    this._http.get<MemberInterface>(environment.SERVER_BASE_URL + 'miembros')
      .subscribe(
        success => {
          this.members.unshift(new Member(
            success.nombre,
            success.apellidos,
            success.especialidad,
            success.github_user
          ))
          this.githubUsers.unshift(success.github_user)
        }
      )
  }
}
