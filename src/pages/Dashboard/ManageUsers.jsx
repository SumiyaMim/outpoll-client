import { useQuery } from "@tanstack/react-query"
import { Helmet } from "react-helmet-async"
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageUsers = () => {

    const axiosSecure = useAxiosSecure();

    const { data: users=[], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => await axiosSecure.get('/users')
    })
    // console.log(users)

    // update role
    const handleMakeRole = user => {
      axiosSecure.patch(`/users/admin/${user._id}`)
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
      
  return (
    <div className="py-14 px-6 lg:px-10">
      <Helmet>
           <title>Dashboard | Manage Users</title>
        </Helmet>    
        <div className="mb-10">
            <h3 className="text-2xl font-semibold w-fit mx-auto text-center mb-1.5">Manage Users</h3>
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
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-xs font-medium'>
                            <button 
                            onClick={() => handleMakeRole(user)}
                            className="bg-purple-800 text-white rounded-md p-2">Update</button>                            
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
