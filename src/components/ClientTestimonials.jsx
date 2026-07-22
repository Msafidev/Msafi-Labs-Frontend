import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const ClientTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Working with Msafi Labs was one of the best decisions we made for our business. They took the time to understand our vision and delivered a website that exceeded our expectations. Their professionalism, creativity, and attention to detail were outstanding.",
      author: 'David Ochieng',
      role: 'Founder, Horizon Technologies',
      rating: 5,
    },
    {
      id: 2,
      quote:
        "The team transformed our outdated processes into an efficient digital workflow. Their expertise in software development and AI automation has significantly improved our productivity and customer experience.",
      author: 'Sarah Wanjiku',
      role: 'Operations Manager, NextGen Solutions',
      rating: 5,
    },
    {
      id: 3,
      quote:
        "From branding to web development, Msafi Labs handled every stage of our project with excellence. Communication was seamless, timelines were met, and the final product perfectly represents our brand.",
      author: 'Brian Otieno',
      role: 'CEO, Elevate Ventures',
      rating: 5,
    },
    {
      id: 4,
      quote:
        "Their commitment doesn't end after launch. The ongoing support and strategic guidance we've received have made Msafi Labs a trusted long-term technology partner for our company.",
      author: 'Mercy Akinyi',
      role: 'Director, Prime Consult Ltd.',
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-[#6C63FF] text-[#6C63FF]' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="relative bg-[#F7FAFC] text-slate-800 py-12 px-4 md:px-12 lg:px-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="frameGridTestimonial" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
              <rect x="4" y="4" width="40" height="40" fill="none" stroke="#6C63FF" strokeWidth="0.8"/>
              <rect x="10" y="10" width="28" height="28" fill="none" stroke="#6C63FF" strokeWidth="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#frameGridTestimonial)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-black tracking-wide text-[#6C63FF] uppercase">
            WHAT OUR CLIENTS SAY ABOUT US
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mt-3 font-medium">
            We measure our success by the success of our clients. Here's what
            businesses have to say about partnering with Msafi Labs to design,
            develop, and transform their digital presence.
          </p>
          <div className="w-24 h-1 bg-[#6C63FF] mx-auto mt-4 rounded-full" />
        </div>

        {/* Carousel */}
        <div>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1024: {
                slidesPerView: 2,
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full">
                  <div className="flex gap-1 mb-5">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-slate-700 leading-8 flex-grow italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-8 border-t pt-5">
                    <h4 className="font-bold text-lg text-slate-900">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-slate-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;