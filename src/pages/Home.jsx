import { Helmet } from "react-helmet-async"
import Banner from "../components/Home/Banner"
import Testimonials from "../components/Home/Testimonials"
import Faq from "../components/Home/Faq"

const Home = () => {
  return (
    <div>
        <Helmet>
           <title>OutPoll | Home</title>
        </Helmet>    
        <Banner/>
        <Testimonials/>
        <Faq/>
    </div>
  )
}

export default Home
