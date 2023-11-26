import { Helmet } from "react-helmet-async"
import Banner from "../components/home/Banner"
import Testimonials from "../components/home/Testimonials"
import Faq from "../components/home/Faq"
import Works from "../components/home/Works"
import Featured from "../components/home/Featured"
import Latest from "../components/home/Latest"

const Home = () => {
  return (
    <div>
        <Helmet>
           <title>OutPoll | Home</title>
        </Helmet>    
        <Banner/>
        <Featured/>
        <Latest/>
        <Works/>
        <Testimonials/>
        <Faq/>
    </div>
  )
}

export default Home
