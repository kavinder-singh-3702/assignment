import React from "react";
<<<<<<< HEAD
import tax from "../../public/images/tax.jpg";
import profit from "../../public/images/profit.jpg";
import arrow from "../../public/images/arrow.png";
export default function about_bitcoin() {
  return (
    <div className="h-auto rounded-md w-[60%] ml-14 bg-white py-4 px-6 mt-10 mb-6">
      <h2 className="font-semibold text-3xl mb-4">About Bitcoin</h2>
      <h3 className="font-semibold text-l mb-2">What is Bitcoin?</h3>
      <p>
        Bitcoin's price today is US$16,951.82, with a 24-hour trading volume of
        $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70%
        from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day
        all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC
        and a max supply of 21 M BTC.
      </p>
      <hr className="w-full h-[2px] bg-gray-300 my-4" />

      <div className="w-auto">
        <h3 className="font-semibold text-l mb-2">
          Lorem ipsum dolor sit amet.
        </h3>
        <div className="space-y-3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            ipsum, nesciunt inventore commodi ex natus ullam distinctio illum
            asperiores optio similique autem itaque culpa, obcaecati
            voluptatibus veniam error quibusdam id exercitationem! Aliquam
            mollitia praesentium expedita possimus, rerum quidem earum libero,
            fugit deserunt esse quisquam accusamus natus maiores iure
            perspiciatis facere ratione debitis et itaque quod commodi quam
            omnis adipisci? Accusantium ipsam id aperiam facilis? Dignissimos at
            fugiat placeat nobis consectetur eum?
          </p>
          <p>
            {" "}
            Nihil at ex, ad iste unde doloremque odio, quas tenetur illo
            accusamus quia porro saepe dignissimos? Debitis, rerum quos saepe
            beatae laborum quibusdam mollitia repellat totam voluptate aliquid
            dolorem. Totam esse non reprehenderit necessitatibus fugiat. Alias
            reiciendis sit sapiente? Eligendi corrupti eveniet reiciendis
            officiis cupiditate repudiandae provident minima ducimus, cum neque
            vero eum, magni mollitia nihil consequatur rerum assumenda culpa!
          </p>
          <p>
            Magnam nobis nesciunt totam consequuntur sapiente libero praesentium
            et animi fugit ut dicta delectus soluta eos omnis rerum modi dolore
            minus sed, dignissimos dolor odio molestiae quos accusamus
            reprehenderit? Asperiores nostrum debitis officiis quos temporibus
            provident quidem tenetur assumenda ut excepturi earum esse placeat
            adipisci architecto, ab beatae dolorum dicta odit! Eligendi repellat
            quas temporibus quisquam cum, pariatur similique accusamus vel!
            Veniam deleniti laudantium aliquid molestias aperiam assumenda
            fugit.
          </p>
        </div>
        <hr className="w-full h-[2px] bg-gray-300 my-4" />
        <div className="flex flex-col justify-center mb-4">
          <h2 className="font-semibold text-xl mb-4">
            Already Holding Bitcoin?
          </h2>
          <div className="flex gap-10">
            <div className="bg-blue-400 flex-1 justify-around gap-6 items-center rounded-md flex p-4">
              <img
                src={profit}
                alt=""
                className="h-[15vh] w-[15vh]  rounded-md"
              />
              <div className="flex flex-col h-full mr-20 gap-4">
                <p className="text-xl text-white font-semibold">
                  Calculate Your Profits
                </p>
                <button className="bg-white rounded-md items-center justify-center p-1 flex gap-2 ">
                  <p>Check Now</p>
                  <img src={arrow} alt="" className="h-[2vh] " />
                </button>
              </div>
            </div>
            <div className="bg-red-400 flex-1 flex justify-around gap-6 items-center rounded-md p-4">
              <img src={tax} alt="" className="h-[15vh] w-[15vh] rounded-md" />
              <div className="flex flex-col h-full mr-20 gap-4">
                <p className="text-xl  text-white font-semibold ">
                  Calculate Your tax liability
                </p>
                <button className="bg-white rounded-md items-center justify-center p-1 flex gap-2 ">
                  <p>Check Now</p>
                  <img src={arrow} alt="" className="h-[2vh] " />
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="w-full h-[2px] bg-gray-300 my-4" />
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          debitis nostrum, ea eius nihil sunt aliquid? Ad libero veniam ratione
          repellendus. Harum itaque tempore praesentium perspiciatis, blanditiis
          dicta aspernatur quibusdam eum consectetur nisi aliquam porro?
        </p>
      </div>
    </div>
  );
=======

export default function about_bitcoin() {
  return <div></div>;
>>>>>>> 2c9231e (initial commit)
}
