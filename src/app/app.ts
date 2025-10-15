// Asumo que este es el archivo donde está la clase AppComponent
import { Component } from '@angular/core';
// ... otras importaciones necesarias, como CommonModule si es standalone

@Component({
  selector: 'app-root',
  // ... (otros metadatos)
  templateUrl: './app.html',
  // ...
})
export class AppComponent {
  // Variable de control
  mostrarBienvenida: boolean = true;

  // Otros métodos o propiedades de tu componente
}