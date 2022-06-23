import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-movie',
  templateUrl: './one-movie.component.html',
  styleUrls: ['./one-movie.component.scss']
})
export class OneMovieComponent implements OnInit {

  @Input() film: any;

  constructor() { }

  ngOnInit(): void {
  }

}
