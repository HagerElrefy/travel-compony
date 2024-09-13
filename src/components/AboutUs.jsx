import StandardHeader from "./StandardHeader";
import {v4 as uuid} from 'uuid';
function AboutBages({data}) {
    return(
        <div className="bg-white border border-Primary rounded-md p-3 flex flex-col gap-1">
            <h5 className="text-Primary font-bold text-2xl font-sans">{data.head}</h5>
            <p className="text-gray-600 font-thin">{data.text}</p>
        </div>
    )
}
function AboutUs() {
    const bagesData=[
        {
            head:"12K+",
            text:"Success Journey"
        },
        {
            head:"16+",
            text:"Awards Winning"
        },
        {
            head:"20+",
            text:"Years Of Experience"
        },
        
    ]
  return (
    <section className="relative py-10">
      <div className="absolute top-0 left-0 h-full w-2/3 md:w-1/4">
        <img src="images/AboutDecore.webp" className="w-full h-full" alt="about-us-decore" />
      </div>
      <div className="flex flex-col gap-10 px-3 md:px-0 md:ps-10 lg:ps-40 md:flex-row">
        <div className="flex flex-col gap-2 flex-1 z-10 justify-center">
            <StandardHeader text={"About us"}/>
            <h4 className="font-bold text-2xl">Our Stories Have Adventures</h4>
            <p className="font-thin">Commodo amet dolor sed ultricies mi feugiat ligula. Auctor ut non sed viverra varius nibh. Fringilla eget dictum hendrerit sit nisi massa suscipit.</p>
            <div className="flex flex-col gap-2 md:flex-row">
                {
                    bagesData.map(bage=>{
                        return <AboutBages key={uuid()} data={bage}/>
                    })
                }
            </div>
            <button className="bg-Primary text-white p-2 rounded-md w-fit">Learn More</button>
        </div>
        <div className="w-full h-full flex-1 z-10 md:w-1/2">
                <img src="images/Aboutus.webp" className="h-full w-full" alt="travel" />
        </div>
      </div>
    </section>
  )
}
export default AboutUs;
