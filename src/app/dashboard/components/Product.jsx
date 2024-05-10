import Image from "next/image";
import { products } from "./productList";

export default function Product() {
  return (
    <section>
      <h2 className="text-3xl text-blue-500 font-semibold mb-2 mx-3">
        Latest Listings :
      </h2>
      <p className="text-2xl text-indigo-900 mx-3">
        Stay in the loop with the latest listings and updates!
      </p>
      <div className="flex flex-wrap gap-3 m-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] h-[500px] w-full max-w-sm rounded-2xl font-[sans-serif] overflow-hidden mx-auto mt-4"
          >
            <Image
              width={150}
              height={150}
              src={`/products/${product.src}.jpg`}
              alt={product.name}
              className="w-full rounded-2xl h-[300px] w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-center text-3xl text-[#333] font-extrabold pb-3">
                {product.name}
              </h3>
              <div className="flex justify-center items-center p-2 mt-3">
                <p className="text-xl text-[#333] font-bold flex-1">
                  {product.price}
                </p>
                <div className="bg-gray-50 w-14 h-14 flex items-center justify-center rounded-full cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    className="fill-[#333]"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
