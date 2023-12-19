import React, { useState } from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import useAllData from '../hooks/useAllData'
import Swal from 'sweetalert2'
import Loader from './Loader'

function SearchData() {
    const { isPending, error, course: items, refetch } = useAllData()
    const [details, setDetails] = useState({})
    if (isPending) return <Loader></Loader>

    if (error) return 'An error has occurred: ' + error.message

    const handelAddCard = () => {
        Swal.fire({
            title: "Good job!",
            text: "You course added successfully!",
            icon: "success"
        });
        document.getElementById('my_modal_5').close()
    }
    const handleOnSearch = (string, results) => {
    }

    const handleOnHover = (result) => {
    }

    const handleOnSelect = (item) => {
        setDetails(item)
        document.getElementById('my_modal_5').showModal()
    }

    const handleOnFocus = () => {
    }

    const formatResult = (item) => {
        return (
            <div className='cursor-pointer'>
                <div >
                    <a ><div><p>{item?.name}</p></div></a>
                </div>
            </div>
        )
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className='relative lg:w-[450px] md:w-[350px] w-[270px]'>
                    <ReactSearchAutocomplete
                        items={items}
                        onSearch={handleOnSearch}
                        onHover={handleOnHover}
                        onSelect={handleOnSelect}
                        onFocus={handleOnFocus}
                        autoFocus
                        formatResult={formatResult}
                        fuseOptions={{ keys: ["name", "price"] }}
                        resultStringKeyName="name"
                        placeholder='Search your course'                                                
                    />
                </div>
            </header>
            <dialog id="my_modal_5" className="modal">
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
                                            <div className="w-1/2 px-2">
                                                <button onClick={handelAddCard} className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                                            </div>
                                            <div onClick={() => document.getElementById('my_modal_5').close()} className="w-1/2 px-2">
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
    )
}

export default SearchData
