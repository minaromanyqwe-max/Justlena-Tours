import Link from "next/link"
import Productapi from "../api/product"

export default async function Product() {
  const products = await Productapi()

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Products</h1>
<Link href={`/product/${products._id}`}>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item: any) => (
          <div
            key={item._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
          >
            {/* Image */}
            <img
              src={item.imageCover}
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold line-clamp-2">
                {item.title}
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                {item.category?.name} • {item.brand?.name}
              </p>

              <p className="text-yellow-500 text-sm mt-1">
                ⭐ {item.ratingsAverage}
              </p>

              <p className="font-bold text-lg mt-2">
                {item.price} EGP
              </p>

              {/* زرار */}
              <button className="mt-auto bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      </Link>

    </div>
  )
}