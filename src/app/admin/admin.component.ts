import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { 
  MatSnackBar, MatDialog 
} from '@angular/material';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { YesOrNoService } from '../yes-or-no.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
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
  openDialog(user: any, index: number): void {
    let dialogRef = this.dialog.open(EditDialogComponent, {
      width: '250px',
      data: { user: user }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result !== undefined){
        this.data.githubUsers[index] = result
        this.githubUsers = this.data.githubUsers
        this.openSnackBar("Usuario editado correctamente", "Ok")
      }
    })
  }
}
