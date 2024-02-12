import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges{

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imgDefault = './assets/images/default.png'
  constructor() {
    // before render
    // no correr cosas async -- solo corre una vez
    console.log('constructor', 'imgValue =>', this.img);
  }
  ngOnInit(): void {
    // before render
    // async - fetch - once
    console.log('ngOnInit', 'imgValue =>', this.img)
  }
  imgError() {
    this.img = this.imgDefault;
  }
  imgLoaded() {
   console.log('log hijo');
   this.loaded.emit(this.img);
  }
  ngOnChanges() {
    // before render
    // changes on inputs -- every time an input is changed
    console.log('constructor', 'imgValue =>', this.img);
  }
}
