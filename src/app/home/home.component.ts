import { Component, OnInit, Input } from '@angular/core';
import { PixelserviceService } from '../servicio/pixelservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private pixelService: PixelserviceService,
    // tslint:disable-next-line: variable-name
              private _router: Router){}

title = 'lorenzo';
titulos: any[];

@Input()m: number;

// tslint:disable-next-line: use-lifecycle-interface
ngOnInit(){
  this.titulos = this.pixelService.getTitulos();
}

verTitulo(m: number){
  console.log (m);
  this._router.navigate( ['/pixlimg', m] );
  }

  // verButterfly(b: number){
  //   console.log (b);
  //   this._router.navigate( ['/pixlimg', b] );
  //   }

}
