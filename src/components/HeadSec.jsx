import StandardHeader from './StandardHeader';
import { IoIosSend } from "react-icons/io";

function FormInput({inputName ,inputType ,inputPlaceholder}) {
    return(
        <div className='relative'>
            <label htmlFor={inputName} className='absolute font-bold text-sm -top-2.5 z-20 bg-white  md:px-1 left-2 w-fit'>{inputName}</label>
            <input type={inputType} className='border p-2 md:p-3 rounded-md border-black' name={inputName} placeholder={`${inputPlaceholder && inputPlaceholder}`}/>
        </div>
    )
}
function HeadSec() {
    return (
        <section className="w-full h-fit bg-cover flex flex-col pt-28 gap-5 pb-10 px-2 md:px-10 lg:px-40" style={{backgroundImage:"url('/images/Hero.png')"}}>
                <StandardHeader text={"Best Destinations around the world"}/>
                <div className='text-2xl font-bold font-serif md:text-4xl md:w-1/2 lg:text-5xl '>
                    <span className='text-white'>Travel,</span>
                    <div className='relative inline-block w-fit h-fit'>
                        <span className='text-Primary'>enjoy</span>
                        <img src="images/Decore.png" alt="decore" className='absolute top-full left-0 w-full' />
                    </div>
                    <span className='text-Primary block'>& live a new full life</span>
                </div>
                <p className='text-white font-thin lg:w-1/2'>Magna magna lectus massa gravida egestas neque eu. Neque tortor tortor eu praesent tempor. Dui sodales magnis nisi morbi proin tempor faucibus neque placerat.</p>
                <form className='bg-white rounded-2xl px-2 py-5 self-center items-center md:px-5 w-fit flex flex-col gap-5 md:self-start'>
                    <div className='flex flex-col gap-5 md:flex-row'>
                        <FormInput inputName={"Destination"} inputType={"text"} inputPlaceholder={"Annapurna Region"}/>
                        <FormInput inputName={"Depart- Return"} inputType={"text"} inputPlaceholder={"07 Nov 22 - 13 Nov 22"}/>
                        <FormInput inputName={"Number of travellers"} inputType={"text"} inputPlaceholder={"1 Traveller"}/>
                    </div>
                    <button className='self-end text-white font-bold bg-Primary p-3 flex gap-1 items-center rounded-md'><IoIosSend/> Show Result</button>
                </form>
        </section>
    );
}
export default HeadSec;