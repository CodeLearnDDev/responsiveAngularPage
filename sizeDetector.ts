import {Component, AfterViewInit, HostListener} from '@angular/core';
import {ScreenSize} from './screenSize';
import {SizeService} from './sizeService';

@Component({
    selector:'sizeDetector',
    templateUrl:'./sizeDetector.html'
})
export class SizeDetector implements AfterViewInit{
    ngAfterViewInit(){
        this.detectChangeInScreenSize();
    }
    constructor(private resizeService: SizeService){

    }
    detectChangeInScreenSize(){
        var innerWidth = window.innerWidth;
        var size;
        if(innerWidth < 361){
            size = ScreenSize.XS;
        } else if(innerWidth > 360 && innerWidth < 763){
            size = ScreenSize.MD;
        } else if(innerWidth > 762 && innerWidth < 1200){
            size = ScreenSize.LG
        } else {
            size = ScreenSize.XL;
        }

        this.resizeService.triggerResize(size);
    }

    @HostListener('window:resize',[])
    handleWindowResize(){
        this.detectChangeInScreenSize();
    }
}