import { Navigate } from 'react-router-dom'
import useRole from '../hooks/useRole'
import Spinner from '../components/shared/Spinner'
import useAuth from '../hooks/useAuth';

const SurveyorRoute = ({ children }) => {
    
    const { user } = useAuth();
    const {role, isLoading} = useRole(user?.email)

    if (isLoading) return <Spinner />
  
    if (role === 'surveyor') return children
  
    return <Navigate to='/dashboard' />
}

export default SurveyorRoute
