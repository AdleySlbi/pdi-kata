import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import imdbData from '../../assets/json/imdb.json'

@Component({
  selector: 'app-all-movie',
  templateUrl: './all-movie.component.html',
  styleUrls: ['./all-movie.component.scss']
})
export class AllMovieComponent implements OnInit {
  @Input() searchTextField = "";

  // Avec une vraie API, j'aurai fais mon appel vers la BDD sur ce component
  public imdb: any = imdbData.imdb;

  public imdbSlice = this.imdb.slice(0,12)

  constructor() { }

  ngOnInit(): void {
    console.log(this.imdbSlice)
  }

  ngOnChanges(changes: SimpleChange): void {
    let imdbSearched: any;
    if(this.searchTextField !== "") {
      console.log(this.imdb);
      // Comprendre pourquoi le filter ne fonctionne pas
      imdbSearched = this.imdb.filter( test => test.originalTitle.includes(this.searchTextField))
      this.imdbSlice = imdbSearched.slice(0,12)
    } else {
      this.imdbSlice = this.imdb.slice(0,12)
    }
    // Raffraichir le tableau avec les bonnes donneés
  }

  onPageChange(event: PageEvent) {
    console.log(event)
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.imdb.length) {
      endIndex = this.imdb.length;
    }
    this.imdbSlice = this.imdb.slice(startIndex, endIndex);
  }




}
