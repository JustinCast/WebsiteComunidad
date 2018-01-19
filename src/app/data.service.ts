import { Injectable, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http/src/client';

@Injectable()
export class DataService implements OnInit {
  readonly githubUsers: Array<any>
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
    this._http.get
  }
}
