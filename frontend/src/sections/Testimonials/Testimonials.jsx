import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import TestimonialItem from './components/TestimonialItem';
import testimonials from './util/testimonials';
import {FaCaretLeft, FaCaretRight} from 'react-icons/fa';
import 'swiper/swiper.min.css';
import './Testimonials.css';

const Testimonials = props => {
    const swiperRef = useRef(null);
    const [swiper, setSwiper] = useState();

    const handleSwipe = direction => {
        if (swiper) {
            if (direction === 'left') {
                swiper.slidePrev();
            } else if (direction === 'right') {
                swiper.slideNext();
            }
            console.log(swiper);
        }
    };

    return (
        <article ref={props.innerRef} className="testimonials-section">
            <header className="testimonials-header">
                <h4 className="text-title testimonials-heading">Testimonials</h4>
                <h2 className="text-title testimonials-subheading">
                    Now It's Our Customers' Turn to Talk
                </h2>
            </header>
            <section className="testimonials-section-content">
                <FaCaretLeft className="testimonials-icon" onClick={() => handleSwipe("left")} />
                <div className="testimonials-container">
                    <Swiper
                        ref={swiperRef}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={1}
                        spaceBetween={32}
                        onSwiper={(swiper) => setSwiper(swiper)}
                    >
                        {testimonials.map((testimonial, idx) => (
                            <SwiperSlide key={idx}>
                                <TestimonialItem testimonial={testimonial} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <FaCaretRight className="testimonials-icon" onClick={() => handleSwipe("right")} />
            </section>
        </article>
    );
};

export default Testimonials;