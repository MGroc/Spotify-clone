import { Component, OnInit, NgModule } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { AdminService } from '@modules/admin/services/admin.service';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  
  // isIdDisabled = false;
  
  tracks: Array<TrackModel> = []
  selectedTrack: TrackModel = {
    name: '',
    album: '',
    cover: '',
    url: '',
    uid: ''
  }
  lblButton: string = 'Agregar'
  formAdmin: FormGroup = new FormGroup({})


  constructor( private trackService: TrackService, private adminService: AdminService ) {  }

  ngOnInit(): void {    

    this.getAllTracks()
    // console.log(this.tracks, 'response de --admin page component')

    this.formAdmin = new FormGroup({
      name: new FormControl('',
      [
        Validators.required
      ]),
      album: new FormControl('',
      [
        Validators.required,
      ]),
      cover: new FormControl('',
      [
        Validators.required
      ]),
      artist: new FormControl('',
      [
        Validators.required
      ]),
      uid: new FormControl({value: '', disabled: true})

    })
  }

  selectTrack(mode: number, track: TrackModel): void {
    switch (mode){
      case 0: 
        this.lblButton = 'Eliminar'
        // this.selectedTrack = track
        break;

      case 1:
        this.lblButton = 'Editar'
        // this.selectedTrack = track
        break;
    }
    this.selectedTrack = track
    this.updateInputs()
  }

  updateInputs() {
    // this.formAdmin.controls['name'].setValue(this.selectedTrack.name)
    let aux = {
      name: this.selectedTrack.name,
      album: this.selectedTrack.album,
      cover: this.selectedTrack.cover,
      artist: this.selectedTrack.artist,
      uid: this.selectedTrack.uid
    }
    this.formAdmin.setValue(aux)
  }

  executeABM(): void {
    if(confirm(`Estas seguro de que querés ${this.lblButton} una cancion?`)){

    
      
    
    const {name, album, cover, artist} = this.formAdmin.value
    let body = {
      name: name,
      album: album,
      cover: cover,
      artist: artist
    }
    
    switch (this.lblButton) {
      case 'Agregar':
        this.adminService.addTrack$(body)
          .subscribe(response => { 
            console.log('Respuesta de API: ', response)
          })

        break;
      case 'Eliminar':
        this.adminService.deleteTrack(this.selectedTrack.uid)
        .subscribe(response => {
          console.log('Respuesta de API: ', response)
        })
        break;
      case 'Editar':
        //Llamar a servicio para editar this.selectedTrack
        let aux = {
          name: body.name
        }
        const jsonName = JSON.stringify(aux)
        this.adminService.editTrack(this.selectedTrack.uid, jsonName)
        .subscribe(response => {
          console.log('Respuesta de API: ', response)
        })
        break;
    }
    setTimeout(() => {
      this.clearSelectedTrack()
      this.getAllTracks()
    }, 2000);
    }
  }

  clearSelectedTrack() {
      this.selectedTrack = {
        name: '',
        album: '',
        cover: '',
        url: '',
        uid: ''
      }
  }

  getAllTracks(): void {
    this.trackService.getAllTracks$()
    .subscribe((response: TrackModel[]) => 
      this.tracks = response
    )
  }
}

