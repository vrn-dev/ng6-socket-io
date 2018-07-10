"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var socket_io_service_1 = require("./socket-io.service");

/** Socket factory */
function SocketFactory(config) {
  return new socket_io_service_1.WrappedSocket(config);
}

exports.SocketFactory = SocketFactory;
exports.SOCKET_CONFIG_TOKEN = new core_1.InjectionToken('__SOCKET_IO_CONFIG__');
var SocketIoModule = /** @class */ (function () {
  function SocketIoModule() {
  }

  SocketIoModule_1 = SocketIoModule;
  SocketIoModule.forRoot = function (config) {
    return {
      ngModule: SocketIoModule_1,
      providers: [
        { provide: exports.SOCKET_CONFIG_TOKEN, useValue: config },
        {
          provide: socket_io_service_1.WrappedSocket,
          useFactory: SocketFactory,
          deps: [exports.SOCKET_CONFIG_TOKEN]
        }
      ]
    };
  };
  SocketIoModule = SocketIoModule_1 = __decorate([
    core_1.NgModule({})
  ], SocketIoModule);
  return SocketIoModule;
  var SocketIoModule_1;
}());
exports.SocketIoModule = SocketIoModule;
//# sourceMappingURL=socket-io.module.js.map