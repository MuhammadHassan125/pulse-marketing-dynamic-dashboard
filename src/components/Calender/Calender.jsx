"use client";
import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Reveal } from "../../utils/Reveal";
import Link from "next/link";
import { FireApi } from "../../../utils/useRequest";
const Calender = () => {
  const [calendarData, setCalendarData] = useState([]);

  const GetCalendarData = async () => {
    try {
      const res = await FireApi("component/read/?section=18443303141", "GET");
      console.log("Response:", res);

      if (res.status === true) {
        setCalendarData(res?.data?.components);
      } else {
        console.log("An error occurred");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    GetCalendarData();
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <main className="m-auto w-full py-16 md:px-10 lg:w-[75%]">
        <div className="items-center justify-between lg:flex">
          {/* left side content  */}
          <div className="mb-14 w-[100%] px-8 lg:mb-0 lg:w-[50%] lg:px-0">
            <Reveal>
              {calendarData?.map((item) => (
                <h2
                  key={item._id}
                  className="poppins-medium hero-text text-[1.5rem] md:text-[3rem]"
                >
                  {item?.header}
                </h2>
              ))}
            </Reveal>

            <div className="poppins-light w-[80%] py-4 text-[16px]">
              <Reveal>
                {calendarData?.map((item) => (
                  <p>{item?.content}</p>
                ))}
              </Reveal>
            </div>

            <div className="md:flex ">
              <div className="mr-6 flex items-center  pr-6 md:justify-between md:border-r-2">
                <Link
                  className="flex items-center"
                  href="tel:18443303141"
                  target="_blank"
                >
                  <FaPhoneAlt />
                  <Reveal>
                    {calendarData?.map((item) => (
                      <h3 className="poppins-light ml-3">{item?.section}</h3>
                    ))}
                  </Reveal>
                </Link>
              </div>

              <div className="flex items-center md:justify-between ">
                <Link
                  className="flex items-center"
                  href="mailto:hi@pulsemarketing.io"
                  target="_blank"
                >
                  <MdEmail className="text-xl" />
                  <Reveal>
                  {calendarData?.map((item) => (
                    <h3 className="poppins-light ml-3">{item?.name}</h3>
                  ))}
                  </Reveal>
                </Link>
              </div>
            </div>
          </div>

          <div className="mx-auto w-[90%] lg:mx-0 lg:w-[50%]">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/Q9Y18JQCeAwL83TSLcsu"
              style={{ width: "100%", border: "none", overflow: "hidden" }}
              scrolling="no"
              id="Q9Y18JQCeAwL83TSLcsu_1715938727826"
            ></iframe>
          </div>
        </div>
      </main>
    </>
  );
};

export default Calender;