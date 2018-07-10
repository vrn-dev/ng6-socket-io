import { Injectable } from '@angular/core';
import { Socket } from '../../../../../index';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Socket2Service extends Socket {

  constructor() {
    super({ url: 'http://localhost:8989', options: {} });
  }

  getMessage() {
    return this.fromEvent<any>('msg')
      .pipe(
        map(data => data.msg)
      );
  }

  sendMessage(msg: string) {
    this.emit('msg', msg);
  }
}
