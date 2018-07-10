import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SocketIoModule } from '../../../../../socket-io.module';
import { SocketIoConfig } from '../../../../../socketIoConfig';
import { Socket1Service } from './socket1.service';
import { Socket2Service } from './socket2.service';

const config: SocketIoConfig = { url: 'http://localhost:8988', options: {} };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [Socket1Service, Socket2Service],
  bootstrap: [AppComponent]
})
export class AppModule {
}
