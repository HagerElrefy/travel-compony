import { FaTripadvisor } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { BsMailbox2Flag } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import {v4 as uuid} from 'uuid';

function Footer() {
    const quickLinks = ["Contact Us", "Destination", "Home", "Services", "Testimonials"];
    const importantLinks = ["Immigration", "Travel Guide", "Weather", "Work with Us"];
  return (
    <footer>
      <div className="grid grid-cols-1 bg-Secondary gap-5 py-5 px-3 justify-between md:grid-cols-2 md:px-10 lg:px-40 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold md:text-2xl lg:text-3xl font-serif"><span className="text-white">Travel</span><span className="text-Primary">linoo</span></h3>
        <h5 className="flex gap-2 text-lg text-Primary"><FaFacebook/> <FaTripadvisor/> <FaGoogle/></h5>
        </div>
        <div className="flex flex-col gap-2">
            <h4 className="pb-2 font-bold">Quick Links</h4>
            <ul>
                {
                    quickLinks.map(link=>{
                        return <li key={uuid()}><a href="/">{link}</a></li>
                    })
                }
            </ul>
        </div>
        <div className="flex flex-col gap-2">
        <h4 className="pb-2 font-bold">Important Links</h4>
            <ul>
                {
                    importantLinks.map(link=>{
                        return <li key={uuid()}><a href="/">{link}</a></li>
                    })
                }
            </ul>
        </div>
        <div className="flex flex-col gap-2">
            <ul>
                <li><a className="flex gap-2 items-center m-1" href="/"> <FiMapPin/> ABC, ABC City </a></li>
                <li><a className="flex gap-2 items-center m-1" href="/"> <FaPhoneAlt/> +977 9876789076 </a></li>
                <li><a className="flex gap-2 items-center m-1" href="/"> <BsMailbox2Flag/> G.P.O. Box 9057 </a></li>
                <li><a className="flex gap-2 items-center m-1" href="/"> <CiMail/> Travellinoo@gmail.com </a></li>
            </ul>
        </div>
      </div>
      <p className="text-center py-5 bg-Background">Copyright © 2023. Travellinoo. All rights reserved.</p>
    </footer>
  )
}
export default Footer;
