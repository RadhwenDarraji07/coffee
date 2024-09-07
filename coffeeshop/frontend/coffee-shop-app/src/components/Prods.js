/*
  Ensure your tailwind.config.js is set up with the @tailwindcss/aspect-ratio plugin:
  
  // tailwind.config.js
  module.exports = {
    plugins: [
      require('@tailwindcss/aspect-ratio'),
      // other plugins...
    ],
  }
*/

const products = [
    {
      id: 1,
      name: 'Coorg Pure Arabica Coffee',
      href: '#',
      imageSrc: 'https://d3kgrlupo77sg7.cloudfront.net/media/chococoorgspice.com/images/products/coorg-pure-arabica-filter-coffee-powder.20231001144701.webp',
      imageAlt: 'Coorg Pure Arabica Coffee',
      price: '$15',
      color: 'Dark Roast',
    },
    {
      id: 2,
      name: 'Coorg Pure Arabica Coffee',
      href: '#',
      imageSrc: 'https://hattikaapi.com/wp-content/uploads/2019/08/Pure-Pouch-1.png',
      imageAlt: 'Coorg Pure Arabica Coffee',
      price: '$15',
      color: 'Dark Roast',
    },
    {
      id: 3,
      name: 'Coorg Pure Arabica Coffee',
      href: '#',
      imageSrc: 'https://hattikaapi.com/wp-content/uploads/2019/08/Chicory-Tin.png',
      imageAlt: 'Coorg Pure Arabica Coffee',
      price: '$15',
      color: 'Dark Roast',
    },
    {
      id: 4,
      name: 'Coorg Pure Arabica Coffee',
      href: '#',
      imageSrc: 'https://www.gestures.in/cdn/shop/products/890614350059-1_1200x1200.jpg?v=1652438506',
      imageAlt: 'Coorg Pure Arabica Coffee',
      price: '$15',
      color: 'Dark Roast',
    },
    {
      id: 5,
      name: 'Coorg Pure Arabica Coffee',
      href: '#',
      imageSrc: 'https://m.media-amazon.com/images/I/61RERFdp0JL._AC_UF1000,1000_QL80_.jpg',
      imageAlt: 'Coorg Pure Arabica Coffee',
      price: '$15',
      color: 'Dark Roast',
    },
    {
      id: 6,
      name: 'Coorg Pure Arabica Coffee',
      href: '#',
      imageSrc: 'https://5.imimg.com/data5/SELLER/Default/2022/8/VE/CW/VD/110161676/filter-coffee-1-768x768.jpg',
      imageAlt: 'Coorg Pure Arabica Coffee',
      price: '$15',
      color: 'Dark Roast',
    },
    {
      id: 7,
      name: 'Coorg Pure Arabica Coffee',
      href: '#',
      imageSrc: 'https://www.bigbasket.com/media/uploads/p/xl/40176781_3-tata-coffee-grand-filter-coffee.jpg',
      imageAlt: 'Coorg Pure Arabica Coffee',
      price: '$15',
      color: 'Dark Roast',
    },
    {
      id: 8,
      name: 'Coorg Pure Arabica Coffee',
      href: '#',
      imageSrc: 'https://www.bigbasket.com/media/uploads/p/xxl/40279022_4-tata-coffee-grand-premium-coffee-powder-100-blend-instant-coffee-rich-in-aroma.jpg',
      imageAlt: 'Coorg Pure Arabica Coffee',
      price: '$15',
      color: 'Dark Roast',
    },
    // More products...
  ];
  
  export default function Prods() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Coffee Products</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
                {/* Add to Cart Button */}
                <div className="mt-4">
                  <button
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => alert(`Added ${product.name} to cart`)}
                  >
                    Purchace product 
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  