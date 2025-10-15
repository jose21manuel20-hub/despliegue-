import { Component } from '@angular/core';

@Component({
    selector: 'app-catalogo',
    templateUrl: './catalogo.component.html',
    // ...
})
export class CatalogoComponent {
    productos = [
        {
            nombre: 'Camiseta Saco Premium',
            // RUTA DE IMAGEN CONFIRMADA
            imagen: 'noha-store/img/img/imgcamiseta1.jpg',
            precio: 75000,
            tallas: ['L', 'XL']
        },
        {
            nombre: 'Camiseta Estándar Negra',
            // RUTA DE IMAGEN CONFIRMADA
            imagen: 'noha-store/img/img/imgcamiseta2.jpg',
            precio: 42000,
            tallas: ['L', 'XL']
        },
        // ... (restantes productos 3 y 4 con la misma estructura de ruta)
    ];

    formatearPrecio(precio: number): string {
        return precio.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 });
    }
}