import { Helmet } from "react-helmet-async"
import Container from "../components/shared/Container"
import SectionTitle from "../components/shared/SectionTitle"
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import SurveyCard from "../components/survey/SurveyCard";

const Surveys = () => {

    const axiosPublic = useAxiosPublic();
    const [surveys, setSurveys] = useState([]);

    useEffect(() => {
        axiosPublic.get('/surveys')
        .then((res) => {
            setSurveys(res.data);
        });
    }, []);

  return (
    <div className="pt-36">
        <Helmet>
           <title>OutPoll | Surveys</title>
        </Helmet>    
      <Container>
        <SectionTitle heading="Surveys" subHeading="Empowering Voices, Driving Change. Engage in surveys that matter. Share your insights, influence decisions, and be part of the collective voice shaping tomorrow's landscape."></SectionTitle>

        <div className="flex flex-col md:flex-row gap-5 items-center justify-between p-6 shadow border-[1px] rounded-lg mb-10">
            <h4 className="text-lg md:text-sm lg:text-lg font-medium">Filter by</h4>
            <div>
                <label className="mb-1 text-sm font-medium text-gray-900 ">Title</label>
                <select className="bg-zinc-50 border border-zinc-300 focus:outline-none text-zinc-900 text-sm rounded-md block w-72 md:w-64 lg:w-72 p-2">
                    <option disabled selected value="">Choose one</option>
                    {surveys.map((survey) => (
                        <option key={survey._id} value={survey.title}>
                            {survey.title}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label className="mb-1 text-sm font-medium text-gray-900">Category</label>
                <select className="bg-zinc-50 border border-zinc-300 focus:outline-none text-zinc-900 text-sm rounded-md block w-72 md:w-36 lg:w-72 p-2">
                    <option disabled selected value="">Choose one</option>
                    {surveys.map((survey) => (
                        <option key={survey._id} value={survey.category}>
                            {survey.category}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label className="mb-1 text-sm font-medium text-gray-900 ">Price</label>
                <select className="bg-zinc-50 border border-zinc-300 focus:outline-none text-zinc-900 text-sm rounded-md block w-72 md:w-36 lg:w-72 p-2">
                    <option disabled selected>Choose one</option>
                    <option value='asc'>From low to high</option>
                    <option value='desc'>From high to low</option>
                </select>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            {surveys.map((survey) => <SurveyCard key={survey._id} survey={survey}></SurveyCard>)}
        </div>
      </Container>
    </div>
  )
}

export default Surveys
