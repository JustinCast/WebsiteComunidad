import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Member } from './models/Member';

@Injectable()
export class DataService {
  githubUsers: Array<any>
  members: Array<any>
  constructor(public _http: HttpClient) {
    this.getMembersRequest()
    this.githubUsers = new Array<any>()
    this.members = new Array<any>()
    }
    
  getMembersRequest() {
    console.log('ngOnInit')
    console.log(environment.SERVER_BASE_URL + 'miembros')
    this._http.get<Member[]>(environment.SERVER_BASE_URL + 'miembros')
      .subscribe(
        success => {
          // console.log(success)
          this.members = success
          //console.log(this.members)
          this.extractGithubUsernames()
        },
        err => {
          console.log(err)
        }
      )
  }

  /**
   * Este metodo actualiza un miembro en la BD
   */
  updateUser(member: any, new_github_user) {
    let params = new HttpParams().set('memberId', member._id);
    console.log(`${environment.SERVER_BASE_URL}miembros/${member._id}`)
    member.github_user = new_github_user
    this._http.put(`${environment.SERVER_BASE_URL}miembros/${member._id}`, member)
      .subscribe(
        success => {
          console.log('Miembro actualizado correctamente')
        },
        err => {
          console.log(err)
        }
      )
  }

  private extractGithubUsernames(): void {
    this.members.forEach(m => {
      //console.log(m.github_user)
      this.githubUsers.unshift(m.github_user)
    })
  }

  /**
   * Metodo que retornara un usuario del array miembros
   * getMember
   */
  public getMember(github_user: string): any {
    let member: any
    this.members.forEach(m => {
      if(m.github_user === github_user)
        member = m
    })
    return member
  }


  ngOnDestroy(){
    console.log('OnDestroy')
  }
}
