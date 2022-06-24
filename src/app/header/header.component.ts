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

  searchOn:boolean = false;

  searchText: any = "";

  onSearchTextEntered(searchValue: any){
    this.searchText = searchValue;
    this.searchTextChangedChild.emit(this.searchText);
  }
  
  changeSearchStatus(){
    this.searchOn = !this.searchOn
  }

}
