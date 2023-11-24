import Container from "../components/shared/Container"
import SectionTitle from "../components/shared/SectionTitle"
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { GrMap } from "react-icons/gr";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="pt-36">
        <Helmet>
           <title>OutPoll | Contact</title>
        </Helmet>    
      <Container>
        <SectionTitle heading="Contact Us" subHeading="Connect with us for support or to share your thoughts; your input helps us enhance your experience with us!"></SectionTitle>

        <div className='grid grid-cols-1 md:grid-cols-3 mx-auto mb-20'>
            <div className='p-16 border-b-2 md:border-b-0 md:border-r-2 border-purple-200'>
                <i><MdOutlineMarkEmailUnread className='mx-auto text-primary text-4xl mb-5 text-purple-800'></MdOutlineMarkEmailUnread></i>
                <p className="font-medium  text-sm text-gray-500 text-center">info@outpoll.com</p>
            </div>
            <div className='p-16 border-b-2 md:border-b-0 md:border-r-2 border-purple-200'>
                <i><LuPhoneCall className='mx-auto text-primary text-4xl mb-5 text-purple-800'></LuPhoneCall></i>
                <p className="font-medium  text-sm text-gray-500 text-center">+019 1234 5678</p>
            </div>
            <div className='p-16'>
                <i><GrMap className='mx-auto text-primary text-4xl mb-5 text-purple-800'></GrMap></i>
                <p className="font-medium text-sm text-gray-500 text-center">Dhaka, Bangladesh</p>
            </div>
      </div>
      </Container>
    </div>
  )
}

export default Contact
