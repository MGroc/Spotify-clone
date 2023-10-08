import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-track-page',
  templateUrl: './track-page.component.html',
  styleUrls: ['./track-page.component.css']
})
export class TrackPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObservers$:Array<Subscription> = []

  constructor( private trackService: TrackService ) {}

  ngOnInit(): void {    
    this.trackService.getAllTracks$()
    .subscribe((response: TrackModel[]) => 
      this.tracksTrending = response
    )

    this.trackService.getAllRandom$()
    .subscribe((response: TrackModel[]) => 
      this.tracksRandom = response
    )
  }

  ngOnDestroy(): void {

  }
}


