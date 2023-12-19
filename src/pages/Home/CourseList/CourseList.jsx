import React, { useState } from 'react';
import NoDataHere from '../../../common/NoDataHere';
import Swal from 'sweetalert2';
import useIsAdmin from '../../../hooks/useIsAdmin';


const CourseList = (props) => {
    const { data } = useIsAdmin()
    const courseData = props.course
    const [details, setDetails] = useState({})
    const handelDetails = (item) => {
        setDetails(item)
        document.getElementById('my_modal_3').showModal()
    }
    const handelAddToCard = () => {
        document.getElementById('my_modal_3').close()
        Swal.fire({
            title: "Good job!",
            text: "You course added successfully!",
            icon: "success"
        });
    }

    return (
        <div className='px-20'>
            {
                courseData?.length > 0 ? <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                    {
                        courseData?.map((item, i) => {
                            return <div key={i} className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                                <div className="bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 dark:bg-slate-900 dark:border-gray-700">
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
                                        {item?.name.slice(0,50)}
                                    </p>
                                </div>
                                <div className="p-4 md:p-5">
                                    <h3 className="text-lg font-bold text-gray-600 dark:text-white">
                                        Course Level : {item?.level}
                                    </h3>
                                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                                        {item?.description.slice(0,50)}
                                    </p>
                                    <a onClick={() => handelDetails(item)} className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                                        More Details
                                        <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                    </a>
                                </div>
                            </div>
                        })
                    }
                </div> : <NoDataHere></NoDataHere>
            }
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box w-11/12 max-w-5xl dark:bg-gray-800">
                    <form method="dialog">
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
                                            <span className="font-bold text-gray-700 dark:text-gray-300">classNameDays:</span>
                                            <div className="flex items-center mt-2">
                                                {
                                                    details?.schedule?.classNameDays && <div>
                                                        {details?.schedule?.classNameDays?.map((item, i) => {
                                                            return <button key={i} className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">{item}</button>
                                                        })}
                                                    </div>
                                                }
                                            </div>
                                        </div>

                                        <div className="flex mb-4">
                                            <div className="mr-4">
                                                <span className="font-bold text-gray-700 dark:text-gray-300">classNameTime: </span>
                                                <span className="text-gray-600 dark:text-gray-300">  {details?.schedule?.classNameTime} - {details?.schedule?.classNameTimeEnd} </span>
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
                                            {
                                                data?.admin ? <div className="w-1/2 px-2">
                                                    <button disabled onClick={handelAddToCard} className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">You are admin</button>
                                                </div> : <div className="w-1/2 px-2">
                                                    <button onClick={handelAddToCard} className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                                                </div>
                                            }

                                            <div onClick={() => document.getElementById('my_modal_3').close()} className="w-1/2 px-2">
                                                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Cancel now</button>
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

export default CourseList;