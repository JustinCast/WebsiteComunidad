import { Component, OnInit } from '@angular/core';
import { Project } from '../models/Project';
import { GithubUser } from '../models/GithubUser';
import { ProjectsService } from './projects.service';
import { Member } from '../models/Member';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  readonly projects: Array<Project>
  readonly extractedMembers: Array<Member>
  constructor(public projectService: ProjectsService) { 
    this.projects = projectService.projects
  }

  ngOnInit() {

  }

}
