import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() searchTextChangedChild: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  searchText: any = "";

  onSearchTextEntered(searchValue: any){
    this.searchText = searchValue;
    console.log(this.searchText);
    this.searchTextChangedChild.emit(this.searchText);
  }

}
