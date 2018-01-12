import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public title: string;
  public message: string;
  constructor(public dialogRef: MatDialogRef<AuthComponent
    >) { }

  ngOnInit() {
    this.title = "Eliminar"
    this.message = "Está seguro que desea eliminar este usuario?"
  }

}
