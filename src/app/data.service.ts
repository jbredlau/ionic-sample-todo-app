import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    private dataObservable = new Subject<number>();

    getDataObservable()  {
        return this.dataObservable;
    }

    setDataInObservable(data: number) {
        this.dataObservable.next(data);
    }

}
