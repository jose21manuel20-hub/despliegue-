import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  showInicio = true;

  explorar() {
    this.showInicio = false;
  }
}
