import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {

  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  enteredSearchValue: string = "";

  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue); 
  }

}
