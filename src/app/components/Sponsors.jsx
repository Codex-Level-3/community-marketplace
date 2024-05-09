import Image from "next/image";
import { sponsors } from "./sponsorList";

export default function Sponsors() {
  return (
    <section>
      <h2 className="text-3xl text-blue-500 font-semibold mt-5 mx-3">
        Meet Our Sponsors!
      </h2>
      <div className="flex flex-wrap justify-center gap-4 p-3">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="bg-white shadow-[0_8px_12px_-6px_rgba(0,0,0,0.2)] border p-2 w-full max-w-52 rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4"
          >
            <Image
              width={150}
              height={150}
              src={`/${sponsor.src}.png`}
              alt={sponsor.name + " Logo"}
              className="w-full rounded-lg shadow-lg"
            />
            <div className="px-4 my-6 text-center">
              <h3 className="text-lg font-semibold">{sponsor.name}</h3>
              <p className="mt-2 text-sm text-gray-400">
                {sponsor.description}
              </p>
              <p className="mt-2 text-sm text-gray-600">{sponsor.contact}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
