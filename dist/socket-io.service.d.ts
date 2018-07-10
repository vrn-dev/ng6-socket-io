import { SocketIoConfig } from './socketIoConfig';
import { Observable } from 'rxjs';

export declare class WrappedSocket {
  subscribersCounter: number;
  ioSocket: any;

  constructor(config: SocketIoConfig);

  on(eventName: string, callback: Function): void;

  once(eventName: string, callback: Function): void;

  connect(): any;

  disconnect(close?: any): any;

  emit(eventName: string, data?: any, callback?: Function): any;

  removeListener(eventName: string, callback?: Function): any;

  removeAllListeners(eventName?: string): any;

  /** create an Observable from an event */
  fromEvent<T>(eventName: string): Observable<T>;

  fromEventOnce<T>(eventName: string): Promise<T>;
}
