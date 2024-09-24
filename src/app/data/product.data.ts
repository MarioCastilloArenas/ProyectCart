import { Product } from "../models/product";

export const products: Product[] = [
    {
        id: 1,
        name: "Teclado Mecánico Razer BlackWidow",
        description: "Teclado de alto rendimiento con switches Razer Green, ideal para gaming.",
        price: 1200,
        image: 'assets/imgs/razer.jpg'
    },
    {
        id: 2,
        name: "Teclado Mecánico Corsair K95 RGB",
        description: "Teclado premium con switches Cherry MX Speed, iluminación RGB y macros programables.",
        price: 1500,
        image: 'assets/imgs/corsair.jpg'
    },
    {
        id: 3,
        name: "Teclado Mecánico SteelSeries Apex Pro",
        description: "Teclado con switches mecánicos ajustables y display OLED integrado.",
        price: 1800,
        image: 'assets/imgs/apex.png'
    },
    {
        id: 4,
        name: "Teclado Mecánico Logitech G Pro X",
        description: "Teclado compacto con switches intercambiables y diseño portable.",
        price: 1300,
        image: 'assets/imgs/logitech.jpg'
    },
    {
        id: 5,
        name: "Teclado Mecánico HyperX Alloy Elite 2",
        description: "Teclado con switches HyperX Red, iluminación RGB dinámica y teclas multimedia dedicadas.",
        price: 1100,
        image: 'assets/imgs/hyperx.jpg'
    },
    {
        id: 6,
        name: "Teclado Mecánico Ducky One 2 Mini",
        description: "Teclado compacto con switches Cherry MX Blue, ideal para uso en espacios reducidos.",
        price: 900,
        image: 'assets/imgs/ducky.jpg'
    }
]