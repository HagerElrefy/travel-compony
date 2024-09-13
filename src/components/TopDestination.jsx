import { useState } from 'react';
import {v4 as uuid} from 'uuid';
function TopDestinationBtn({text, func, selected}) {
    return (
        <button className={`p-1 rounded-full border border-Primary ${selected === text && 'text-white bg-Primary'} `} onClick={func}>{text}</button>
    )
}
function TopDestinationImage({image}) {
    return(
        <div className='relative w-full h-full'>
            <img src={image.path} alt={image.caption} className='w-full h-full'/>
            <div className='absolute bottom-4 left-4 text-white'>
                <h6>{image.country}</h6>
                <h6>{image.caption}</h6>
            </div>
        </div>
    )
}

function TopDestination() {
    const topDestinationCountries=['All', 'Bangladesh', 'Bhutan', 'China', 'India', 'Nepal', 'Tibet'];
    const topNepalPlaces = [
        {
            path:"images/Dolpo-&-Western-Nepal.webp",
            country:"Nepal",
            caption:"Dolpo & Western Nepal"
        },
        {
            path:"images/Upper-Mustang.webp",
            country:"Nepal",
            caption:"Upper Mustang"
        },
        {
            path:"images/Mt.Everest-Region.webp",
            country:"Nepal",
            caption:"Mt. Everest Region"
        },
        {
            path:"images/Kathmandu-Valley.webp",
            country:"Nepal",
            caption:"Kathmandu Valley"
        },
        {
            path:"images/White-Water-Rafting.webp",
            country:"Nepal",
            caption:"White Water Rafting"
        },
        {
            path:"images/Annapurna-Region.webp",
            country:"Nepal",
            caption:"Annapurna Region"
        }
    ]
    const [selectCountry, setSelectCountry]= useState("Nepal");
    const handleSelect = (e)=>{
        setSelectCountry(e.target.innerText);
    }
  return (
    <section className="py-10 flex flex-col gap-10">
      <div className="flex flex-col gap-3 px-2 md:px-0 md:items-center ">
        <h4 className="font-bold text-2xl font-sans">Top Destinations</h4>
        <p className="text-sm">Mauris amet netus dictumst ut mi. Fermentum sit arcu ut sodales risus eu sit bibendum.</p>
        <div className="flex flex-col gap-2 md:flex-row">
            {topDestinationCountries.map(country=>{
                return <TopDestinationBtn text={country} key={uuid()} func={handleSelect} selected={selectCountry}/>
            })}
        </div>
      </div>
      <div className='grid h-2/3 gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-3 md:px-10 lg:px-40'>
            <div className='w-full h-full'><TopDestinationImage image={topNepalPlaces[0]}/></div>
            <div className='w-full h-full md:row-span-2'><TopDestinationImage image={topNepalPlaces[2]}/></div>
            <div className='w-full h-full lg:col-span-2'><TopDestinationImage image={topNepalPlaces[3]}/></div>
            <div className='w-full h-full md:col-span-2 lg:col-span-1'><TopDestinationImage image={topNepalPlaces[1]}/></div>
            <div className='w-full h-full'><TopDestinationImage image={topNepalPlaces[4]}/></div>
            <div className='w-full h-full'><TopDestinationImage image={topNepalPlaces[5]}/></div>
      </div>
    </section>
  )
}
export default TopDestination;
