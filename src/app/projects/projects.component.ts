import { Component, OnInit } from '@angular/core';
import { Project } from '../models/Project';
import { Member } from '../models/Member';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  readonly projects: Array<Project>
  constructor() { 
  }

  ngOnInit() {
  }

}
