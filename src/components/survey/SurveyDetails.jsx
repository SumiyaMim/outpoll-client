import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Container from "../shared/Container";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { IoFlag } from "react-icons/io5";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";
import useAxiosSecure from "../../hooks/useAxiosSecure"
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SurveyDetails = () => {

    const survey = useLoaderData();
    const { _id, title, description, timestamp, deadline, category, options, like, dislike, report } = survey
    // console.log(survey)

    const [likeStatus, setLikeStatus] = useState(like === 1);
    const [dislikeStatus, setDislikeStatus] = useState(dislike === 1);
    const [reportStatus, setReportStatus] = useState(report === 1);
    const { user } = useAuth();
    const { role } = useRole(user?.email);
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const [comments, setComments] = useState([]);

    const handleLikeClick = () => {
        setLikeStatus(!likeStatus);
    };
    
    const handleDislikeClick = () => {
        setDislikeStatus(!dislikeStatus);
    };
    
    const handleReportClick = () => {
        setReportStatus(!reportStatus);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const selectedOption = formData.get('options');
        const options = [];
        options.push(selectedOption);

        const optionCounts = {
            Yes: 0,
            No: 0,
        };

        options.forEach(option => {
            if (option === 'Yes') {
              optionCounts.Yes += 1;
            } else if (option === 'No') {
              optionCounts.No += 1;
            }
        });          

        const { Yes: yesCount, No: noCount } = optionCounts;

        const votes = [yesCount, noCount];
        const vote = yesCount + noCount;

        const timestamp = new Date().toISOString();

        const participateSurvey = { 
            options,
            like: likeStatus ? 1 : 0,
            dislike: dislikeStatus ? 1 : 0,
            report: reportStatus ? 1 : 0,
            votes,
            vote,
            timestamp,
            participant_email: user.email,
            participant_name: user.displayName,
            participant_role: role,
            title, 
            category,
            surveyId: _id
        }
        // console.log(participateSurvey)

        // send participate survey to the server
        axiosSecure.post('/participants', participateSurvey)
        .then(res => {    
          Swal.fire({
            position: "center",
            icon: "success",
            title: ``,
            showConfirmButton: false,
            timer: 1500
          });
        })

    }
    

    const handleCommentSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const comment = form.comment.value;
        const timestamp = new Date().toISOString();

        const commentSurvey = { 
            surveyId:_id,
            title,
            comment,
            timestamp,
            participant_email: user.email,
            participant_name: user.displayName,
            participant_role: role,
        }
        // console.log(commentSurvey)

        // send participate survey to the server
        axiosSecure.post('/comments', commentSurvey)
        .then(res => {    
            Swal.fire({
              position: "center",
              icon: "success",
              title: ``,
              showConfirmButton: false,
              timer: 1500
            });
            window.location.reload();
        })
    }

    useEffect(() => {
        axiosPublic.get(`/comments/${_id}`)
            .then(res => {
                setComments(res.data);
                // console.log(res.data)
            })
            .catch(error => {
                console.error("Error fetching comments:", error);
            });
    }, [_id]);

    
  return (
    <div className="pt-36 pb-20">
        <Helmet>
         <title>{`OutPoll | ${title}`}</title>
        </Helmet>    
        <Container>
            <div className="mb-10">
                <h3 className="text-2xl font-semibold w-fit mx-auto text-center mb-1.5">{title}</h3>
                <hr className="border-[1.5px] w-28 border-purple-700 mx-auto mb-5"/>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-10">
                <div className="col-span-2">
                    <h1 className="text-xl font-bold mb-1">{title}</h1>
                    <h5 className="mb-5 text-zinc-500 font-medium">Category: {category}</h5>
                    <hr />
                    <div className="flex items-center gap-2 md:gap-3 text-[12px] md:text-sm text-zinc-500 my-2">
                        <p>Last Updated:{' '} &nbsp;
                            {new Date(timestamp)
                                .toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                                })
                                .replace(/(\d+) (\w+) (\d+)/, '$1 $2, $3')}
                        </p>
                        <p>|</p>
                        <p>Deadline:{' '} &nbsp;
                            {new Date(deadline)
                                .toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                                })
                                .replace(/(\d+) (\w+) (\d+)/, '$1 $2, $3')}
                        </p>
                    </div>
                    <hr />
                    <div className="bg-zinc-50 p-6 md:p-10 mt-8 rounded-lg">
                        <form onSubmit={handleSubmit}>
                            <p className="font-medium text-zinc-600 mb-4">{description}</p>
                            <div className="flex flex-col gap-3">
                                {options?.map((option, index) => (
                                    <div key={index} className="border p-3 rounded-lg border-zinc-300">
                                        <label  className="inline-flex items-center">
                                            <input
                                            type="radio"
                                            className="h-4 w-4"
                                            value={option}
                                            name="options"
                                            />
                                            <span className="ml-3 text-sm font-medium">{option}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-5 flex justify-between items-center">
                                <button 
                                type="submit" 
                                className="py-2 px-6 text-xs font-medium text-center text-white bg-purple-800 rounded-md">
                                    Submit
                                </button>
                                <div className="h-10 flex items-center gap-4 text-lg">
                                    <button
                                        onClick={handleLikeClick}
                                        className={`${likeStatus ? 'text-purple-800' : 'text-zinc-800'}`}
                                    >
                                        <AiFillLike />
                                    </button>
                                    <button
                                        onClick={handleDislikeClick}
                                        className={`${dislikeStatus ? 'text-purple-800' : 'text-zinc-800'}`}
                                    >
                                        <AiFillDislike />
                                    </button>
                                    <button
                                        onClick={handleReportClick}
                                        className={`${reportStatus ? 'text-purple-800' : 'text-zinc-800'}`}
                                    >
                                        <IoFlag />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <form onSubmit={handleCommentSubmit}>
                        <h2 className="font-medium mt-8 mb-3">Comment</h2>
                        <div className="w-full mb-2 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                            <div className="p-2 bg-white rounded-t-lg dark:bg-gray-800">
                                <label className="sr-only">Your comment</label>
                                <textarea id="comment" 
                                rows="4" 
                                className="w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400 p-3 resize-none outline-none" 
                                placeholder="Write a comment..."
                                name="comment"
                                ></textarea>
                            </div>
                            <div className="px-3 py-2 border-t dark:border-gray-600">
                                <button type="submit" className="py-2 px-6 text-xs font-medium text-center text-white bg-purple-800 rounded-md">
                                    Send
                                </button>
            
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <h2 className="font-medium mb-4">Comments</h2>
                    <div className="flex flex-col gap-2">
                        {comments.length > 0 ? (
                            comments.map((comment, index) => (
                                <div key={index} className="bg-gray-100 p-4 rounded-lg">
                                        <p className="text-xs mb-1 text-zinc-400 font-medium">{comment.participant_name}</p>
                                        <p className="text-sm text-zinc-700 font-medium">{comment.comment}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-sm text-zinc-600">No comments yet.</p>
                        )}
                    </div>     
                </div>
            </div>
        </Container>
    </div>
  )
}

export default SurveyDetails
