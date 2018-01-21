import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { DataService } from '../data.service';
import { 
  MatSnackBar, MatDialog 
} from '@angular/material';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { YesOrNoService } from '../yes-or-no/yes-or-no.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, AfterViewInit {
  githubUsers: Array<any>
  constructor(
    public data: DataService, 
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public yesOrNoDialog: YesOrNoService
  ) { }

  ngOnInit() {
    this.githubUsers = this.data.githubUsers
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

  deleteUser(index: number) {
    this.yesOrNoDialog
    .confirm('', '')
    .subscribe(result =>{
      console.log(result)
      if(result) {  
        this.data.githubUsers.splice(index, 1)
        this.githubUsers = this.data.githubUsers
        this.openSnackBar("Usuario eliminado", "Ok")
      }
    })
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  openEditDialog(user: any, index: number): void {
    let auxiliar = user
    let dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: { user: user }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if((result !== undefined) && (result !== auxiliar)){
        this.data.githubUsers[index] = result
        this.githubUsers = this.data.githubUsers
        this.data.updateUser(this.data.getMember(user), result)
        this.openSnackBar("Usuario editado correctamente", "Ok")
      }
    })
  }
}
