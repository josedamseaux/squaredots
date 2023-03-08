import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PixelserviceService } from '../servicio/pixelservice.service';

@Component({
  selector: 'app-butterfly',
  templateUrl: './butterfly.component.html',
  styleUrls: ['./butterfly.component.css']
})
export class ButterflyComponent implements OnInit {

  constructor(private pixelService: PixelserviceService) { }

  butterfly: any[];

  ngOnInit() {
    this.butterfly = this.pixelService.getButterflies();
  }

}