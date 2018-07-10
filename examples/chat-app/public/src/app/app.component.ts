import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { Socket2Service } from './socket2.service';
import { Socket1Service } from './socket1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ChatService, Socket2Service, Socket2Service]
})
export class AppComponent implements OnInit {
  msg: string;
  msg1: string;
  msg2: string;

  constructor(private chatService: ChatService,
              private socket1Svc: Socket1Service,
              private socket2Svc: Socket2Service) {
  }

  ngOnInit() {
    this.chatService
      .getMessage()
      .subscribe(
        msg => this.msg = `1st ${msg}`
      );
    this.socket1Svc
      .getMessage()
      .subscribe(
        msg => this.msg1 = `Msg on port 8988: ${msg}`
      );
    this.socket2Svc
      .getMessage()
      .subscribe(
        msg => this.msg2 = `Msg on port 8989: ${msg}`
      );
  }

  sendMsg(msg) {
    this.chatService.sendMessage(msg);
  }

  sendMsg1(msg) {
    this.socket1Svc.sendMessage(msg);
  }

  sendMsg2(msg) {
    this.socket2Svc.sendMessage(msg);
  }

}
