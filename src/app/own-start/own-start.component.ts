import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'own-own-start',
  templateUrl: './own-start.component.html',
  styleUrls: ['./own-start.component.scss']
})
export class OwnStartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let audio = new Audio('assets/zastavka.mp3');
    audio.load();
    audio.play();
  }

}
