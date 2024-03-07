import React from "react";
import pie_chart from "../../public/images/tokenomics_pie_chart.png";

export default function tokenomics() {
  return (
    <div className="h-auto rounded-md w-[90%] lg:w-[60%] mx-2 ml-4 lg:ml-14 bg-white py-6 px-2 mt-6 pb-12">
      <h2 className="font-semibold text-3xl mb-4">Tokenomics</h2>
      <h3 className="font-semibold text-xl mb-2 ">Initial Distribution</h3>
      <img src={pie_chart} alt="" className="lg:h-[32vh] h-[25vh] my-4" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        ipsum, nesciunt inventore commodi ex natus ullam distinctio illum
        asperiores optio similique autem itaque culpa, obcaecati voluptatibus
        veniam error quibusdam id exercitationem! Aliquam mollitia praesentium
        expedita possimus, rerum quidem earum libero, fugit deserunt esse
        quisquam accusamus natus maiores iure perspiciatis facere ratione
        debitis et itaque quod commodi quam omnis adipisci? Accusantium ipsam id
        aperiam facilis? Dignissimos at fugiat placeat nobis consectetur eum?
      </p>
    </div>
  );
}
