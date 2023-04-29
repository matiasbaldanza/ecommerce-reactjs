const products = [
  {
    // source: https://tunotebook.com.ar/gamer/alienware-m15-r7-240hz-core-i7-12700h-32gb-512gb-rtx-3070ti/
    id: 1,
    name: 'Alienware M15 R7 15.6″ 240hz Core i7 12700H 16GB 512GB RTX 3070Ti',
    category: 'gamer',
    brand: 'Alienware',
    stock: 10,
    price: 1_275_890,
    priceCurrency: 'ARS',
    images: [
      'public/product-images/1-01-600x600.jpg',
      'public/product-images/1-02-600x600.jpg',
      'public/product-images/1-03-600x600.jpg',
      'public/product-images/1-04-600x600.jpg',
      'public/product-images/1-05-600x600.jpg',
      'public/product-images/1-06-600x600.jpg',
      'public/product-images/1-07-600x600.jpg',
      'public/product-images/1-08-600x600.jpg',
      'public/product-images/1-09-600x600.jpg'
    ],
    banner: 'public/product-images/1-banner-alienware-m15-r7.jpg',
    description: 'Obtén la ventaja que necesitas con la tecnología de refrigeración Alienware Cryo-tech™, que incorpora ventiladores con una nueva configuración y más del doble de aspas en un diseño un 37,5 % más fino que el de la generación anterior. El diseño con doble ventilador, que da prioridad al rendimiento, absorbe aire frío por las rejillas superior e inferior y expulsa el aire caliente por los lados izquierdo y derecho y la parte trasera. De este modo, se garantiza una experiencia de juego excepcional.',
    features: {
      cpu: {
        title: 'Procesador',
        text: `Intel Core i7 12700H
            4.7 GHz Performance 6-Core
            3.5 GHz Efficiency 8-Core
            Nucleos: 14
            Subprocesos: 20`
      },
      ram: {
        title: 'Memoria',
        text: `Capacidad: 32GB
            Tipo: DDR5
            Expandible: 64GB`
      },
      screen: {
        title: `Pulgadas: 15.6″
            Resolución: QHD 2560×1440
            Tecnología: WVA G-Sync
            Hz: 240Hz`
      },
      gpu: {
        title: 'Gráficos',
        text: `NVIDIA GeForce RTX 3070 Ti
            Memoria de Video: 8 GB GDDR6
            Switch MUX`
      },
      storage: {
        title: 'Almacenamiento',
        text: `Capacidad: 512 GB
            Tipo: SSD
            Tecnología: PCIe 4.0 NVMe`
      },
      connectivity: {
        title: 'Conectividad',
        text: `WiFi 6 802.11AX
            Bluetooth: Si
            Ethernet: Si 2500 Mbit/s`
      },
      os: {
        title: 'Sistema Operativo',
        text: 'Windows 11'
      },
      ports: {
        title: 'Puertos',
        text: `– 3 x USB Type-A 3.2 Gen 1
            – Type-C port (Thunderbolt™ 4, USB 3.2 Gen 2, DP 1.4,PD)
            – HDMI 2.1
            – RJ-45 Killer E3100 2.5Gbps
            – Headset jack`
      },
      other: {
        title: 'Otras características',
        text: `Webcam 720p
            Teclado Retroiluminado RGB
            AlienFX Lighting
            Cryo-tech`
      },
      model: {
        title: 'Modelo',
        text: `Marca: Alienware
            Linea: m15 R7
            Modelo: AWM15R7-7730BLK-PUS`
      },
      dimensions: {
        title: 'Dimensiones y peso',
        text: `35.6 x 27,2 x 2,39 cm
            Peso: 2,42 kg
            Chasis: Plástico`
      },
      usage: {
        title: 'Uso recomendado',
        text: 'Diseño, arquitectura, edición de fotografía, Render, Multimedia, internet, Gaming'
      }
    }
  },
  {
    // source: https://tunotebook.com.ar/gamer/msi-pulse-gl76-17-3-144hz-i7-12th-gen-16gb-512gb-rtx-3070-8gb/
    id: 2,
    name: 'MSI Pulse GL76 17.3″ 144hz i7 12th Gen 16GB 512GB RTX 3070 8GB',
    category: 'gamer',
    brand: 'Alienware',
    stock: 5,
    price: 989_890,
    priceCurrency: 'ARS',
    images: [
      'public/product-images/2-01-600x600.jpg',
      'public/product-images/2-02-600x600.jpg',
      'public/product-images/2-03-600x600.jpg',
      'public/product-images/2-04-600x600.jpg',
      'public/product-images/2-05-600x600.jpg',
      'public/product-images/2-06-600x600.jpg',
      'public/product-images/2-07-600x600.jpg'
    ],
    banner: 'public/product-images/2-banner-pulse-GL76.jpg',
    description: 'El más adaptable al cambio es el que sobrevive y evoluciona. Elige el espíritu del dragón y evoluciona con los últimos portátiles GL76 Gaming de MSI equipados con procesadores Intel® Core ™ i7 de 12va generación y las últimas tarjetas gráficas GeForce RTX diseñadas para jugadores con estilo. Su pantalla IPS de 144HZ con velocidad y claridad sin precedentes te ofrece las imágenes más vibrantes para que nunca pierdas el ritmo.',
    features: {
      cpu: {
        title: 'Procesador',
        text: `Intel® Core i7 12700H
            Velocidad: 2,30 GHz – 4,60 GHz
            Nucleos: 14 (Performance 6, Efficient 8)
            Subprocesos: 20`
      },
      ram: {
        title: 'Memoria',
        text: `Capacidad: 16GB
            Tipo: DDR4
            Ampliable: 64GB`
      },
      screen: {
        title: `Pulgadas: 17.3″
            Resolución: Full HD
            Tecnología: IPS
            Hz: 144hz`
      },
      gpu: {
        title: 'Gráficos',
        text: `NVIDIA GeForce RTX 3070
            Memoria de Video: 8 GB GDDR6`
      },
      storage: {
        title: 'Almacenamiento',
        text: `Capacidad: 512 GB
            Tipo: SSD
            Tecnología: PCIe 4.0 NVMe
            Slot Adicional NVMe`
      },
      connectivity: {
        title: 'Conectividad',
        text: `Intel Wi-Fi 6 AX201
            Bluetooth 5.2
            Ethernet: Si`
      },
      os: {
        title: 'Sistema Operativo',
        text: `Windows 11
            Versión: Home 64 bits`
      },
      ports: {
        title: 'Puertos',
        text: `2 x USB 3.2 Gen1
            USB 2.0
            USB 3.2 Gen1
            HDMI (4K @ 60Hz)
            Headphone/Microphone`
      },
      other: {
        title: 'Otras características',
        text: `Teclado Retroiluminado RGB
            Webcam 720p
            Nahimic 3 / Hi-Res Audio
            Cooler Boost 5`
      },
      model: {
        title: 'Modelo',
        text: `Marca: MSI
            Linea: GL Series
            Modelo: 12UGK-256`
      },
      dimensions: {
        title: 'Dimensiones y peso',
        text: `39,82 x 27,33 x 2,41 cm
            Peso: 2,79 kg
            Chasis: Plástico`
      },
      usage: {
        title: 'Uso recomendado',
        text: 'Gaming, Modelado 3D, Renders, Arquitectura, Animación, Edición video'
      }
    }
  },
  {
    // source: https://tunotebook.com.ar/gamer/lenovo-ideapad-gaming-3-120hz-ryzen-5-8gb-256gb-rtx-3050ti/
    id: 3,
    name: 'Lenovo IdeaPad Gaming 3 15.6″ 120hz Ryzen 5 8GB 256GB RTX 3050Ti',
    category: 'gamer',
    brand: 'Lenovo',
    stock: 5,
    price: 449_890,
    priceCurrency: 'ARS',
    images: [
      'public/product-images/3-01-600x600.jpg',
      'public/product-images/3-02-600x600.jpg',
      'public/product-images/3-03-600x600.jpg',
      'public/product-images/3-04-600x600.jpg',
      'public/product-images/3-05-600x600.jpg',
      'public/product-images/3-06-600x600.jpg',
      'public/product-images/3-07-600x600.jpg'
    ],
    banner: 'public/product-images/3-banner-idepad-gaming-3-ryzen.jpg',
    description: 'La Lenovo IdeaPad Gaming 3 mejora tu juego y nivela el campo de juego. Diseñado con la última generación de procesadores AMD Ryzen 5 y gráficos NVIDIA® GeForce® RTX, memoria DDR4 y opciones de almacenamiento PCIe SSD, este portátil para juegos proyecta una confianza silenciosa y serena con visuales suaves y cristalinas y un juego sin interrupciones. La IdeaPad Gaming 3 también se mantiene fresca, con un sistema térmico de alto rendimiento rediseñado que te permite jugar sin preocupaciones. Disfruta de la nítida pantalla FHD de 1080p para jugar sin problemas, y de la rapidísima GPU NVIDIA® GeForce RTX™ 3050 Ti para potenciar los juegos más populares de hoy, incluidos los títulos modernos.',
    features: {
      cpu: {
        title: 'Procesador',
        text: `AMD Ryzen 5 5600H
            Velocidad: 3,30 GHz – 4,20 GHz
            Nucleos: 6
            Subprocesos: 12`
      },
      ram: {
        title: 'Memoria',
        text: `Capacidad: 8GB
            Tipo: DDR4
            Expandible: 64GB`
      },
      screen: {
        title: `Pulgadas: 15.6″
            Resolución: FULL HD
            Tecnología: IPS
            Hz: 120`
      },
      gpu: {
        title: 'Gráficos',
        text: `NVIDIA GeForce RTX 3050 Ti
            Memoria de Video: 4GB GDDR6`
      },
      storage: {
        title: 'Almacenamiento',
        text: `Capacidad: 256 GB
            Tipo: SSD
            Tecnología: PCIe 3.0 NVMe
            Slot M.2 Adicional`
      },
      connectivity: {
        title: 'Conectividad',
        text: `WiFi 6 ( 802.11 ax)
            Bluetooth®
            Ethernet: Si`
      },
      os: {
        title: 'Sistema Operativo',
        text: `Windows 11
            Versión: Home 64 Bits`
      },
      ports: {
        title: 'Puertos',
        text: `USB-C® 3.2 Gen 1
            2x USB 3.2 Gen 1
            HDMI 2.0
            RJ-45
            Headphone / microphone`
      },
      other: {
        title: 'Otras características',
        text: `Teclado Retroiluminado
            Webcam 720p
            Pad Numérico
            Nahimic Audio`
      },
      model: {
        title: 'Modelo',
        text: `Marca: Lenovo
            Linea: IdeaPad Gaming 3
            Modelo: 82K201XCUS`
      },
      dimensions: {
        title: 'Dimensiones y peso',
        text: `35,96 x 25,19 x 2,41 cm
            Peso: 2,25 kg
            Chasis: Plástico`
      },
      usage: {
        title: 'Uso recomendado',
        text: 'Ofimática, Multimedia, Internet, Gaming, Diseño, Programación'
      }
    }
  }
]

const HALF_SECOND = 500

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, HALF_SECOND)
  })
}

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === id))
    }, HALF_SECOND)
  })
}

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.category === category))
    }, HALF_SECOND)
  })
}
