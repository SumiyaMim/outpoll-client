import { Helmet } from "react-helmet-async"
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const ManageSurveys = () => {

    const axiosSecure = useAxiosSecure();
    // const [surveys, setSurveys] = useState([]);

    // useEffect(() => {
    //     axiosSecure.get('/surveys')
    //     .then((res) => {
    //         setSurveys(res.data);
    //     });
    // }, []);

    const { data: surveys=[], refetch } = useQuery({
      queryKey: ['surveys'],
      queryFn: async () => await axiosSecure.get('/surveys')
    })

     // update survey status
     const handleStatus = survey => {
      axiosSecure.patch(`/surveys/admin/${survey._id}`)
      .then(res =>{
          console.log(res.data)
          if(res.data.modifiedCount > 0){
              refetch();
              Swal.fire({
                  position: "center",
                  icon: "success",
                  title: `Status Updated!`,
                  showConfirmButton: false,
                  timer: 1500
                });
          }
      })
    }

  return (
    <div className="py-14 px-6 lg:px-10">
      <Helmet>
           <title>Dashboard | Manage Survey</title>
        </Helmet>    
        <div className="mb-10">
            <h3 className="text-2xl font-semibold w-fit mx-auto text-center mb-1.5">Manage Surveys</h3>
            <hr className="border-[1.5px] w-12 border-purple-700 mx-auto mb-5"/>
        </div>

        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-semibold'
                    >
                      Title
                    </th>
                    <th
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-semibold'
                    >
                      Status
                    </th>
                    <th
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-semibold'
                    >
                      Action
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  {/* Table Row Data */}
                  {surveys && surveys?.data?.map(survey => (
                    <tr key={survey._id}>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                            <p className='text-gray-900 whitespace-no-wrap'>{survey?.title}</p>
                        </td>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                            <p className='text-gray-900 whitespace-no-wrap'>{survey?.status}</p>
                        </td>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-xs font-medium'>
                            <button onClick={() => handleStatus(survey)}
                            className="bg-purple-800 text-white rounded-md p-2"
                            >
                              Update
                            </button>
                        </td>
                    </tr>
                  )
                  )}
                </tbody>
                </table>
            </div>
        </div>

    </div>
  )
}

export default ManageSurveys
