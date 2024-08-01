import Link from "next/link";
import {Button} from '@radix-ui/themes';

// <Pricing/> displays the pricing plans for your app
// It's your Stripe config in config.js.stripe.plans[] that will be used to display the plans
// <ButtonCheckout /> renders a button that will redirect the user to Stripe checkout called the /api/stripe/create-checkout API endpoint with the correct priceId

const Tips = () => {
  return (
      <div className="flex flex-col items-center w-full" id="start">
        <h1 className='text-2xl font-medium leading-tight tracking-tight sm:text-4xl mt-10 mb-10'>AI Sound Effect Free Playground</h1>
        <Link href="/pricing">
          <Button size='4' className='mt-10'>
            Upgrade to Premium {'->'}
          </Button>
        </Link>
        {<div className="mb-10 mt-8 p-4 max-w-6xl">
          <div className="flex">
            <div className="text-lg leading-relaxed md:text-xl">
              <p className='text-lg leading-relaxed md:text-xl'>
                AI Sound Effect Free Playground might be slow or not work sometimes due to high demand. If nothing happens after waiting, consider upgrading to Premium for faster, longer generation duration and more reliable service.
              </p>
            </div>
          </div>
        </div>}
      </div>
  );
};

export default Tips;
