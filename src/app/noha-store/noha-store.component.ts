import { Component, OnInit } from '@angular/core';

declare var bootstrap: any;

@Component({
    selector: 'app-noha-store',
    templateUrl: './noha-store.component.html',
    styleUrls: ['./noha-store.component.css']
})
export class NohaStoreComponent implements OnInit {

    ngOnInit(): void {
        const productos = [
            { id: 1, title: "Hoodie Azul", img: "assets/img/imgcamiseta1.jpg", price: 75000, sizes: ["S", "M", "L", "XL"] },
            { id: 2, title: "Camiseta Roja Detalles", img: "assets/img/imgcamiseta2.jpg", price: 65000, sizes: ["S", "M", "L", "XL"] },
            { id: 3, title: "Camiseta Ángel", img: "assets/img/imgcamiseta3.jpg", price: 42000, sizes: ["S", "M", "L", "XL"] },
            { id: 4, title: "Camiseta Blanca", img: "assets/img/imgcamiseta4.jpg", price: 42000, sizes: ["S", "M", "L", "XL"] },
            { id: 5, title: "Camiseta Negra", img: "assets/img/imgcamiseta5.jpg", price: 42000, sizes: ["S", "M", "L", "XL"] },
            { id: 6, title: "Saco Azul", img: "assets/img/imgcamiseta6.jpg", price: 75000, sizes: ["S", "M", "L", "XL"] },
        ];

        const btnExplorar = document.getElementById('btnExplorar')!;
        const inicio = document.getElementById('inicio')!;
        const catalogo = document.getElementById('catalogo')!;
        const productosRow = document.getElementById('productosRow')!;
        const productModalEl = document.getElementById('productModal')!;
        const productModal = new bootstrap.Modal(productModalEl, {});
        const modalTitle = document.getElementById('modalTitle')!;
        const modalImg = document.getElementById('modalImg')!;
        const modalPrice = document.getElementById('modalPrice')!;
        const tallaSelect = document.getElementById('tallaSelect')!;
        const addToCartBtn = document.getElementById('addToCart')!;

        let carrito: any[] = [];

        function formatPrice(n: number) {
            return n.toLocaleString('es-CO', {
                style: 'currency',
                currency: 'COP',
                maximumFractionDigits: 0
            });
        }

        function renderProductos() {
            productosRow.innerHTML = '';
            productos.forEach(p => {
                const col = document.createElement('div');
                col.className = 'col-sm-6 col-md-4';
                col.innerHTML = `
          <div class="card product-card h-100" data-product-id="${p.id}">
            <img src="${p.img}" class="card-img-top" alt="${p.title}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${p.title}</h5>
              <p class="mb-2 price">${formatPrice(p.price)}</p>
              <div class="mt-auto">
                <button class="btn btn-primary w-100 btn-view" data-id="${p.id}">Ver producto</button>
              </div>
            </div>
          </div>`;
                productosRow.appendChild(col);
            });

            productosRow.querySelectorAll('.btn-view').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = +(btn as HTMLElement).dataset.id!;
                    openProductModal(id);
                });
            });
        }

        function openProductModal(id: number) {
            const p = productos.find(x => x.id === id)!;
            modalTitle.textContent = p.title;
            (modalImg as HTMLImageElement).src = p.img;
            modalPrice.textContent = formatPrice(p.price);

            (tallaSelect as HTMLSelectElement).innerHTML = '';
            p.sizes.forEach(s => {
                const opt = document.createElement('option');
                opt.value = s;
                opt.textContent = s;
                tallaSelect.appendChild(opt);
            });

            productModal.show();

            (addToCartBtn as HTMLButtonElement).onclick = () => {
                const talla = (tallaSelect as HTMLSelectElement).value;
                carrito.push({ productId: p.id, title: p.title, price: p.price, size: talla });
                productModal.hide();
                alert(`${p.title} (Talla ${talla}) añadido al carrito ✅`);
                console.log('🛒 Carrito:', carrito);
            };
        }

        btnExplorar.addEventListener('click', () => {
            inicio.classList.add('hidden');
            catalogo.classList.remove('hidden');
            renderProductos();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}
