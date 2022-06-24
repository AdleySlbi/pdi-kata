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
    console.log(this.dataCopie)
    let newInfo: any = null;
    this.filmEdit.valueChanges.subscribe((value) => {
      
      // console.log("This is dataCopie.isAdult" + this.dataCopie.isAdult)
      // console.log("This is newInfo" + value.isAdult)

      this.dataCopie.isAdult = value.isAdult;
      this.dataCopie.runtimeMinutes = value.runtimeMinutes;
      this.dataCopie.startYear = value.startYear;
      this.dataCopie.endYear = value.endYear;
      this.dataCopie.genres = value.genres;
      // this.data = newInfo;
      // console.log(this.dataCopie)
    })


  }

  onNoClick(): void {
    this.dialogRef.close();
  }





}
