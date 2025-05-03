import Image from "next/image";
import React from "react";

function AcceptForm({params}) {
  const { adminId, posterId , verifyId} = params;
  console.log(adminId,posterId, verifyId)
console.log('data');

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="shadow-md rounded-md flex flex-col justify-center items-center  max-w-[500px] w-full gap-4 py-14 px-5">
        <Image
          src="/side hustle.webp"
          alt="img"
          width={100}
          height={100}
          className="rounded-full w-20 h-20 object-cover"
        />
        {/* <div className="flex flex-col items-center">
          <p className="font-semibold">{sitename.name}</p>
          <p>Payment from {sitename.tag}</p>
        </div>
        <p className="font-medium text-4xl">$ {sitename.amount}</p>
        <div className="flex flex-col items-center">
          <p className="text-gray-500">For Apt</p>
          <p className="text-gray-500">{info.date}</p>
        </div> */}
        <div className="flex flex-col gap-4 w-full items-center">
          <button className="bg-green-700 text-white rounded-full w-4/5 py-2 hover:bg-green-600 text-2xl">
            Accept
          </button>
          <button className="bg-yellow-700 text-white rounded-full w-4/5 py-2 hover:bg-yellow-600 text-2xl">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

export default AcceptForm;
