import StandardHeader from "./StandardHeader";
import { IoIosStar } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import {v4 as uuid} from 'uuid';

function ReviewCard({info}) {
    return (
      <div className="flex flex-col max-w-80 gap-2 p-5 shadow-2xl rounded-lg bg-white">
        <h5 className="font-bold font-sans">“A real sense of community, nurtured”</h5>
        <p className="text-xs">Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.</p>
        <button className="underline self-end">view more</button>
        <div className="flex">
          {[0,1,2,3,4].map(star=>{
            return <span key={star} className="text-yellow-500 text-lg"><IoIosStar/></span>
          })}
        </div>
        <h6 className="font-bold">{info.person}</h6>
        <p className="text-gray-600">Weave Studios - Kai Tak</p>
        <p className="flex gap-2 items-center"><FcGoogle/> Google</p>
        <div className="w-full h-64">
          <img src={info.pic} alt="Place" className="w-full h-full" />
        </div>
      </div>
    )
}
function Reviews() {
  const reviewsInfo=[
    {
      person:"Olga",
      pic:"images/Olga.webp"
    },
    {
      person:"Mansa",
      pic:"images/Mansa.webp"
    },
    {
      person:"Sam",
      pic:"images/Sam.webp"
    },
  ]
  return (
    <section className="flex flex-col gap-3 px-3 py-10 md:px-10 lg:px-40">
      <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
        <div>
            <StandardHeader text='TESTIMONIALS'/>
            <h4 className="mt-3 text-2xl font-bold font-serif">What people say about us</h4>
        </div>
        <button className="text-white bg-Primary p-2 w-fit self-end rounded-md md:self-center">See All</button>
      </div>
      <div className="flex gap-5 justify-center flex-wrap lg:flex-nowrap">
        {
          reviewsInfo.map(review=>{
            return <ReviewCard key={uuid()} info={review}/>
          })
        }
      </div>
    </section>
  )
}
export default Reviews;
