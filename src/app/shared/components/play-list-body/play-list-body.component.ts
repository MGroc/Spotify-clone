import { Component } from '@angular/core';
import * as dataRaw from '../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent {
  tracks: TrackModel[] = []
  optionSort: {property:string | null, order: string} = {property: null, order: 'asc'}
  constructor() {}

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default
    this.tracks = data
  }

  changeSort(property: string): void {
    const { order } = this.optionSort 
    this.optionSort = {
      property:property,
      order: order == 'asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort)
  }
}
