import React from 'react';
import useAllData from '../../hooks/useAllData';
import Banner from './Banner/Banner';
import CourseList from './CourseList/CourseList';
import Footer from '../../components/Footer/Footer';
import Loader from '../../common/Loader';

const Home = () => {
    const { isPending, error, course } = useAllData();
    if (isPending) return <Loader></Loader>
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className='dark:bg-gray-900'>
            <Banner></Banner>
            <CourseList course={course}></CourseList>
            <div className='pt-10'>
                <Footer></Footer>
            </div>
        </div >
    );
}


export default Home;