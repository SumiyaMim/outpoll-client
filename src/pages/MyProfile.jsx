import { Helmet } from "react-helmet-async";
import Container from "../components/shared/Container";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const MyProfile = () => {

  const { user } = useAuth();
  const { role } = useRole(user.email);

  return (
    <div className="pt-40 pb-20">
       <Helmet>
           <title>My Profile</title>
        </Helmet>    
      <Container>
      <div className='shadow border py-16 px-10 rounded-xl md:mx-40 lg:mx-96'>
            <div className="w-20 mx-auto">
                    <img src={user.photoURL} alt={user.displayName} className='rounded-full border-2 border-purple-800 mb-3'/>
            </div>
            <p className='py-2 px-6 mx-auto text-xs text-white font-medium bg-purple-800 rounded-md mt-1 uppercase w-fit mb-10'>
            {role}
            </p>
            <h4 className="text-sm text-zinc-600">Name</h4>
            <h2 className='font-medium text-base mb-3'>{user.displayName}</h2>
            <h4 className="text-sm text-zinc-600">Email</h4>
            <p className='font-medium text-base'>{user.email}</p>
        </div>
      </Container>
    </div>
  )
}

export default MyProfile
