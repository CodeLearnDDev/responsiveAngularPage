import {Injectable} from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {ScreenSize} from './screenSize';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class SizeService{
    resizeObject: Subject<ScreenSize>;

    constructor(){
        this.resizeObject = new Subject();
    }

    handleObservable(): Observable<ScreenSize>{
        return this.resizeObject.asObservable().pipe(distinctUntilChanged());
    }

    triggerResize(size: ScreenSize){
        this.resizeObject.next(size);
    }
}