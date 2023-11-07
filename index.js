document.addEventListener("DOMContentLoaded", function () {
  const contenido = document.getElementById("contenido");

  function mostrarProducto(categoria, id) {
    console.log("Aquí");
    const productos = {
      electronica: [
        {
          id: 1,
          nombre: "Producto 1 de Electrónica",
          descripcion: "Descripción del producto 1 de Electrónica",
        },
        {
          id: 2,
          nombre: "Producto 2 de Electrónica",
          descripcion: "Descripción del producto 2 de Electrónica",
        },
        {
          id: 3,
          nombre: "Producto 3 de Electrónica",
          descripcion: "Descripción del producto 3 de Electrónica",
        },
      ],
      ropa: [
        {
          id: 1,
          nombre: "Producto 1 de Ropa",
          descripcion: "Descripción del producto 1 de Ropa",
        },
        {
          id: 2,
          nombre: "Producto 2 de Ropa",
          descripcion: "Descripción del producto 2 de Ropa",
        },
        {
          id: 3,
          nombre: "Producto 3 de Ropa",
          descripcion: "Descripción del producto 3 de Ropa",
        },
      ],
      accesorios: [
        {
          id: 1,
          nombre: "Producto 1 de ACC",
          descripcion: "Descripción del producto 1 de ACC",
        },
        {
          id: 2,
          nombre: "Producto 2 de ACC",
          descripcion: "Descripción del producto 2 de ACCss",
        },
        {
          id: 3,
          nombre: "Producto 3 de ACC",
          descripcion: "Descripción del producto 3 de ACC",
        },
      ],
    };

    const productoEncontrado = productos[categoria].find(
      (producto) => producto.id == id
    );

    if (productoEncontrado) {
      contenido.innerHTML = `
      <div class="pt-6">
        <!-- Image gallery -->
        <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div class="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
          </div>
          <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center">
            </div>
            <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg" alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center">
            </div>
          </div>
          <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center">
          </div>
        </div>
    
        <!-- Product info -->
        <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div class="lg:col-span-2  lg:pr-8">
            <h1 class="text-2xl font-bold tracking-tight sm:text-3xl">${productoEncontrado.nombre}</h1>
          </div>
    
          <div class="py-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">
            <!-- Description and details -->
            <div>
              <h3 class="sr-only">Descripción</h3>
    
              <div class="space-y-6">
                <p class="text-base">${productoEncontrado.descripcion}</p>
                <a class="btn-secondary btn" href="#categoria/${categoria}">Volver a ${categoria}</a>
              </div>
            </div>
          </div>
        </div>
      </div>`;
    } else {
      contenido.innerHTML = "<h2>Producto no encontrado</h2>";
    }
  }

  function mostrarProductos(categoria) {
    const productos = {
      electronica: [
        {
          id: 1,
          nombre: "Producto 1 de Electrónica",
          descripcion: "Descripción del producto 1 de Electrónica",
        },
        {
          id: 2,
          nombre: "Producto 2 de Electrónica",
          descripcion: "Descripción del producto 2 de Electrónica",
        },
        {
          id: 3,
          nombre: "Producto 3 de Electrónica",
          descripcion: "Descripción del producto 3 de Electrónica",
        },
      ],
      ropa: [
        {
          id: 1,
          nombre: "Producto 1 de Ropa",
          descripcion: "Descripción del producto 1 de Ropa",
        },
        {
          id: 2,
          nombre: "Producto 2 de Ropa",
          descripcion: "Descripción del producto 2 de Ropa",
        },
        {
          id: 3,
          nombre: "Producto 3 de Ropa",
          descripcion: "Descripción del producto 3 de Ropa",
        },
      ],
      accesorios: [
        {
          id: 1,
          nombre: "Producto 1 de Acc",
          descripcion: "Descripción del producto 1 de Acc",
        },
        {
          id: 2,
          nombre: "Producto 2 de Acc",
          descripcion: "Descripción del producto 2 de Acc",
        },
        {
          id: 3,
          nombre: "Producto 3 de Acc",
          descripcion: "Descripción del producto 3 de Acc",
        },
      ],
    };

    const productosHTML = productos[categoria]
      .map(
        (producto) =>
          `
            <div class="card card-image-cover">
            <img src="https://source.unsplash.com/random/300x200" alt="" />
                <div class="card-body">
                    <h2 class="card-header">${producto.nombre}</h2>
                    <p class="text-content2">${producto.descripcion}</p>
                    <div class="card-footer">
                        <a class="btn btn-outline-primary" href="#producto/${categoria}/${producto.id}">Ver detalle</a>
                    </div>
                </div>
            </div>`
      )
      .join("");

    contenido.innerHTML = productosHTML;
  }

  function mostrarCategorias() {
    const categorias = ["electronica", "ropa", "accesorios"];

    const categoriasHTML = categorias
      .map(
        (categoria) =>
          `
            <div class="card card-image-cover">
            <img src="https://source.unsplash.com/random/300x200" alt="" />
                <div class="card-body">
                    <h2 class="card-header h2">${categoria}</h2>
                    <div class="card-footer">
                        <a class="btn btn-outline-primary" href="#categoria/${categoria}">Ver detalle</a>
                    </div>
                </div>
            </div>`
      )
      .join("");
    contenido.innerHTML = categoriasHTML;
  }

  function manejarRuta() {
    const ruta = window.location.hash.substring(1);
    const partes = ruta.split("/");
    console.log(partes);
    console.log(partes[0] == "producto");
    if (partes[0] === "categorias") {
      console.log("cat");
      mostrarCategorias();
      return;
    }

    if (partes[0] === "categoria") {
      if (partes.length === 2) {
        console.log("Mostrar Productos");
        mostrarProductos(partes[1]);
      }
    } else if (partes[0] == "producto") {
      const categoria = partes[1];
      const producto = partes[2];
      mostrarProducto(categoria, producto);
    } else if (partes[0] != "") {
      contenido.innerHTML = `
            <div class="text-center mt-5">
                <p class="text-base font-semibold">404</p>
                <h1 class="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
                    <p class="mt-6 text-base leading-7">Sorry, we couldn’t find the page you’re looking for.</p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
                <a href="/" class="rounded-md btn btn-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</a>
                <a href="#" class="text-sm font-semibold btn btn-outline-secondary">Contact support <span aria-hidden="true">&rarr;</span></a>
                </div>
            </div>`;
    }
  }

  window.addEventListener("hashchange", manejarRuta);
  manejarRuta();
});
