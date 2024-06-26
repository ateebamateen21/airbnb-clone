"use client";
import Container from "../Container"
// import Logo from "./Logo"
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = ()=>{
    return(
        <div className="fixed w-full bg-white z-10 shadow-sm   ">
            
            <div className="py-6 border-b-[1px]">
                
                <Container>
                    <div className="  flex flex-row items-center justify-between gap-3 md:gap-0">
                        {/* <Logo/> */}
                        <h1 className="font-bold tracking-wider text-2xl text-red-500 ">AirBnb</h1>
                        <Search/>
                        <UserMenu/>
                    </div>
                
                </Container>
            </div>
           
        </div>
    )
}

export default Navbar;