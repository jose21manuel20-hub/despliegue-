import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- REPARACIÓN CLAVE 1: Para usar *ngIf
import { CatalogoComponent } from './catalogo/catalogo.component'; // <-- REPARACIÓN CLAVE 2: Para usar <app-catalogo>

// Si tu componente no es standalone, ignora 'standalone: true'
// y asegúrate de que estas importaciones están en tu 'app.module.ts'
@Component({
  selector: 'app-root',
  standalone: true, // Si usas componentes aislados
  imports: [
    CommonModule,     // ¡Añade esto para que *ngIf funcione!
    CatalogoComponent, // ¡Añade esto para que <app-catalogo> funcione!
    // ... otros módulos que ya tuvieras (RouterOutlet, etc.)
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  // Asegúrate de que esta variable está declarada
  mostrarBienvenida: boolean = true;

  // ... otros métodos y propiedades que tenías
}