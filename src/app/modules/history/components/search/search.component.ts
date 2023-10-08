import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  @Output() callbackData:EventEmitter<any> = new EventEmitter()
  
  src: string = ''

  constructor() { }
  
  ngOnInit(): void {

  }

  callSearch(term: string): void {
    this.callbackData.emit(term)
    console.log('🔴 term, search component ts: ', term)
  }
}