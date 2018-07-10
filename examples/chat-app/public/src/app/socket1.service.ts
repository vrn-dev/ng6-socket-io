import { Injectable } from '@angular/core';
import { Socket } from '../../../../../src/index';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Socket1Service extends Socket {

  constructor() {
    super({ url: 'http://localhost:8988', options: {} });
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
