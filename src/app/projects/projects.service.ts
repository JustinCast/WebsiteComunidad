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

  /**
   * Este metodo actualiza un proyecto en la BD
   * @param project - objeto proyecto
   */
  updateProject(project: any) {
    this._http.put(`${environment.SERVER_BASE_URL}proyectos/${project._id}`, project)
      .subscribe(
        success => {
          console.log('Proyecto actualizado correctamente actualizado correctamente')
        },
        err => {
          console.log(err)
        }
      )
  }

  /**
   * Metodo que retornara un projecto del array projects
   * getProject
   * @param projectId - ID del proyecto
   */
  public getProject(projectId: string): any {
    let project: any
    this.projects.forEach(p => {
      if(p._id === projectId){
        project = p
        return
      }
    })
    return project
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
