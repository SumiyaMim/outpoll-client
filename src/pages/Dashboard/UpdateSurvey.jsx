import { Helmet } from "react-helmet-async"
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { useLoaderData, useNavigate } from "react-router-dom";

const AddSurvey = () => {

    const survey = useLoaderData();
    const  { _id, title, category, description, deadline, options, like, dislike, report } = survey;
    // console.log(survey)

    const axiosPublic = useAxiosPublic();
    const { user } = useAuth()
    const navigate = useNavigate();

    // send surveys data to server
    const handleUpdateSurvey = e => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
        const deadline = form.deadline.value;
        const like = parseInt(form.like.value);
        const dislike = parseInt(form.dislike.value);
        const report = parseInt(form.report.value);
        const options = [];
        if (form.optionYes.checked) {
            options.push('Yes');
        }
        if (form.optionNo.checked) {
            options.push('No');
        }

        const timestamp = new Date().toISOString();

        // calculate votes and vote
        const optionCounts = {
            Yes: 0,
            No: 0,
        };

        const { Yes: yesCount, No: noCount } = optionCounts;

        const votes = [yesCount, noCount];
        // const vote = yesCount + noCount;

        const updatedSurvey = { title, description, category, deadline, options, like, dislike, report, timestamp, votes, status: 'publish', surveyor: user.email }
        // console.log(updatedSurvey)

        // update jobs
        axiosPublic.put(`/surveys/${_id}`, updatedSurvey)
        .then(res => {
            console.log(res.data);
            const modifiedCount = res.data.modifiedCount;
            if(modifiedCount > 0){
            navigate(-1);
            }
        })
    }
  return (
    <div className="py-14 px-6 lg:px-40">
       <Helmet>
           <title>Dashboard | Add Survey</title>
        </Helmet>    
        <div className="mb-10">
            <h3 className="text-2xl font-semibold w-fit mx-auto text-center mb-1.5">Update Survey</h3>
            <hr className="border-[1.5px] w-12 border-purple-700 mx-auto mb-5"/>
        </div>
        <div>
            <form onSubmit={handleUpdateSurvey}>
                <div className="bg-gray-100 p-8 md:p-12 rounded-lg">
                    <div className='mb-5'>
                        <label className="font-medium">Title</label>
                        <div className='flex items-center rounded-md mt-1 border-[1.5px] border-gray-300'>
                            <input
                            type='text'
                            name='title'
                            defaultValue={title}
                            placeholder='Enter title'
                            className='input flex-grow focus:outline-none rounded-md placeholder:text-zinc-700 placeholder:text-sm text-sm pl-4 p-2.5'
                            required
                            />
                        </div>
                    </div>
                    <div className='mb-5'>
                        <label className="font-medium">Description</label>
                        <div className='flex items-center rounded-md mt-1 border-[1.5px] border-gray-300'>
                            <input
                            type='text'
                            name='description'
                            defaultValue={description}
                            placeholder='Enter description'
                            className='input flex-grow focus:outline-none rounded-md placeholder:text-zinc-700 placeholder:text-sm text-sm pl-4 p-2.5'
                            required
                            />
                        </div>
                    </div>
                    <div className='mb-5'>
                        <label className="font-medium">Category</label>
                        <div className='flex items-center rounded-md mt-1 border-[1.5px] border-gray-300'>
                        <select 
                            name="category"
                            defaultValue={category}
                            className='input flex-grow focus:outline-none rounded-md placeholder:text-zinc-500 placeholder:text-sm text-sm p-3'
                            >
                            <option disabled selected value="Select Category">Select Category</option>
                            <option value="Customer Satisfaction">Customer Satisfaction</option>
                            <option value="Education">Education</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Environment">Environment</option>
                            <option value="Food">Food</option>
                            <option value="Lifestyle">Lifestyle</option>
                            <option value="Technology">Technology</option>
                            <option value="Travel">Travel</option>
                        </select>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <label className="font-medium">Deadline</label>
                        <div className='flex items-center rounded-md mt-1 border-[1.5px] border-gray-300'>
                            <input
                            type='date'
                            name='deadline'
                            defaultValue={deadline}
                            placeholder='Enter deadline'
                            className='input flex-grow focus:outline-none rounded-md placeholder:text-zinc-700 placeholder:text-sm text-sm pl-4 p-2.5'
                            required
                            />
                        </div>
                    </div>
                    <div className='mb-5'>
                        <label className="font-medium">Options</label>
                        <div className="p-2.5 rounded-lg border-[1.5px] bg-white border-gray-300 flex items-center gap-5 mt-1">
                            <label  className="inline-flex items-center">
                                <input
                                type="checkbox"
                                className="h-4 w-4"
                                name="optionYes"
                                defaultChecked={options.includes('Yes')} 
                                />
                                <span className="ml-3 text-sm font-medium">Yes</span>
                            </label>
                            <label  className="inline-flex items-center">
                                <input
                                type="checkbox"
                                className="h-4 w-4"
                                name="optionNo"
                                defaultChecked={options.includes('No')}
                                />
                                <span className="ml-3 text-sm font-medium">No</span>
                            </label>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <label className="font-medium">Like</label>
                        <div className="p-2.5 rounded-lg border-[1.5px] bg-white border-gray-300 flex items-center gap-5 mt-1">
                            <label  className="inline-flex items-center">
                                <input
                                type="radio"
                                className="h-4 w-4"
                                name="like"
                                defaultChecked={like === 0}                                 
                                value="0"
                                />
                                <span className="ml-3 text-sm font-medium">0</span>
                            </label>
                            <label  className="inline-flex items-center">
                                <input
                                type="radio"
                                className="h-4 w-4"
                                name="like"
                                defaultChecked={like === 1}
                                value="1"
                                />
                                <span className="ml-3 text-sm font-medium">1</span>
                            </label>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <label className="font-medium">Dislike</label>
                        <div className="p-2.5 rounded-lg border-[1.5px] bg-white border-gray-300 flex items-center gap-5 mt-1">
                            <label  className="inline-flex items-center">
                                <input
                                type="radio"
                                className="h-4 w-4"
                                name="dislike"
                                defaultChecked={dislike === 0}
                                value="0"
                                />
                                <span className="ml-3 text-sm font-medium">0</span>
                            </label>
                            <label  className="inline-flex items-center">
                                <input
                                type="radio"
                                className="h-4 w-4"
                                name="dislike"
                                defaultChecked={dislike === 1}
                                value="1"
                                />
                                <span className="ml-3 text-sm font-medium">1</span>
                            </label>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <label className="font-medium">Report</label>
                        <div className="p-2.5 rounded-lg border-[1.5px] bg-white border-gray-300 flex items-center gap-5 mt-1">
                            <label  className="inline-flex items-center">
                                <input
                                type="radio"
                                className="h-4 w-4"
                                name="report"
                                defaultChecked={report === 0}
                                value="0"
                                />
                                <span className="ml-3 text-sm font-medium">0</span>
                            </label>
                            <label  className="inline-flex items-center">
                                <input
                                type="radio"
                                className="h-4 w-4"
                                name="report"
                                defaultChecked={report === 1}
                                value="1"
                                />
                                <span className="ml-3 text-sm font-medium">1</span>
                            </label>
                        </div>
                    </div>

                    <div className="mt-8">
                        <button type='submit' className="bg-purple-800 p-3 w-full rounded-md text-white font-medium text-sm">
                            UPDATE SURVEY
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddSurvey
