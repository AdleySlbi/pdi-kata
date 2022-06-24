import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-one-movie',
  templateUrl: './one-movie.component.html',
  styleUrls: ['./one-movie.component.scss']
})
export class OneMovieComponent implements OnInit {

  @Input() film: any;
  @Output() modifFilm = new EventEmitter<any>();
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  filmModified: string = "";

  openDialog(){
    const dialogRef = this.dialog.open(EditDialogComponent, {
      panelClass: 'dialog-dimension',
      data: this.film
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      console.log(result)
      this.modifFilm.emit(result)
      // this.filmModified = result;
    })
  }

}
