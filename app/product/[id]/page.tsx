import Proit from "@/app/api/pro"
export default async function Page({ params }: { params: { id: string } }){
    let {id}=await params
  const product = await Proit(id)
  console.log(product);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">

        <div>
          <img
            src={product.data.imageCover}
            className="rounded-xl"
            alt={product.data.title}
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">
            {product.data.title}
          </h1>

          <p className="text-gray-500 mt-2">
            {product.data.category?.name} • {product.data.brand?.name}
          </p>

          <p className="text-yellow-500 mt-2">
            ⭐ {product.data.ratingsAverage}
          </p>

          <p className="text-2xl font-bold mt-4">
            {product.data.price} EGP
          </p>

          <p className="mt-4 text-gray-600">
            {product.data.description}
          </p>

          <div className="flex gap-3 mt-6">
            <button className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800">
              Add to Cart
            </button>

            <button className="border px-6 py-2 rounded-xl hover:bg-gray-100">
              ❤️ Favorite
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}