"use client";
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import airbnblogo from "@/assets/images/airbnblogo.png"
const Logo = ()=>{

    return(
        <Image alt="logo" className='hidden md:block cursor-pointer'
        height="100"
        width="150"
        src={airbnblogo}/>
    )
}

export default Logo;