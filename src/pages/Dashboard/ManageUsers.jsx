import { useQuery } from "@tanstack/react-query"
import { Helmet } from "react-helmet-async"
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useState } from "react";

const roles = [
  "pro user",
  "user",
  "surveyor",
  "admin",
]

const ManageUsers = () => {

    const axiosSecure = useAxiosSecure();
    const [role, setRole] = useState('');

    const { data: users=[], refetch } = useQuery({
        queryKey: ['users', role],
        queryFn: async () => await axiosSecure.get(`/users?role=${role}`)
    })
    // console.log(users)

    // update role
    const handleSurveyorRole = user => {
      axiosSecure.patch(`/users/surveyor/${user._id}`)
      .then(res =>{
          console.log(res.data)
          if(res.data.modifiedCount > 0){
              refetch();
              Swal.fire({
                  position: "center",
                  icon: "success",
                  title: `${user.name} is an Surveyor Now!`,
                  showConfirmButton: false,
                  timer: 1500
                });
          }
      })
    }

    // update to admin role
    const handleAdminRole = user => {
      axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res =>{
          console.log(res.data)
          if(res.data.modifiedCount > 0){
              refetch();
              Swal.fire({
                  position: "center",
                  icon: "success",
                  title: `${user.name} is an Admin Now!`,
                  showConfirmButton: false,
                  timer: 1500
                });
          }
      })
    }
      
  return (
    <div className="py-14 px-6 lg:px-10">
      <Helmet>
           <title>Dashboard | Manage Users</title>
        </Helmet>    
        <div className="mb-20">
            <h3 className="text-2xl font-semibold w-fit mx-auto text-center mb-1.5">Manage Users</h3>
            <hr className="border-[1.5px] w-12 border-purple-700 mx-auto mb-5"/>
        </div>
        <div className="my-5">
           <h4 className="text-base font-medium text-gray-900 mb-2">Filter By Role</h4>
            <select 
                onChange={(e) => setRole(e.target.value)}
                className="bg-zinc-50 border border-zinc-300 focus:outline-none text-zinc-900 text-sm rounded-md block w-72 md:w-64 lg:w-72 p-2"
                >
                    <option disabled selected value="">Choose one</option>
                    {roles.map((role) => (
                        <option key={role} value={role}>
                            {role}
                        </option>
                    ))}
            </select>
        </div>
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-semibold'
                    >
                      Email
                    </th>
                    <th
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-semibold'
                    >
                      Role
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
                  {users && users?.data?.map(user => (
                    <tr key={user._id}>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                            <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
                        </td>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                            <p className='text-gray-900 whitespace-no-wrap'>{user?.role}</p>
                        </td>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-xs font-medium flex items-center gap-3'>
                            <p className='text-gray-900 whitespace-no-wrap text-sm font-normal'>Update Role:</p>
                            <button 
                            onClick={() => handleSurveyorRole(user)}
                            disabled={user?.role === 'pro user' || user?.role === 'surveyor' || user?.role === 'admin'} 
                            className="bg-purple-800 text-white rounded-md py-2 px-3">To Surveyor</button>                            
                            <button 
                            onClick={() => handleAdminRole(user)}
                            disabled={user?.role === 'pro user' || user?.role === 'surveyor' || user?.role === 'admin'} 
                            className="bg-purple-800 text-white rounded-md py-2 px-3">To Admin</button>                            
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

export default ManageUsers
