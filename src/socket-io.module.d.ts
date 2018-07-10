import { InjectionToken, ModuleWithProviders } from '@angular/core';
import { WrappedSocket } from './socket-io.service';
import { SocketIoConfig } from './socketIoConfig';

/** Socket factory */
export declare function SocketFactory(config: SocketIoConfig): WrappedSocket;

export declare const SOCKET_CONFIG_TOKEN: InjectionToken<SocketIoConfig>;

export declare class SocketIoModule {
  static forRoot(config: SocketIoConfig): ModuleWithProviders;
}
