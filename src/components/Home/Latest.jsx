import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Container from "../shared/Container"
import SectionTitle from "../shared/SectionTitle"
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Latest = () => {

    const axiosPublic = useAxiosPublic();
    const [latestSurveys, setLatestSurveys] = useState([]);

    useEffect(() => {
        axiosPublic.get('/surveys')
        .then((res) => {
            const sortedSurveys = res.data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
            const latestSurveys = sortedSurveys.slice(0, 3);
            setLatestSurveys(latestSurveys);
        });
    }, []);

  return (
    <div className="my-20">
      <Container>
        <SectionTitle heading="Latest Surveys" subHeading="Explore latest created surveys on trending topics. Your voice matters!"></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
                {latestSurveys.map((survey) => 
                    <div key={survey._id}>
                        <div className="shadow rounded-lg p-7 flex flex-col h-full">
                            <h4 className="uppercase text-xs text-purple-800 font-semibold">{survey.category}</h4>
                            <h1 className="text-lg font-bold mb-1">{survey.title}</h1>
                            <p className="text-sm text-zinc-500 mb-2 flex-grow">{survey.description}</p>
                            <p className="mb-7 text-sm font-medium text-zinc-600">Last Updated:{' '} &nbsp;
                            {new Date(survey.updatedAt)
                                .toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                                })
                                .replace(/(\d+) (\w+) (\d+)/, '$1 $2, $3')}
                            </p>
                            <div className="flex justify-between items-center">
                                <p className="font-medium text-zinc-600">{survey.total_voted} votes</p>
                                <Link to={`/survey-details/${survey._id}`}>
                                    <button className="flex items-center gap-2 font-medium text-purple-800">
                                        View More
                                        <FaArrowRight></FaArrowRight>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
        </div>
      </Container>
    </div>
  )
}

export default Latest
