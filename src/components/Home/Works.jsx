import Container from "../shared/Container"
import SectionTitle from "../shared/SectionTitle"

const Works = () => {
  return (
    <div className="my-20 max-w-7xl mx-auto bg-purple-100 py-20 relative z-0">
        <Container>
            <SectionTitle heading="How It Works" subHeading="Empower decisions through interactive surveys, engaging audiences, and deriving insights on our secure platform."></SectionTitle>
            <div className="bg-white p-6 md:p-8 lg:p-10 rounded-md">
                <div
                    className="relative after:absolute after:inset-x-0 after:top-[20px] md:after:top-1/2 after:block after:h-[1px] md:after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-200 after:w-[220px] after:mx-auto md:after:w-full"
                >
                    <ol
                    className="relative z-10 flex justify-between text-center items-center text-[10px] lg:text-sm font-medium text-gray-600"
                    >
                    <li className="flex flex-col md:flex-row items-center gap-2 md:bg-white p-2">
                        <span
                        className="lg:h-7 lg:w-7 h-6 w-6 rounded-full bg-gray-200 text-center text-[10px]/6 lg:text-[12px]/7 font-bold"
                        >
                        1
                        </span>

                        <span> Create your account </span>
                    </li>

                    <li className="flex flex-col md:flex-row items-center gap-2 md:bg-white p-2">
                        <span
                        className="lg:h-7 lg:w-7 h-6 w-6 rounded-full bg-gray-200 text-center text-[10px]/6 lg:text-[12px]/7 font-bold"
                        >
                        2
                        </span>

                        <span> Participate in surveys </span>
                    </li>

                    <li className="flex flex-col md:flex-row items-center gap-2 md:bg-white p-2">
                        <span
                        className="lg:h-7 lg:w-7 h-6 w-6 rounded-full bg-gray-200 text-center text-[10px]/6 lg:text-[12px]/7 font-bold"
                        >
                        3
                        </span>

                        <span> Upgrade to pro </span>
                    </li>

                    <li className="flex flex-col md:flex-row items-center gap-2 md:bg-white p-2">
                        <span
                        className="lg:h-7 lg:w-7 h-6 w-6 rounded-full bg-gray-200 text-center text-[10px]/6 lg:text-[12px]/7 font-bold"
                        >
                        4
                        </span>
                        <span> Display survey results </span>
                    </li>
                    </ol>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Works
