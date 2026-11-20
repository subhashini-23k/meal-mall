import Logo from "../../assets/icons/logo.webp";
import Input from "../common/input";
export const Topbar = () => {
    return (
        <div className=" bg-white border-1 border-slate-500 shadow-lg py-2 pl-70 px-10 h-16 flex items-center justify-between fixed w-full z-0">

            <div className="">
                <h1>
                    Dashboard
                </h1>

            </div>
            <div className="flex items-center gap-10">
                <div>
                    <Input/>
                </div>
                
                <div className="bg-white rounded-full p-2 shadow-md">
                    <img className="h-10 w-10" src={Logo} alt=""/>
                    
                </div>
            </div>
        </div>
    );
};

