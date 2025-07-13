(() => {

    //Crear un pequeño sistema que modele pedidos de una tienda y permita calcular el total con impuestos y aplicar descuentos según el tipo de cliente.

    enum TipoCliente {
        Regular = "Regular",
        Premium = "Premium",
        VIP = "VIP",
    }

    interface Producto {
        nombre: string;
        precio: number;
    }

    interface Pedido {
        productos: Producto[];
        cliente: TipoCliente;
    }


    function calcularTotalPedido(pedido: Pedido): number {
        let total = 0;
        for (const producto of pedido.productos) {
            total += producto.precio;
        }
        switch (pedido.cliente) {
            case TipoCliente.Regular:
                total *= 1.0;
                break;
            case TipoCliente.Premium:
                total *= 0.9;
                break;
            case TipoCliente.VIP:
                total *= 0.8;
                break;
        }
        return total * 1.21; // Aplicar un impuesto del 21%
    }

    // Prueba
    const pedidoEjemplo: Pedido = {
        cliente: TipoCliente.Premium,
        productos: [
            { nombre: "Café", precio: 1000 },
            { nombre: "Taza", precio: 1500 },
        ],
    };

    const total = calcularTotalPedido(pedidoEjemplo);
    console.log(`Total del pedido: $${total.toFixed(2)}`);



})();