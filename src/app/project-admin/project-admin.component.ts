import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects/projects.service';

@Component({
  selector: 'app-project-admin',
  templateUrl: './project-admin.component.html',
  styleUrls: ['./project-admin.component.scss']
})
export class ProjectAdminComponent implements OnInit {

  constructor(public _projectService: ProjectsService) { }

  ngOnInit() {
  }

}
