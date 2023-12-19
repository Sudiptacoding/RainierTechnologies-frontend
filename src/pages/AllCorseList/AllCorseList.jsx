import React, { useState } from 'react';
import useAllData from '../../hooks/useAllData';
import NoDataHere from '../../common/NoDataHere';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxios from '../../hooks/useAxios';

const AllCorseList = () => {
    const { isPending, error, course, refetch } = useAllData();
    const axiosData = useAxios()
    const navigate = useNavigate()
    const [details, setDetails] = useState({})

    const handelDetails = (item) => {
        setDetails(item)
        document.getElementById('my_modal_4').showModal()
    }

    const handelUpdate = (item) => {
        document.getElementById('my_modal_4').close()
        console.log(item)
        navigate(`/UpdateCourse/${item}`)
    }

    const handelDelete = (id) => {
        document.getElementById('my_modal_4').close()
        Swal.fire({
            title: "Are you sure?",
            text: "You won't to delete this course",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosData.delete(`/api/course/${id}`)
                    .then(res => {
                        refetch()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });

                    })
            }
        });
    }

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div className='dark:bg-gray-800 min-h-screen w-full'>
            {
                course?.length > 0 ? <div className="flex flex-col pt-5">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">level</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">price</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Start Time</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">End Time</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Start Date</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">End Date</th>
                                            <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        {
                                            course?.length > 0 && <>
                                                {
                                                    course?.map((item, i) => {
                                                        return <tr key={i}>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{item?.name.slice(0, 20)}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item?.level}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item?.price}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item?.schedule?.classTime}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item?.schedule?.classTimeEnd}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item?.schedule?.startDate}</td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{item?.schedule?.endDate}</td>

                                                            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                                <a onClick={() => handelDetails(item)} className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                                                    More Details
                                                                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    })
                                                }
                                            </>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> : <div className='w-full flex items-center justify-center'><NoDataHere></NoDataHere></div>
            }
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl dark:bg-gray-800">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-white">✕</button>
                    </form>
                    <div>
                        <div className="bg-gray-100 dark:bg-gray-800 py-8">
                            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="">
                                    <div className="md:flex-1 px-4">
                                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{details?.name}</h2>
                                        <div className="flex mb-4">
                                            <div className="mr-4">
                                                <span className="font-bold text-gray-700 dark:text-gray-300">Price: </span>
                                                <span className="text-gray-600 dark:text-gray-300"> {details?.price}BDT</span>
                                            </div>
                                            <div>
                                                <span className="font-bold text-gray-700 dark:text-gray-300">Level: </span>
                                                <span className="text-gray-600 dark:text-gray-300"> {details?.level} </span>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Course Topic:</span>
                                            <div className="flex items-center mt-2">
                                                {
                                                    details?.topic && <div className='flex gap-2 flex-wrap'>
                                                        {details?.topic?.map((item, i) => {
                                                            return <button key={i} className="rounded-full bg-gray-800 dark:text-gray-900 text-white px-10 dark:bg-gray-200 mr-2">{item}</button>
                                                        })}
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <span className="font-bold text-gray-700 dark:text-gray-300">ClassDays:</span>
                                            <div className="flex items-center mt-2">
                                                {
                                                    details?.schedule?.classDays && <div>
                                                        {details?.schedule?.classDays?.map((item, i) => {
                                                            return <button key={i} className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">{item}</button>
                                                        })}
                                                    </div>
                                                }
                                            </div>
                                        </div>

                                        <div className="flex mb-4">
                                            <div className="mr-4">
                                                <span className="font-bold text-gray-700 dark:text-gray-300">ClassTime: </span>
                                                <span className="text-gray-600 dark:text-gray-300">  {details?.schedule?.classTime} - {details?.schedule?.classTimeEnd} </span>
                                            </div>
                                            <div className='mr-4'>
                                                <span className="font-bold text-gray-700 dark:text-gray-300">Date: </span>
                                                <span className="text-gray-600 dark:text-gray-300">{details?.schedule?.startDate} - {details?.schedule?.endDate} </span>
                                            </div>
                                            <div>
                                                <span className="font-bold text-gray-700 dark:text-gray-300">Week: </span>
                                                <span className="text-gray-600 dark:text-gray-300">{details?.week} weeks </span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                                {details?.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="md:flex-1 px-4 pt-10">
                                        <div className="flex -mx-2 mb-4">
                                            <div className="w-1/2 px-2">
                                                <button onClick={() => handelUpdate(details?._id)} className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Update courses</button>
                                            </div>

                                            <div onClick={() => handelDelete(details?._id)} className="w-1/2 px-2">
                                                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Delete now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AllCorseList;