import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProjectsService } from '../projects/projects.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { YesOrNoService } from '../yes-or-no/yes-or-no.service';
import { EditProjectComponent } from '../edit-project/edit-project.component';

@Component({
  selector: 'app-project-admin',
  templateUrl: './project-admin.component.html',
  styleUrls: ['./project-admin.component.scss']
})
export class ProjectAdminComponent implements OnInit, AfterViewInit {

  constructor(
    public _projectService: ProjectsService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public yesOrNoDialog: YesOrNoService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    /**
     * lo siguiente es necesario para quitar el padding por defecto que trae la libreria para paginació
     */ 
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '.zero-padding { padding: 0; background-color: #424242 }';
    document.getElementsByTagName('head')[0].appendChild(style);
    let ul = document.getElementsByClassName("ngx-pagination")
    ul[0].classList.add('zero-padding')
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  openEditDialog(project: any, index: number): void {
    let auxiliar = project
    let dialogRef = this.dialog.open(EditProjectComponent, {
      width: '65%',
      data: { 
        _id: project._id, 
        nombre: project.nombre,
        descripcion: project.descripcion,
        fecha_inicio: project.fecha_inicio,
        estado: project.estado,
        extractMembers: project.extractMembers,
        miembros: project.miembros
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if((result !== undefined) && (result !== auxiliar)){
        let updatedProject = {
          nombre: result.nombre,
          descripcion: result.descripcion,
          fecha_inicio: result.fecha_inicio,
          estado: result.estado,
          miembros: result.miembros
        }
        this._projectService.projects[index] = result
        this._projectService.updateProject(updatedProject)
        this.openSnackBar("Proyecto editado correctamente", "Ok")
      }
    })
  }

  deleteProject(index: number) {
    this.yesOrNoDialog
    .confirm('', '')
    .subscribe(result =>{
      console.log(result)
      if(result) {  
        this._projectService.projects.splice(index, 1)
        this.openSnackBar("Usuario eliminado", "Ok")
      }
    })
  }

}
