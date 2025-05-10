"use client";

import CheckoutPage from "@/components/ui/CheckoutPage";
import { montserrat } from "@/components/ui/fonts";
import { Main } from "@/components/ui/main";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";
import { useState } from "react";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error(
    "You need to set the NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY environment variable"
  );
}

function convertToSubcurrency(amount: number, factor = 100) {
  return Math.round(amount * factor);
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Page() {
  const [amount, setAmount] = useState(0);
  const [payment, setPayment] = useState<number | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(event.target.value, 10) || 0);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPayment(amount);
    console.log("Amount submitted:", amount);
  };

  if (payment !== null && payment > 0) {
    return (
      <Main>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center mb-10">
            <h2 className="text-2xl text-center">
              You have selected a donation of{" "}
              <span className="font-bold">${payment}</span>
            </h2>
            <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline" onClick={() => setPayment(0)}>
              Change Donation Amount
            </button>
          </div>

          <Elements
            stripe={stripePromise}
            options={{
              mode: "payment",
              amount: convertToSubcurrency(payment),
              currency: "aud",
            }}
          >
            <CheckoutPage amount={payment} />
          </Elements>
        </div>
      </Main>
    );
  } else {
    return (
      <Main>
        <div className="flex flex-col items-center justify-center">
          <h2
            className={`${montserrat.className} font-bold text-center text-[#1c272c] text-2xl mt-2`}
          >
            YMG need your support for our mission to the Phillipines in 2025!
          </h2>
          <Image
            className="mt-2"
            src="/images/philippinesAnnouncement.png"
            alt="Philippines Announcement"
            width={500}
            height={500}
          />
          <div className="mt-2">
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="mb-2">
                <h2
                  className={`${montserrat.className} text-center font-bold text-[#1c272c] text-2xl`}
                >
                  Enter donation amount:
                </h2>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={handleChange}
                  className="appearance-none shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white text-gray-700"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </form>
            <h2
              className={`${montserrat.className} text-center text-[#1c272c] font-bold text-2xl mb-2`}
            >
              Or select an amount:
            </h2>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => setPayment(5)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Donate $5
              </button>
              <button
                onClick={() => setPayment(10)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Donate $10
              </button>
              <button
                onClick={() => setPayment(20)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Donate $20
              </button>
              <button
                onClick={() => setPayment(50)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Donate $50
              </button>
              <button
                onClick={() => setPayment(100)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Donate $100
              </button>
            </div>
          </div>
        </div>
      </Main>
    );
  }
}
