import Container from "../components/shared/Container"
import SectionTitle from "../components/shared/SectionTitle"
import { Helmet } from "react-helmet-async";
import { MdOutlinedFlag } from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi";
import { GiMoneyStack } from "react-icons/gi";
import { FaQuestion } from "react-icons/fa"

const Help = () => {
  return (
    <div className="pt-36">
        <Helmet>
           <title>OutPoll | Help Center</title>
        </Helmet>    
      <Container>
        <SectionTitle heading="Help Center" subHeading="Choose a category to quickly find the help you need"></SectionTitle>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto mb-20 gap-10'>
            <div className='p-14 shadow rounded-lg border-t-2 border-purple-800'>
                <i><MdOutlinedFlag className='mx-auto text-primary text-4xl mb-3 text-zinc-400'></MdOutlinedFlag></i>
                <p className="font-semibold text-sm text-gray-700 text-center">Getting Started</p>
            </div>
            <div className='p-14 shadow rounded-lg border-t-2 border-purple-800'>
                <i><GiMoneyStack className='mx-auto text-primary text-4xl mb-3 text-zinc-400'></GiMoneyStack></i>
                <p className="font-semibold text-sm text-gray-700 text-center">Pricing and Plans</p>
            </div>
            <div className='p-14 shadow rounded-lg border-t-2 border-purple-800'>
                <i><FaQuestion className='mx-auto text-primary text-4xl mb-3 text-zinc-400'></FaQuestion></i>
                <p className="font-semibold text-sm text-gray-700 text-center">FAQ</p>
            </div>
            <div className='p-14 shadow rounded-lg border-t-2 border-purple-800'>
                <i><HiOutlineBookOpen className='mx-auto text-primary text-4xl mb-3 text-zinc-400'></HiOutlineBookOpen></i>
                <p className="font-semibold text-sm text-gray-700 text-center">Usage Guide</p>
            </div>
      </div>
      </Container>
    </div>
  )
}

export default Help
