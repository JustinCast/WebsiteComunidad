import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { 
  MatSnackBar, MatDialog 
} from '@angular/material';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

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
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.githubUsers = this.data.githubUsers
  }

  deleteUser(user: any) {
    this.data.githubUsers.splice(user, 1)
    this.githubUsers = this.data.githubUsers
    this.openSnackBar("Usuario eliminado", "Ok")
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
      this.data.githubUsers[index] = result
    });
    this.githubUsers = this.data.githubUsers
  }
}
