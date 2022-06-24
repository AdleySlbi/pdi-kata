import { Component, Inject, OnInit, OnChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})

export class EditDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data) { }



  public filmEdit = new FormGroup({
    isAdult: new FormControl(this.data.isAdult),
    minutes: new FormControl(this.data.runtimeMinutes),
    startYear: new FormControl(this.data.startYear),
    endYear: new FormControl(this.data.endYear),
    genres: new FormControl(this.data.genres),
  });

  dataCopie = this.data

  ngOnInit(): void {
    let newInfo: any = null;
    this.filmEdit.valueChanges.subscribe((value) => {

      this.dataCopie.isAdult = value.isAdult;
      this.dataCopie.runtimeMinutes = value.runtimeMinutes;
      this.dataCopie.startYear = value.startYear;
      this.dataCopie.endYear = value.endYear;
      this.dataCopie.genres = value.genres;
      
    })


  }

  onNoClick(): void {
    this.dialogRef.close();
  }





}
