import config from "@/config";
import ButtonCheckout from "./ButtonCheckout";

// <Pricing/> displays the pricing plans for your app
// It's your Stripe config in config.js.stripe.plans[] that will be used to display the plans
// <ButtonCheckout /> renders a button that will redirect the user to Stripe checkout called the /api/stripe/create-checkout API endpoint with the correct priceId

const IframeCom = () => {
  return (
    <section className="" id="start">
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
