"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var io = require("socket.io-client");
var socket_io_module_1 = require("./socket-io.module");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var WrappedSocket = /** @class */ (function () {
  function WrappedSocket(config) {
    this.subscribersCounter = 0;
    var url = config.url || '';
    var options = config.options || {};
    this.ioSocket = io(url, options);
  }

  WrappedSocket.prototype.on = function (eventName, callback) {
    this.ioSocket.on(eventName, callback);
  };
  WrappedSocket.prototype.once = function (eventName, callback) {
    this.ioSocket.once(eventName, callback);
  };
  WrappedSocket.prototype.connect = function () {
    return this.ioSocket.connect();
  };
  WrappedSocket.prototype.disconnect = function (close) {
    return this.ioSocket.disconnect.apply(this.ioSocket, arguments);
  };
  WrappedSocket.prototype.emit = function (eventName, data, callback) {
    return this.ioSocket.emit.apply(this.ioSocket, arguments);
  };
  WrappedSocket.prototype.removeListener = function (eventName, callback) {
    return this.ioSocket.removeListener.apply(this.ioSocket, arguments);
  };
  WrappedSocket.prototype.removeAllListeners = function (eventName) {
    return this.ioSocket.removeAllListeners.apply(this.ioSocket, arguments);
  };
  /** create an Observable from an event */
  WrappedSocket.prototype.fromEvent = function (eventName) {
    var _this = this;
    this.subscribersCounter++;
    return rxjs_1.Observable.create(function (observer) {
      _this.ioSocket.on(eventName, function (data) {
        observer.next(data);
      });
      return function () {
        if (_this.subscribersCounter === 1)
          _this.ioSocket.removeListener(eventName);
      };
    }).pipe(operators_1.share());
  };
  /* Creates a Promise for a one-time event */
  WrappedSocket.prototype.fromEventOnce = function (eventName) {
    var _this = this;
    return new Promise(function (resolve) {
      return _this.once(eventName, resolve);
    });
  };
  WrappedSocket = __decorate([
    __param(0, core_1.Inject(socket_io_module_1.SOCKET_CONFIG_TOKEN)),
    __metadata("design:paramtypes", [Object])
  ], WrappedSocket);
  return WrappedSocket;
}());
exports.WrappedSocket = WrappedSocket;
//# sourceMappingURL=socket-io.service.js.map