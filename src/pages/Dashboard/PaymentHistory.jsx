import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async"
import useAxiosSecure from "../../hooks/useAxiosSecure";
import moment from 'moment';

const PaymentHistory = () => {

    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments`)
            return res.data;
        }
    })

  return (
    <div className="py-14 px-6 lg:px-10">
      <Helmet>
           <title>Dashboard | Payment History</title>
        </Helmet>    
        <div className="mb-10">
            <h3 className="text-2xl font-semibold w-fit mx-auto text-center mb-1.5">Payment History</h3>
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
                      Price
                    </th>
                    <th
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-semibold'
                    >
                      Date
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  {/* Table Row Data */}
                  {payments && payments?.map(payment => (
                    <tr key={payment._id}>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                            <p className='text-gray-900 whitespace-no-wrap'>{payment?.email}</p>
                        </td>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                            <p className='text-gray-900 whitespace-no-wrap'>${payment?.price}</p>
                        </td>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                            <p className='text-gray-900 whitespace-no-wrap'>
                                {moment(payment?.timestamp).format('DD/MM/YYYY')}
                            </p>
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

export default PaymentHistory
