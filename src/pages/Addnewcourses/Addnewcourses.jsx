import React, { useState } from 'react';
import useAxios from '../../hooks/useAxios';
import Swal from 'sweetalert2';

const Addnewcourses = () => {
    const axiosData = useAxios()
    const [days, setDays] = useState([])
    const [topic, setTopic] = useState([])

    const handelSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const price = e.target.price.value;
        const week = e.target.week.value;
        const start = e.target.start.value;
        const end = e.target.end.value;
        const startTime = e.target.startTime.value;
        const endTime = e.target.endTime.value;
        const level = e.target.label.value;
        const description = e.target.description.value;
        const schedule = {
            startDate: start,
            endDate: end,
            classDays: days,
            classTime: startTime,
            classTimeEnd: endTime,
        }
        const data = { name, price, level, week, topic, description, schedule }
        axiosData.post('/api/course', data)
            .then(res => {
                Swal.fire({
                    title: "Good job!",
                    text: "You courses successfully upload",
                    icon: "success"
                });
                e.target.reset()
            })
    }
    const handleChange = (e) => {
        if (e.target.checked) {
            setDays([...days, e.target.value])
        } else {
            const data = days.filter(d => d !== e.target.value)
            setDays(data)
        }
    }
    const handleChangetopics = (e) => {
        if (e.target.checked) {
            setTopic([...topic, e.target.value])
        } else {
            const data = topic.filter(d => d !== e.target.value)
            setTopic(data)
        }
    }

    return (
        <div>

            <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
                    <div className="mb-8">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                            Please add your courses
                        </h2>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, officia.
                        </p>
                    </div>
                    <form onSubmit={handelSubmit}>
                        <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
                            <div className="sm:col-span-3">
                                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                    Name
                                </label>
                            </div>
                            <div className="sm:col-span-9">
                                <input required name='name' type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="course name" />
                            </div>

                            <div className="sm:col-span-3">
                                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                    Price
                                </label>
                            </div>

                            <div className="sm:col-span-9">
                                <input required name='price' type="number" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="course price" />
                            </div>
                            <div className="sm:col-span-3">
                                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                    Duration
                                </label>
                            </div>
                            <div className="sm:col-span-9">
                                <input required name='week' type="number" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="-weeks" />
                            </div>
                            <div className="sm:col-span-3">
                                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                    Schedule
                                </label>
                            </div>
                            <div className="sm:col-span-9">
                                <div className="sm:flex">
                                    <input required
                                        type="text"
                                        onFocus={(e) => (e.target.type = "date")}
                                        onBlur={(e) => (e.target.type = "text")}
                                        name='start'
                                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="StartDate" />
                                    <input required
                                        type="text"
                                        onFocus={(e) => (e.target.type = "date")}
                                        onBlur={(e) => (e.target.type = "text")}
                                        name='end'
                                        className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="EndDate" />
                                </div>
                                <div className="sm:flex">
                                    <input
                                        type="text"
                                        onFocus={(e) => (e.target.type = "time")}
                                        onBlur={(e) => (e.target.type = "text")}
                                        name='startTime'
                                        required className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="StartTime" />
                                    <input
                                        type="text"
                                        onFocus={(e) => (e.target.type = "time")}
                                        onBlur={(e) => (e.target.type = "text")}
                                        name='endTime'
                                        required className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="EndTime" />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                </label>
                            </div>
                            <div className="sm:col-span-9">
                                <div className="sm:flex items-center gap-2">
                                    <label className="flex py-2 px-3  w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                        <input value={'Saturday'} onChange={e => handleChange(e)} type="checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                        <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Saturday</span>
                                    </label>

                                    <label className="flex py-2 px-3  w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                        <input value={'Sunday'} onChange={e => handleChange(e)} type="checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                        <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Sunday</span>
                                    </label>

                                    <label className="flex py-2 px-3  w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                        <input value={'Monday'} onChange={e => handleChange(e)} type="checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                        <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Monday</span>
                                    </label>
                                    <label className="flex py-2 px-3  w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                        <input value={'Tuesday'} onChange={e => handleChange(e)} type="checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                        <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Tuesday</span>
                                    </label>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                </label>
                            </div>
                            <div className="sm:col-span-9">
                                <div className="sm:flex items-center gap-2">
                                    <label className="flex py-2 px-3  w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                        <input value={'Wednesday'} onChange={e => handleChange(e)} type="checkbox" name="af-account-gender-checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                        <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Wednesday</span>
                                    </label>
                                    <label className="flex py-2 px-3  w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                        <input value={'Tuesday'} onChange={e => handleChange(e)} type="checkbox" name="af-account-gender-checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                        <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Tuesday</span>
                                    </label>
                                    <label className="flex py-2 px-3  w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                        <input value={'Friday'} onChange={e => handleChange(e)} type="checkbox" name="af-account-gender-checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                        <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Friday</span>
                                    </label>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <div className="inline-block">
                                    <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                        Level
                                    </label>
                                </div>
                            </div>
                            <div className="sm:col-span-9">
                                <div className="sm:flex">
                                    <select name='label' className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                        <option value={'Beginner'}>Beginner</option>
                                        <option value={'Mid'}>Mid-Level</option>
                                        <option value={'Experienced'}>Experienced</option>
                                        <option value={'Expert'}>Expert</option>
                                        <option value={'Senior'}>Senior</option>
                                        <option value={'Leadership'}>Leadership </option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                    Topics
                                </label>
                            </div>
                            <div className="sm:col-span-9">
                                <div className="sm:flex items-center gap-2">
                                    <label className="flex py-2 px-3  w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                        <input value={'HTML'} onChange={e => handleChangetopics(e)} type="checkbox" name="af-account-gender-checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                        <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">HTML</span>
                                    </label>
                                    <label className="flex py-2 px-3  w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                        <input value={'CSS'} onChange={e => handleChangetopics(e)} type="checkbox" name="af-account-gender-checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                        <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">CSS</span>
                                    </label>
                                    <label className="flex py-2 px-3  w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                        <input value={'JavaScript'} onChange={e => handleChangetopics(e)} type="checkbox" name="af-account-gender-checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                        <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">JavaScript</span>
                                    </label>
                                    <label className="flex py-2 px-3  w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                        <input value={'Vue.js'} onChange={e => handleChangetopics(e)} type="checkbox" name="af-account-gender-checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                        <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Vue.js</span>
                                    </label>
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                </label>
                            </div>

                            <div className="sm:col-span-9">
                                <div className="sm:flex items-center gap-2">
                                    <label className="flex py-2 px-3  w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                        <input value={'Node.js'} onChange={e => handleChangetopics(e)} type="checkbox" name="af-account-gender-checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="af-account-gender-checkbox-other" />
                                        <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Node.js</span>
                                    </label>
                                    <label className="flex py-2 px-3  w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                        <input value={'Express.js'} onChange={e => handleChangetopics(e)} type="checkbox" name="af-account-gender-checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="af-account-gender-checkbox-other" />
                                        <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">Express.js</span>
                                    </label>
                                    <label className="flex py-2 px-3  w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
                                        <input value={'RESTful APIs'} onChange={e => handleChangetopics(e)} type="checkbox" name="af-account-gender-checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="af-account-gender-checkbox-other" />
                                        <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">RESTful APIs</span>
                                    </label>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                                    Description
                                </label>
                            </div>

                            <div className="sm:col-span-9">
                                <textarea required name='description' id="af-account-bio" className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" rows="6" placeholder="Enter your description..."></textarea>
                            </div>
                        </div>
                        <div className="mt-5 flex justify-end gap-x-2">
                            <button type="submit" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                Add your course
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Addnewcourses;