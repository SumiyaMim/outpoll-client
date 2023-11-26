import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SurveyCard = ({ survey }) => {

    const { title, description, category, total_voted } = survey

  return (
    <div className="shadow rounded-lg p-7 flex flex-col h-full">
      <h4 className="uppercase text-xs text-purple-800 font-semibold">{category}</h4>
      <h1 className="text-lg font-bold mb-1">{title}</h1>
      <p className="text-sm text-zinc-500 mb-5 flex-grow">{description}</p>
      <div className="flex justify-between items-center">
        <p className="font-medium text-zinc-600">{total_voted} votes</p>
        <Link to={`/survey-details/${survey._id}`}>
            <button className="flex items-center gap-2 font-medium text-purple-800">
                View More
                <FaArrowRight></FaArrowRight>
            </button>
        </Link>
      </div>
    </div>
  )
}

export default SurveyCard
