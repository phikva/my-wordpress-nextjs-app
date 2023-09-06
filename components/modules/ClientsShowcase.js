// components/modules/ClientsShowcase.js
import React from "react";
import Image from "next/image";

function ClientsShowcase({ data }) {
  const clients = data.page.homepage.clients; // Extract clients data

  if (!clients || !clients.images) {
    // Handle the case where clients or clients.images is undefined
    return null; // You can return a placeholder or an empty component
  }

  const { images } = clients;

  // Filter out empty image objects
  const validImages = Object.values(images).filter(
    (image) => image.sourceUrl && image.altText
  );

  return (
    <section className="px-4 bg-gray-dark py-10 md:py-20 lg:py-20">
      <div className="container mx-auto">
        <aside className="pb-10 flex justify-center ">
          <div
            className="border rounded-full p-2"
            style={{
              backgroundColor: "#ffffff",
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\")",
            }}
          >
            <p className=" text-xs">Reusable Client module</p>
          </div>
        </aside>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-5 lg:grid-cols-5 lg:gap-10">
          {validImages.map((image, index) => (
            <div key={index} className="text-center">
              <Image
                src={image.sourceUrl}
                alt={image.altText}
                className="mx-auto opacity-60  object-contain"
                height={250}
                width={250}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientsShowcase;
