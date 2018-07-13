import { InjectionToken, ModuleWithProviders, NgZone } from '@angular/core';
import { WrappedSocket } from './socket-io.service';
import { SocketIoConfig } from './socketIoConfig';

/** Socket factory */
export declare function SocketFactory(config: SocketIoConfig, ngZone: NgZone): WrappedSocket;
export declare const SOCKET_CONFIG_TOKEN: InjectionToken<SocketIoConfig>;
export declare class SocketIoModule {
  static forRoot(config: SocketIoConfig): ModuleWithProviders;
}
