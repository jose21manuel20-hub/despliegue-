import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare const DD_RUM: any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Manuel');

  constructor() { }

  // log informativo
  logInfo(message: string) {
    if (typeof DD_RUM !== 'undefined') {
      DD_RUM.addAction(message, { level: 'info', module: 'AppComponent' }); // faltaba coma
    } else {
      console.warn('DD_RUM no está definido', message);
    }
  }

  // log de error
  logError(message: string, error?: any) {
    if (typeof DD_RUM !== 'undefined') {
      DD_RUM.addError(message, { error, level: 'error', module: 'AppComponent' }); // corregido: se usaba MessageChannel en lugar de message
    } else {
      console.warn('DD_RUM no está definido', message, error);
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (typeof DD_RUM !== 'undefined') {
        DD_RUM.addAction('Aplicación Angular iniciada correctamente');
      }
    }, 1000); // espera 1 segundo
  }

  // simulación de error
  simulateError() {
    try {
      throw new Error('Error simulado en la app');
    } catch (e) {
      this.logError('Se ha producido un error simulado', e);
    }
  }
}
