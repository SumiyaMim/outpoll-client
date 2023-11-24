import Container from "../shared/Container"
import SectionTitle from "../shared/SectionTitle"
import quote from '../../assets/quote.png'
import review1 from '../../assets/review1.jpg'
import review2 from '../../assets/review2.jpg'

const Testimonials = () => {
  return (
    <div className="my-20">
        <Container>
            <SectionTitle heading="Testimonials" subHeading="Real experiences, rave reviews. Trustworthy insights for your perfect choice."></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="shadow p-8 lg:p-12 rounded-lg">
                    <img src={quote} alt="" className="mx-auto mb-6"/>
                    <p className="text-xs text-zinc-500 text-justify mb-10 italic leading-5">I have used several survey tools, but this one stands out for its intuitive interface. The analytics provided insightful data, making analysis a joy. Highly recommend for anyone seeking a hassle-free survey experience.</p>
                    <div className="flex items-center gap-3">
                        <img src={review1} alt="" className="rounded-full w-14 border-2 border-purple-800"></img>
                        <div>
                            <h3 className="font-semibold">Siam Ahmed</h3>
                            <p className="text-xs font-medium text-zinc-500">Pro User</p>
                        </div>
                    </div>
                </div>
                <div className="shadow p-8 lg:p-12 rounded-lg">
                    <img src={quote} alt="" className="mx-auto mb-6"/>
                    <p className="text-xs text-zinc-500 text-justify mb-10 leading-5 italic">This survey platform exceeded my expectations! The range of features offered made it adaptable to various survey needs. But what truly sets it apart is their support team—responsive, knowledgeable, and genuinely helpful.</p>
                    <div className="flex items-center gap-3">
                        <img src={review2} alt="" className="rounded-full w-14 border-2 border-purple-800"></img>
                        <div>
                            <h3 className="font-semibold">Maliha Islam</h3>
                            <p className="text-xs font-medium text-zinc-500">Pro User</p>
                        </div>
                    </div>
                </div>
           </div>
        </Container>
    </div>
  )
}

export default Testimonials
