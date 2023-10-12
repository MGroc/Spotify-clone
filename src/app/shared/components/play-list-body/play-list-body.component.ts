import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {
  @Input() tracks: TrackModel[] = []
  optionSort: {property:string | null, order: string} = {property: null, order: 'asc'}
  
  
  constructor(private trackService: TrackService) {}

  ngOnInit(): void {
    this.trackService.getAllTracks$()
    .subscribe((response: TrackModel[]) => 
      this.tracks = response
    )
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
