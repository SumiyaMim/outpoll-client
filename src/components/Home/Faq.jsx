import Container from "../shared/Container"
import SectionTitle from "../shared/SectionTitle"
import Lottie from "lottie-react"
import faq from '../../assets/faq.json'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const Testimonials = () => {
  return (
    <div className="my-20">
        <Container>
            <SectionTitle heading="FAQ" subHeading="Your go-to guide answering common survey platform questions for a smooth user experience."></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 items-center">
                <div>
                    <div className='w-[300px] md:w-[400px] lg:w-[450px] mx-auto'>
                        <Lottie animationData={faq} loop={true} />
                    </div>
                </div>
                <div>
                    <div className="w-full lg:px-4">
                        <div className="mx-auto w-full rounded-2xl lg:p-2">
                            <Disclosure>
                            {({ open }) => (
                                <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-5 py-3 text-left text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                    <span>How do I participate in surveys on your platform?</span>
                                    <ChevronUpIcon
                                    className={`${
                                        open ? 'rotate-180 transform' : ''
                                    } h-5 w-5 text-gray-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pb-2 pt-4 text-xs leading-5 text-gray-500">
                                Sign up or Sign in, explore surveys in your dashboard, pick ones you like, and follow instructions to complete them.
                                </Disclosure.Panel>
                                </>
                            )}
                            </Disclosure>
                            <Disclosure as="div" className="mt-4">
                            {({ open }) => (
                                <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-5 py-3 text-left text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                    <span>How long does it take to complete a survey?</span>
                                    <ChevronUpIcon
                                    className={`${
                                        open ? 'rotate-180 transform' : ''
                                    } h-5 w-5 text-gray-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pb-2 pt-4 text-xs leading-5 text-gray-500">
                                Survey lengths vary depending on the specific study. Some surveys may take a few minutes, while others might require more time.                           
                                </Disclosure.Panel>
                                </>
                            )}
                            </Disclosure>
                            <Disclosure as="div" className="mt-4">
                            {({ open }) => (
                                <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-5 py-3 text-left text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                    <span>Can I participate in surveys from any device?</span>
                                    <ChevronUpIcon
                                    className={`${
                                        open ? 'rotate-180 transform' : ''
                                    } h-5 w-5 text-gray-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pb-2 pt-4 text-xs leading-5 text-gray-500">
                                Yes, our surveys are accessible across various devices—computers, phones, and tablets.                                
                                </Disclosure.Panel>
                                </>
                            )}
                            </Disclosure>
                            <Disclosure as="div" className="mt-4">
                            {({ open }) => (
                                <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-5 py-3 text-left text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                    <span>Is my personal information secure when I take surveys?</span>
                                    <ChevronUpIcon
                                    className={`${
                                        open ? 'rotate-180 transform' : ''
                                    } h-5 w-5 text-gray-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pb-2 pt-4 text-xs leading-5 text-gray-500">
                                Absolutely. Your privacy and security are our top priorities. We ensure that any information shared during surveys is kept confidential and used solely for research purposes.
                                </Disclosure.Panel>
                                </>
                            )}
                            </Disclosure>
                            <Disclosure as="div" className="mt-4">
                            {({ open }) => (
                                <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-5 py-3 text-left text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                    <span>How often are new surveys available?</span>
                                    <ChevronUpIcon
                                    className={`${
                                        open ? 'rotate-180 transform' : ''
                                    } h-5 w-5 text-gray-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pb-2 pt-4 text-xs leading-5 text-gray-500">
                                New surveys become available regularly. Our platform collaborates with various companies and researchers. We recommend checking your dashboard frequently for the latest opportunities.                                
                                </Disclosure.Panel>
                                </>
                            )}
                            </Disclosure>
                            <Disclosure as="div" className="mt-4">
                            {({ open }) => (
                                <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-5 py-3 text-left text-sm font-medium text-black hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                    <span>What happens if I encounter technical issues during a survey?</span>
                                    <ChevronUpIcon
                                    className={`${
                                        open ? 'rotate-180 transform' : ''
                                    } h-5 w-5 text-gray-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pb-2 pt-4 text-xs leading-5 text-gray-500">
                                If you face any technical problems, such as a survey not loading or an unexpected error, contact our support team. They will assist you in resolving the issue promptly.
                                </Disclosure.Panel>
                                </>
                            )}
                            </Disclosure>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Testimonials
