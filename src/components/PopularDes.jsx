import { useEffect, useMemo, useState } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import {v4 as uuid} from 'uuid';
function PrevBtn({ handleFunc, indx }) {
    return (
        <button className="text-4xl rounded-full p-0 active:bg-Primary" disabled={indx === 0} onClick={handleFunc}>
            <CiCircleChevLeft />
        </button>
    );
}

function NextBtn({ handleFunc, indx, current }) {
    return (
        <button className="text-4xl rounded-full p-0 active:bg-Primary" disabled={indx === current} onClick={handleFunc}>
            <CiCircleChevRight />
        </button>
    );
}
function PopularCard({data}) {
    return (
        <div className="w-full bg-white p-2 flex flex-col gap-1 md:w-72">
            <div className="w-full h-48 rounded-md">
                <img src={data.pic} alt={data.title} className="w-full h-full"/>
            </div>
            <h4 className="font-bold text-lg font-sans">{data.title}</h4>
            <h6>{data.country}</h6>
            <h6>{data.period}</h6>
            <div className="flex flex-col gap-2 md:items-center md:justify-between md:flex-row">
                <h6><span className="font-bold">{data.price}</span><span>/person</span></h6>
                <button className="p-2 bg-none border border-Primary rounded-lg text-Primary hover:text-white hover:bg-Primary">Book Now</button>
            </div>
        </div>
    )
}
function PopularDes() {
    const countries = useMemo(()=>[
        {
            pic:"images/Delhi.webp",
            title:"Delhi Tour",
            country:"India",
            period:"4 days tour",
            price:"$89 "
        },
        {
            pic:"images/Nest-Monastery.webp",
            title:"Tiger's Nest Monastery",
            country:"Bhutan",
            period:"8 days tour",
            price:"$89 "
        },
        {
            pic:"images/Kori-Village.webp",
            title:"Kori Village Trek",
            country:"Nepal",
            period:"5 days tour",
            price:"$89 "
        },
        {
            pic:"images/Nest-Monastery.webp",
            title:"Tiger's Nest Monastery",
            country:"Bhutan",
            period:"8 days tour",
            price:"$89 "
        },

    ],[])
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);
    const [chunks, setChunks] = useState([]);

    const chunkArray = (arr, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            chunks.push(arr.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const updateCardsToShow = () => {
        if (window.innerWidth >= 1300) {
            setCardsToShow(4);
        } else if (window.innerWidth >= 768) {
            setCardsToShow(2);
        } else {
            setCardsToShow(1);
        }
    };

    useEffect(() => {
        updateCardsToShow();
        window.addEventListener("resize", updateCardsToShow);

        return () => {
            window.removeEventListener("resize", updateCardsToShow);
        };
    }, []);

    useEffect(() => {
        setChunks(chunkArray(countries, cardsToShow));
    }, [cardsToShow, countries]);

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < chunks.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    };
  return (
    <section className="py-10 px-3 md:px-10 lg:px-40 flex flex-col gap-5">
      <div className="flex flex-col justify-between md:flex-row">
        <h4 className="text-2xl font-bold font-sans">Find Popular Destinations</h4>
        <div className="flex gap-1 self-end">
            <PrevBtn handleFunc={handlePrev} indx={currentIndex} />
            <NextBtn handleFunc={handleNext} indx={currentIndex} current={chunks.length - 1} />
        </div>
      </div>
      <div className="flex gap-2 md:justify-center lg:justify-start">
                    {chunks[currentIndex]?.length > 0 &&
                        chunks[currentIndex].map((item) => <PopularCard key={uuid()} data={item} />)}
                </div>
    </section>
  )
}
export default PopularDes;
