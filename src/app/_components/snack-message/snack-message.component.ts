import { Component } from '@angular/core';

@Component({
  selector: 'snack-message',
  template: '<div>{{ message }}</div>',
  inputs: ['message']
})
export default class SnackMessage {
  public message: string;
  constructor(message: string) {
    this.message = message;
  }
}