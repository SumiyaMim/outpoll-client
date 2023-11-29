import { Helmet } from "react-helmet-async"
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Cell, PieChart, Pie, Legend } from 'recharts';
import moment from 'moment';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'purple', 'pink', 'cyan', 'brown'];

const SurveyResponses = () => {

    const axiosSecure = useAxiosSecure();
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        axiosSecure.get('/participants')
        .then((res) => {
            setParticipants(res.data);
        });
    }, []);


    const { data: votes = [] } = useQuery({
      queryKey: ['votes'],
      queryFn: async () => {
          const res = await axiosSecure.get('/votes');
          return res.data;
      }
    });
    // console.log(votes);

    // custom shape for the pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = votes.voteCounts || [];


  return (
    <div className="py-14 px-6 lg:px-10">
       <Helmet>
           <title>Dashboard | Survey Responses</title>
        </Helmet>    
        <div className="mb-10">
            <h3 className="text-2xl font-semibold w-fit mx-auto text-center mb-1.5">Survey Responses</h3>
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
                      Name
                    </th>
                    <th
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-semibold'
                    >
                      Email
                    </th>
                    <th
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-semibold'
                    >
                      Time
                    </th>
                    <th
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-semibold'
                    >
                      Voted
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  {/* Table Row Data */}
                  {participants && participants?.map(participant => (
                    <tr key={participant._id}>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                            <p className='text-gray-900 whitespace-no-wrap'>{participant?.title}</p>
                        </td>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                            <p className='text-gray-900 whitespace-no-wrap'>{participant?.participant_name}</p>
                        </td>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                            <p className='text-gray-900 whitespace-no-wrap'>{participant?.participant_email}</p>
                        </td>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                            <p className='text-gray-900 whitespace-no-wrap'>
                              {moment(participant?.timestamp).format('DD/MM/YYYY')}
                            </p>
                        </td>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                            <p className='text-gray-900 whitespace-no-wrap'>{participant?.options}</p>
                        </td>
                       
                    </tr>
                  )
                  )}
                </tbody>
                </table>
            </div>
        </div>

        <h4 className="mt-20 mb-2 text-center font-semibold text-xl">User Performance</h4>
        <hr className="border-[1.5px] w-14 border-purple-700 mx-auto mb-5"/>
        <div className="flex items-center justify-center">
        {pieChartData.length > 0 ? ( 
          <PieChart width={370} height={400}>
            <Pie
              dataKey="totalCount" 
              nameKey="participant_name" 
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        ) : (
          <p>No data available for pie chart</p>
        )}
        </div>
    </div>
  )
}

export default SurveyResponses
