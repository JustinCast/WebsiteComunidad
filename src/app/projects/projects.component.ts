import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Project } from '../models/Project';
import { GithubUser } from '../models/GithubUser';
import { ProjectsService } from './projects.service';
import { Member } from '../models/Member';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  readonly projects: Array<Project>
  readonly extractedMembers: Array<Member>
  constructor(public projectService: ProjectsService) { 
    this.projects = projectService.projects
  }

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

}
