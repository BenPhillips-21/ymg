'use client'

import CheckoutPage from "@/components/ui/CheckoutPage";
import { Main } from "@/components/ui/main";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js"; 

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error("You need to set the NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY environment variable");
}

function convertToSubcurrency(amount: number, factor = 100) {
    return Math.round(amount * factor);
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Page() {
    const payment = 20.00;

  return (
    <Main>
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Young Men Of God</h1>
        <h2 className="text-2xl">has requested a donation of <span className="font-bold">${payment}</span> to support our mission.</h2>
      </div>

    <Elements stripe={stripePromise}
    options={{
        mode: 'payment',
        amount: convertToSubcurrency(payment),
        currency: 'aud',
    }}>
    <CheckoutPage amount={payment} />
    </Elements>
    </Main>
  );
}