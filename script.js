
 // Lista de productos con respectivos datos
const productos = [
   {
    id: 1,
    nombre: 'Buscapina Perlas x10Caps',
    precio: 1800,
    imagen: './img/producto1.jpg'
   },
  {
    id: 2,
    nombre: 'Atomo Clásico pote x220Gr',
    precio: 6215,
    imagen: './img/producto2.jpeg'
  },
 {
   id: 3,
   nombre: 'Nicotinell chicles 4mgX24u',
   precio: 7540,
   imagen: './img/producto3.jpeg'
  },
  {
    id: 4,
    nombre: 'Bayer Empecid Crema x20Gr',
    precio: 2250,
    imagen: './img/producto4.jpeg'
  },
  { id: 5,
    nombre: 'Pharmaton Omega x30Cap',
     precio: 6960,
    imagen: './img/producto5.jpeg'
  },
  { id: 6,
    nombre: 'Goicochea Diabetex TX x400Gr',
    precio: 7000,
    imagen: './img/producto6.png'
  },
  { id: 7,
    nombre: 'Skin Active Micelar 400Ml',
    precio: 6250,
    imagen: './img/producto7.png'
  },
  { id: 8,
    nombre: 'Carbon Gel Exfoliante x120Gr',
    precio: 2550,
    imagen: './img/producto8.png'
  },
  { id: 9,
    nombre: 'Unesia Fortalecedor de uñas x7ml',
    precio: 2250,
    imagen: './img/producto9.jpeg'
  },
  { id: 10,
    nombre: 'Tio Nacho Aclarante 415Ml',
    precio: 4050,
    imagen: './img/producto10.png'
  },
  { id: 11,
    nombre: 'Dermaglos Ultra Hidratación x50gr',
    precio: 5245,
    imagen: './img/producto11.jpeg'
  },
  { id: 10,
    nombre: 'Mascara de pestañas waterproof',
    precio: 8050,
    imagen: './img/producto12.jpeg'
  }
      
  ];
  
  const productoC = document.getElementById('productosContenedor');
  const contadorCarrito = document.getElementById('contadorCarrito');
  // Función para mostrar productos en las tarejetas
  function mostrarProductos() {
    productoC.innerHTML = '';
    productos.forEach(productos => {
      const tarjetas = document.createElement('div');
      tarjetas.className = 'tarjetas';
      tarjetas.innerHTML =
        '<img src="' + productos.imagen + '" alt="' + productos.nombre + '">' +
        '<h3>' + productos.nombre + '</h3>' +
        '<p>$' + productos.precio + '</p>' +
        '<button class="botonCarrito" onclick="añadirCarrito(' + productos.id + ')">Añadir al carrito</button>';
      // appendChild se utiliza para agregar elementos HTML, en este caso como las tarjetas de productos, facilitando la manipulación del contenido HTML en respuesta a datos cambiantes o interacciones del usuario.
      productoC.appendChild(tarjetas);
    });
  }
  // Función para añadir productos al carrito
  function añadirCarrito(productosId) {
  // contador que incrementa al agregar producto
    let contador = parseInt(contadorCarrito.innerText);
    contador++;
    contadorCarrito.innerText = contador;
  }
  
  window.onload = mostrarProductos;

 // formulario validacion
  document.getElementById("formulario").addEventListener("submit", function(event) {
   
    // Obtener los valores de los campos
    let tunombre = document.getElementById("tunombre").value;
    let email = document.getElementById("email").value;
    let obraSocial = document.getElementById("obraSocial").value;
    let numeroAfiliado = document.getElementById("numeroAfiliado").value;
    let remedio = document.getElementById("remedio").value;
    let consulta = document.getElementById("consulta").value;

  
    // Condicion que validar si los campos obligatorios están completos
    if (tunombre && email && obraSocial && numeroAfiliado && remedio && consulta) {
      alert("Formulario enviado correctamente, nos comunicaremos contigo en la brevedad, revisa tu casilla de correo.");
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });