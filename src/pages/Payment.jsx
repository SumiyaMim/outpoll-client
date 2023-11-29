import { Helmet } from "react-helmet-async"
import SectionTitle from "../components/shared/SectionTitle"
import Container from "../components/shared/Container"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

//add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  return (
    <div className="pt-36 pb-20">
        <Helmet>
           <title>OutPoll | Payment</title>
        </Helmet>    
        <Container>
        <SectionTitle heading="Payment" subHeading="Payment for get exclusive survey features and enhanced analytics. Elevate your survey experience today!"></SectionTitle>
        <div className="md:px-20 lg:px-80">
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
        </Container>
    </div>
  )
}

export default Payment
