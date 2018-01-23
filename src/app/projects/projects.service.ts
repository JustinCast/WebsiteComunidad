import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/Project';
import { environment } from '../../environments/environment';

@Injectable()
export class ProjectsService {
  projects: Array<Project>
  constructor(public _http: HttpClient) { 
    this.getProjectsRequest()
  }

  getProjectsRequest() {
    this._http.get<Project[]>(`${environment.SERVER_BASE_URL}proyectos`)
      .subscribe(
        success => {
          this.projects = success
        },
        err => {
          console.log(err)
        }
      )
  }

}
