import { Helmet } from "react-helmet-async"
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'


const Feedback = () => {

    const axiosSecure = useAxiosSecure();
    const [comments, setComments] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    const [selectedComment, setSelectedComment] = useState(null);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal(comment) {
    setSelectedComment(comment);
    setIsOpen(true);
  }
    
    useEffect(() => {
        axiosSecure.get('comments')
        .then((res) => {
            setComments(res.data);
            // console.log(res.data)
        });
    }, []);

  return (
    <div className="py-14 px-6 lg:px-10">
        <Helmet>
           <title>Dashboard | Feedback</title>
        </Helmet>    
        <div className="mb-10">
            <h3 className="text-2xl font-semibold w-fit mx-auto text-center mb-1.5">Feedback</h3>
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
                      User
                    </th>
                    <th
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-semibold'
                    >
                      Comment
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  {/* Table Row Data */}
                  {comments && comments.map(comment => (
                    <tr key={comment._id}>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                            <p className='text-gray-900 whitespace-no-wrap'>{comment?.title}</p>
                        </td>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                            <p className='text-gray-900 whitespace-no-wrap'>{comment?.participant_name}</p>
                        </td>
                        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                          <button
                            type="button"
                            onClick={() => openModal(comment)}
                            className="bg-purple-800 text-white rounded-md px-3 py-1.5 text-xs font-medium"
                          >
                            Show
                          </button>
                          {/* Modal */}
                          <Transition appear show={isOpen} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                              <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <div className="fixed inset-0 bg-black/25" />
                              </Transition.Child>

                              <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                  <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                  >
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                      <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                      >
                                        Comment
                                      </Dialog.Title>
                                      <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                        {selectedComment?.comment}
                                        </p>
                                      </div>

                                      <div className="mt-4">
                                        <button
                                          type="button"
                                          className="inline-flex justify-center rounded-md border border-transparent bg-purple-100 px-4 py-2 text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                                          onClick={closeModal}
                                        >
                                          Ok
                                        </button>
                                      </div>
                                    </Dialog.Panel>
                                  </Transition.Child>
                                </div>
                              </div>
                            </Dialog>
                          </Transition>
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

export default Feedback
