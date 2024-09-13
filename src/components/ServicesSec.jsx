import { useEffect, useMemo, useState } from "react";
import StandardHeader from "./StandardHeader";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

function ServiceCard({ service }) {
    return (
        <div className="w-full border border-Primary rounded-md p-10 flex flex-col gap-3 items-center md:w-72">
            <img src={service.pic} alt={service.title} className="w-fit h-24" />
            <StandardHeader text={service.title} />
            <p className="text-center font-thin text-sm">{service.desc}</p>
        </div>
    );
}

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
function ServicesSec() {
    const services = useMemo(()=>[
        {
            id: 1,
            pic: "images/tours.png",
            title: "Tours",
            desc: "Commodo amet dolor sed ultricies mi feugiat ligula. Auctor ut non sed viverra varius nibh. Fringilla eget dictum hendrerit sit nisi massa suscipit.",
        },
        {
            id: 2,
            pic: "images/pngwing.png",
            title: "Trekking",
            desc: "Commodo amet dolor sed ultricies mi feugiat ligula. Auctor ut non sed viverra varius nibh. Fringilla eget dictum hendrerit sit nisi massa suscipit.",
        },
        {
            id: 3,
            pic: "images/plane.png",
            title: "Air Tickets",
            desc: "Commodo amet dolor sed ultricies mi feugiat ligula. Auctor ut non sed viverra varius nibh. Fringilla eget dictum hendrerit sit nisi massa suscipit.",
        },
    ],[]);

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
            setCardsToShow(3);
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
        setChunks(chunkArray(services, cardsToShow));
    }, [cardsToShow, services]);

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
        <section className="py-10">
            <div className="text-center mb-5">
                <StandardHeader text={"Categories"} />
                <h3 className="font-bold text-2xl font-serif">We Offer Best Services</h3>
            </div>
            <div className="hidden justify-between items-center gap-5 md:px-10 md:flex lg:px-40">
                <PrevBtn handleFunc={handlePrev} indx={currentIndex} />
                <div className="flex gap-2">
                    {chunks[currentIndex]?.length > 0 &&
                        chunks[currentIndex].map((service) => <ServiceCard key={service.id} service={service} />)}
                </div>
                <NextBtn handleFunc={handleNext} indx={currentIndex} current={chunks.length - 1} />
            </div>
            <div className="flex flex-col px-3 gap-2 md:hidden">
                <div className="flex self-end gap-2">
                    <PrevBtn handleFunc={handlePrev} indx={currentIndex} />
                    <NextBtn handleFunc={handleNext} indx={currentIndex} current={chunks.length - 1} />
                </div>
                <div className="flex gap-2">
                    {chunks[currentIndex]?.length > 0 &&
                        chunks[currentIndex].map((service) => <ServiceCard key={service.id} service={service} />)}
                </div>
            </div>
        </section>
    );
}

export default ServicesSec;
