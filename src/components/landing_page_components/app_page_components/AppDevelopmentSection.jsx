'use client';
import Image from "next/image";
import React from "react";
import ContentTab from "./ContentTab";
import {Reveal} from '@/utils/Reveal';

const AppDevelopmentSection = () => {
  const [tabImage, setTabImage] = React.useState(0);

  return (
    <main className="py-6">
        <div className='text-center w-full'>
            <h2 className="text-4xl font-bold leading-tight my-8">
              Leading the Way in Mobile <br/> App Development
            </h2>
        </div>
      <main className="w-full flex-col-reverse md:flex md:flex-row lg:flex justify-between ">
        {/* project section left box  */}
        <div className="w-[90%] rounded-md p-5 md:p-0 mx-auto md:mx-0 md:w-[50%] flex items-center justify-center ">
          {tabImage === 0 && (
            <Image src={"/images/app_page_images/third-sec.png"} alt="mob1" width={500} height={500} />
          )}
          {tabImage === 1 && (
            <Image src={"/images/app_page_images/app-hero.png"} alt="mob2" width={500} height={500} />
          )}
          {tabImage === 2 && (
            <Image src={"/images/app_page_images/third-sec.png"} alt="mob3" width={500} height={500} />
          )}
        </div>

        {/* project section right box */}
        <div className="w-[100%] px-6 md:px-0 md:w-[55%] flex flex-row justify-between relative ct-projects">
          {/* tab box for project  */}
          <div className="w-[100%] md:w-[70%]">
            {/* top heading */}
            {/* <main className=" w-full m-auto">
              <div className=" justify-between items-center py-8 md:py-20">
                <div className="w-[100%] justify-center items-center">
                  <Reveal>
                    <h1 className="poppins-medium text-4xl">
                      Some of our <br /> favorite projects
                    </h1>
                  </Reveal>
                </div>

                <div className="w-[90%]">
                  <Reveal>
                    <p className=" poppins-light font-light text-[14px] my-3">
                      Join us on a journey to create something truly
                      extraordinary. Together, we&apos;ll turn your dreams into
                      reality.
                    </p>
                  </Reveal>
                </div>
              </div>
            </main> */}

            <ContentTab tabImage={tabImage} setTabImage={setTabImage} />
          </div>

          <div className="w-[30%] absolute top-0 right-6">
            {tabImage === 0 && (
              <div>
                <Image className="rounded-2xl" src={"/images/app_page_images/third-sec-2.png"} alt="mob" width={300} height={300} />
                <h5 className="text-right text-[#68D7D6]">02</h5>
                <h4 className="text-right">iOS App <br/> Development</h4>
              </div>
            )}
            {tabImage === 1 && (
              <Image className="rounded-2xl" src={"/images/app_page_images/third-sec.png"} alt="mob4" width={300} height={300} />
            )}
            {tabImage === 2 && (
              <Image className="rounded-2xl" src={"/images/app_page_images/third-sec-2.png"} alt="mob5" width={300} height={300} />
            )}

            
          </div>
        </div>
      </main>
    </main>
  );
};

export default AppDevelopmentSection;