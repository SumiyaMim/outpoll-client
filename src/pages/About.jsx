import Container from "../components/shared/Container"
import SectionTitle from "../components/shared/SectionTitle"
import about from "../assets/about.png"
import { Helmet } from "react-helmet-async"

const About = () => {
  return (
    <div className="pt-36">
       <Helmet>
           <title>OutPoll | About</title>
        </Helmet>    
      <Container>
        <SectionTitle heading="About Us" subHeading="Empowering insights through user-centric surveys, technology-driven innovation, trusted expertise, and impactful community contributions for informed decisions."></SectionTitle>
        <div className="mb-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            <div className="md:w-3/4 lg:flex-1">
                <h2 className=" text-2xl md:text-4xl lg:text-5xl font-bold mb-7">Empower change by <span className="text-purple-800">sharing your insights</span> in our impactful surveys</h2>
                <p className="text-xs lg:text-sm leading-6 text-gray-500 mb-7">OutPoll is your platform to voice opinions that truly count. Your perspectives wield influence over products, services, and pivotal decisions. Join our community and become a driving force in shaping a future that aligns with your unique viewpoint. Your participation empowers transformative change!</p>
                <button className='bg-purple-800 px-6 py-2 border-2 border-purple-800 text-white hover:text-purple-800 hover:bg-white rounded-md text-sm font-medium'>
                  Learn More
                </button>
            </div>
            <div className="">
                <img src={about} alt="" className="w-full"/>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default About
