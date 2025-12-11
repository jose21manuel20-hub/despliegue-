import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  productos = [
    { nombre: 'Camiseta Negra Estampada', descripcion: 'Diseño urbano exclusivo', precio: 42000, imagen: 'assets/imgcamiseta1.jpg' },
    { nombre: 'Camiseta Blanca Minimalista', descripcion: 'Estilo limpio premium', precio: 38000, imagen: 'assets/imgcamiseta2.jpg' },
    { nombre: 'Camiseta Roja Oversize', descripcion: 'Streetwear edición limitada', precio: 45000, imagen: 'assets/imgcamiseta3.jpg' },
    { nombre: 'Camiseta Azul Navy', descripcion: 'Colección verano', precio: 40000, imagen: 'assets/imgcamiseta4.jpg' },
    { nombre: 'Camiseta Gris Premium', descripcion: 'Tela suave y cómoda', precio: 39000, imagen: 'assets/imgcamiseta5.jpg' },

    // Nuevas
    { nombre: 'Camiseta Blanca K-12', descripcion: 'Diseño exclusivo #007', precio: 55000, imagen: 'assets/imgcamiseta7.jpg' },
    { nombre: 'Camiseta Negra León', descripcion: 'Edición artística #008', precio: 68000, imagen: 'assets/imgcamiseta8.jpg' },
    { nombre: 'Camiseta Gris Rick and Morty', descripcion: 'Colección animada #009', precio: 62000, imagen: 'assets/imgcamiseta9.jpg' },
    { nombre: 'Camiseta Blanca Música', descripcion: 'Estilo minimalista #010', precio: 50000, imagen: 'assets/imgcamiseta10.jpg' },
    { nombre: 'Camiseta Negra León Blanco', descripcion: 'Edición especial #011', precio: 45000, imagen: 'assets/imgcamiseta11.jpg' },
    { nombre: 'Camiseta Negra Kith x Nike', descripcion: 'Edición especial #012', precio: 50000, imagen: 'assets/imgcamiseta12.jpg' },
  ];

  carrito: any[] = [];
  mostrarCarrito = false;

  toggleCarrito() { this.mostrarCarrito = !this.mostrarCarrito; }
  agregarAlCarrito(producto: any) { this.carrito.push(producto); }
  eliminarDelCarrito(i: number) { this.carrito.splice(i, 1); }
  totalCarrito() { return this.carrito.reduce((t, p) => t + p.precio, 0); }
}
