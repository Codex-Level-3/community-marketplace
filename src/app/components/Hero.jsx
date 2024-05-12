import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="w-full">
      <div className="w-full h-[600px] bg-[url('https://images.unsplash.com/photo-1571204829887-3b8d69e4094d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center ">
        <div className="backdrop-blur-sm p-5 bg-black/30">
          <h1 className="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-2xl font-bold">
            Welcome to Community Marketplace!
          </h1>
          <p className="xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-center font-semibold text-white mt-4">
            Join our vibrant community today and start buying, selling, and
            connecting with local enthusiasts like yourself!
          </p>
          <div className="w-40 m-3 mx-auto bg-amber-500 hover:bg-amber-600 p-2 rounded text-blue-900 hover:text-blue-600 font-bold text-xl text-center">
            <Link href="/signup">Join Now!</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
