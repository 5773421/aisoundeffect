'use client';
import config from "@/config";
import {useState, useEffect} from 'react';
import ButtonCheckout from "./ButtonCheckout";
import Link from "next/link";

// <Pricing/> displays the pricing plans for your app
// It's your Stripe config in config.js.stripe.plans[] that will be used to display the plans
// <ButtonCheckout /> renders a button that will redirect the user to Stripe checkout called the /api/stripe/create-checkout API endpoint with the correct priceId

const IframeCom = ({isShow}: any) => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  })
  return (
      <section className="flex flex-col items-center w-full" id="start">
        {!loading && isShow && <div className="border-l-4 border-yellow-400 mb-10 mt-10 bg-yellow-50 p-4 w-3/5">
          <div className="flex">
            <div className="flex-shrink-0">
            </div>
            <div className="ml-3">
              <p className="text-xl text-yellow-700">
                {/* If you want higher quality sound effects, faster generation speed, and longer generation duration (up to 45 seconds), please consider {' '} */}
                If you want higher quality sound effects and faster generation speed, please consider {' '}
                <Link href="/pricing" className="font-medium text-yellow-700 underline hover:text-yellow-600">
                  buy credits
                </Link>.
                And use {' '}
                <Link href="/create" className="font-medium text-yellow-700 underline hover:text-yellow-600">
                  Create
                </Link>.
              </p>
            </div>
          </div>
        </div>}
        {isShow && loading && <div className='mt-20 text-4xl font-medium'>Loading... please wait. If there is an issue with loading, please try refreshing the page.</div>}
        {/* <iframe
          src="https://eagle0504-stable-audio-demo.hf.space"
          width="100%"
          frameBorder="0"
          height="900"
        ></iframe> */}
        <iframe
          src="https://fffiloni-audiogen.hf.space"
          frameBorder="0"
          width="100%"
          height="450"
        ></iframe>
      </section>
  );
};

export default IframeCom;
