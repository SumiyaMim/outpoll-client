import { Navigate } from 'react-router-dom'
import useRole from '../hooks/useRole'
import Spinner from '../components/shared/Spinner'
import useAuth from '../hooks/useAuth';

const AdminRoute = ({ children }) => {
    
  const { user } = useAuth();
  const {role, isLoading} = useRole(user?.email)

  if (isLoading) return <Spinner />

  if (role === 'admin') return children

  return <Navigate to='/' />
}

export default AdminRoute