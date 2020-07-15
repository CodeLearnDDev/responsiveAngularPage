import { Component } from '@angular/core';
import {ScreenSize} from './SizeDetector/screenSize';
import {SizeService} from './SizeDetector/sizeService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo-Concepts';
  size;
  constructor(private resizeService: SizeService){
    this.resizeService.handleObservable().subscribe((x)=>{
      this.size = ScreenSize[x];
    })
  }
}
