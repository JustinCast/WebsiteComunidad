import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/Project';
import { environment } from '../../environments/environment';

@Injectable()
export class ProjectsService {
  projects: Array<Project>
  constructor(public _http: HttpClient) { }

  getProjectsRequest() {
    this._http.get<Project>(environment.SERVER_BASE_URL)
      .subscribe(
        success => {

        }
      )
  }

}
