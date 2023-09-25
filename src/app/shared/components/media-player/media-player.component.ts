import { Component } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {
  mockCover: any = {
    cover: 'https://www.pixelstalk.net/wp-content/uploads/2016/09/Daft-Punk-Random-Access-Memories-Cover-Album-Wallpaper.jpg',
    album: 'Random Access Memory',
    name: 'Daft Punk'
  }
}
