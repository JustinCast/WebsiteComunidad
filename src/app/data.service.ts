import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class DataService implements OnInit {
  readonly githubUsers: Array<any>
  constructor() {
    this.githubUsers = [
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
  }
  public get Users(): Array<any> {
    return this.githubUsers
  }
  
  ngOnInit(): void {
    
  }
}
