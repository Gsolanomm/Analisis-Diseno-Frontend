import React, { useEffect } from 'react'
import Header from '../Header/Main'
import Banner from '../MenHomeTwo/Banner'
import Menulist from '../MenHomeTwo/Menulist'
import VideoTwo from '../MenHomeTwo/VideoTwo'
import MenuSection from '../MenHomeTwo/MenuSection'
import NoticeSection from '../MenHomeTwo/NoticeSection'
import WhoWe from '../MenHomeTwo/WhoWe'
import Testimonial from '../MenHomeTwo/Testimonial'
import OurTeam from '../MenHomeTwo/OurTeam'
import Reservation from '../MenHomeTwo/Reservation'
import Blog from '../MenHomeTwo/Blog'
import Footer from '../Footer/Main'
import Aos from 'aos'


function Main() {

    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

    return (
        <>
            <div className='index_wraper'>
                <Header />
                <Banner />
                {/* <Menulist /> */}
             {/* <VideoTwo /> */}
                {/* <MenuSection /> */}
                <NoticeSection />
                {/* <WhoWe /> */}
                {/* <Testimonial /> */}
                {/* <OurTeam /> */}
                {/* <Reservation /> */}
                {/* <Blog /> */}
                <Footer />
            </div>
        </>
    )
}

export default Main