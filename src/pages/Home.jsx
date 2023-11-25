import { Helmet } from "react-helmet-async"
import Banner from "../components/home/Banner"
import Testimonials from "../components/home/Testimonials"
import Faq from "../components/home/Faq"
import Works from "../components/home/Works"

const Home = () => {
  return (
    <div>
        <Helmet>
           <title>OutPoll | Home</title>
        </Helmet>    
        <Banner/>
        <Works/>
        <Testimonials/>
        <Faq/>
    </div>
  )
}

export default Home
