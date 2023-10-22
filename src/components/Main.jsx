"use client";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function MainSeccion() {

  return (
    <>
      <section className="w-full h-max flex justify-center pt-4">
        <div className="w-11/12 grid grid-cols-2 max-sm:grid-cols-1">
          <div className="bg_Per  h-60 flex rounded-lg gap-2 p-4 m-4 max-sm:h-fit max-sm:flex-col  ">
            <div className="w-7/12 border border-solid flex gap-2 max-sm:w-full max-sm:h-60 ">
              <div className="h-full w-7/12 border border-solid border-green-600   max-sm:min-w-full max-sm:min-h-full ">
                largo
              </div>
              <div className="w-5/12 flex flex-col gap-3 h-full justify-center max-sm:hidden">
                <div className="h-2/5  border border-solid border-red-600 max-sm:h-full max-sm:min-w-full">
                  {" "}
                  pequeños
                </div>
                <div className="h-2/5   border border-solid border-orange-600 max-sm:min-w-full">
                  {" "}
                  pequeños{" "}
                </div>
              </div>
            </div>
            <div className="text-center mt-2 w-5/12 flex-wrap max-sm:w-full">
              <p className="text-lg font-bold">Nombre del Producto</p>
              <p className="text-sm font-semibold">Descripcion: si es que tiene </p>
              <p className="text-gray-600">Precio unidad: $XX.XX</p>
              <p className="text-gray-600">Precio docena: $XX.XX</p>
              <p className="text-gray-600">Precio paquete: $XX.XX</p>
            </div>
          </div>
          <div className="bg_Per  h-60 flex rounded-lg gap-2 p-4 m-4 max-sm:h-fit max-sm:flex-col  ">
            <div className='w-7/12 border border-solid flex gap-2 max-sm:w-full max-sm:h-60'>
              <Swiper 
                  spaceBetween={50}
                  slidesPerView={1}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                
                >
                <SwiperSlide className='min-w-full'>1</SwiperSlide>
                <SwiperSlide className='min-w-full'>2</SwiperSlide>
                <SwiperSlide className='min-w-full'>3</SwiperSlide>
                <SwiperSlide className='min-w-full'>4</SwiperSlide>
                <SwiperSlide className='min-w-full'>5</SwiperSlide>
                
              </Swiper>
            </div>
            <div className="text-center mt-2 w-5/12 flex-wrap max-sm:w-full">
              <p className="text-lg font-bold">Nombre del Producto</p>
              <p className="text-sm font-semibold">Descripcion: si es que tiene </p>
              <p className="text-gray-600">Precio unidad: $XX.XX</p>
              <p className="text-gray-600">Precio docena: $XX.XX</p>
              <p className="text-gray-600">Precio paquete: $XX.XX</p>
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg shadow-lg p-4 m-4">
            <div>imagen</div>
            <div className="text-center mt-2">
              <p className="text-lg font-bold">Nombre del Producto</p>
              <p className="text-gray-600">Precio: $XX.XX</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default MainSeccion;
