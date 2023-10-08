import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { TracksRoutingModule } from './tracks-routing.module';
import { TrackPageComponent } from './pages/track-page/track-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    TrackPageComponent
  ],
  imports: [
    CommonModule,
    TracksRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class TracksModule { }
