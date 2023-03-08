import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PixelserviceService } from '../servicio/pixelservice.service';


@Component({
  selector: 'app-imgindiv',
  templateUrl: './imgindiv.component.html',
  styleUrls: ['./imgindiv.component.css']
})
export class ImgindivComponent {

  titulo: any = {};

  constructor(private pixelservice: PixelserviceService,
              // tslint:disable-next-line: variable-name
              private _activatedRoute: ActivatedRoute){

      // tslint:disable-next-line: deprecation
      this._activatedRoute.params.subscribe(params =>{

      console.log(params.id);

      this.titulo = this.pixelservice.getTitulo(params.id);

      console.log(this.titulo);

      });
    }
}
