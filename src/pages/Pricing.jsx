import { Helmet } from "react-helmet-async"
import Container from "../components/shared/Container"
import SectionTitle from "../components/shared/SectionTitle"
import { GoCheckCircleFill } from "react-icons/go";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="pt-36 pb-20">
       <Helmet>
           <title>OutPoll | Pricing</title>
        </Helmet>    
      <Container>
        <SectionTitle heading="Pricing" subHeading="Upgrade to Pro for exclusive survey features and enhanced analytics. Elevate your survey experience today!"></SectionTitle>
        <div className="md:mx-40 lg:mx-96 px-7 py-20 flex flex-col items-center justify-center rounded-lg shadow border">
            <h2 className="text-xl font-bold mb-5">Premium</h2>
            <div className="flex">
                <p className="text-sm font-medium">$</p>
                <p><span className="text-4xl font-semibold">99</span><sub className="text-xs font-medium">/month</sub></p>
            </div>
            <div className="mt-5 flex flex-col items-start mb-10">
                <div className="flex gap-3 mb-2">
                    <GoCheckCircleFill className="text-purple-800 mt-0.5"></GoCheckCircleFill>
                    <p className="text-sm text-zinc-500">Participate in surveys</p>
                </div>
                <div className="flex item-center gap-3 justify-center mb-2">
                    <GoCheckCircleFill className="text-purple-800 mt-0.5"></GoCheckCircleFill>
                    <p className="text-sm text-zinc-500">Comment on surveys</p>
                </div>
                <div className="flex item-center gap-3 justify-center">
                    <GoCheckCircleFill className="text-purple-800 mt-0.5"></GoCheckCircleFill>
                    <p className="text-sm text-zinc-500">Visualizing analytics</p>
                </div>
            </div>
            <Link to="/payment">
              <button className="bg-purple-800 text-white px-5 py-2.5 text-xs uppercase rounded-md font-medium">
                  Upgrade to Pro
              </button>
            </Link> 
        </div>
      </Container>
    </div>
  )
}

export default Pricing
