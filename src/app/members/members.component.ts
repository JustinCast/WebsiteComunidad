import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  private readonly members: Array<any>
  private readonly BASE_API_URL = 'https://api.github.com/users/'

  constructor(_http: HttpClient) { }

  ngOnInit() {
  }

}
