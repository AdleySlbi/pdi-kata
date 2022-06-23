import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'pdi-kata';
  searchText: any = "";

  onSearchTextEnteredChild(searchValue: any){
    this.searchText = searchValue;
  }
}
