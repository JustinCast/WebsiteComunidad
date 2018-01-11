import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  githubUsers: Array<any>
  constructor(public data: DataService) { }

  ngOnInit() {
    this.githubUsers = this.data.githubUsers
  }

}
