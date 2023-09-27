import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {
  mockCover: TrackModel = {
    cover: 'https://www.pixelstalk.net/wp-content/uploads/2016/09/Daft-Punk-Random-Access-Memories-Cover-Album-Wallpaper.jpg',
    album: 'Random Access Memory',
    name: 'Daft Punk',
    url: 'http://localhost/track.mp3',
    _id: 1
  }
}
