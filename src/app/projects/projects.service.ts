import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/Project';
import { environment } from '../../environments/environment';
import { DataService } from '../data.service';

@Injectable()
export class ProjectsService {
  projects: Array<Project> = []
  constructor(public _http: HttpClient, private dataService: DataService) { 
    this.getProjectsRequest()
  }

  getProjectsRequest() {
    this._http.get<Project[]>(`${environment.SERVER_BASE_URL}proyectos`)
      .subscribe(
        success => {
          success.forEach(s => {
            this.projects.unshift(new Project(
              s._id, 
              s.nombre, 
              s.descripcion,
               s.fecha_inicio,
               s.estado,
               s.miembros
            ))
          })
          this.extractMembersFromID()
        },
        err => {
          console.log(err)
        }
      )
  }

  extractMembersFromID(){
    this.dataService.members.forEach(m => {
      this.projects.forEach(p => {
        p.miembros.forEach(memberId =>{
          if(memberId === m._id){
            p.extractMembers.unshift(m)
          }
        })
      })
    })
  }
}
