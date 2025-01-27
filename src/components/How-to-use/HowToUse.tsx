import s from "./style.module.css";
import {LanguageKeys} from "../../helpers/languageKeys.ts";
import {useContext, useEffect, useState} from "react";
import {StateContext, StateContextType} from "../../App.tsx";
import HowToCard from "./HowToUseCard/HowToCard.tsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

const HowToUse = () => {

    // @ts-ignore
    const context: StateContextType = useContext(StateContext)
    if (!context) {
        throw new Error('MyComponent must be used within a StateProvider');
    }
    const {globalLanguage, translation, pageContent, screen} = context

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        translation && pageContent &&
        <section>
            <div className={s.container}>
            <div className={s.h3_container}>
                <h3>{translation[globalLanguage as LanguageKeys]['HOME_how_to_use_title']}</h3>
            </div>
            <div className={s.how_container}>

                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={0}
                        slidesPerView={screen<768?1:screen<1000?2:4}
                        speed={1300}
                        loop={false}
                        pagination={{
                            clickable: true,
                        }}
                    >
                        {pageContent.how_to_use.web_images.map((i, index) => (
                            <SwiperSlide key={index}>
                                <HowToCard index={index} i={i} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </section>
    );
};

export default HowToUse;