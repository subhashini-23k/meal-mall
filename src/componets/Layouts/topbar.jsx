import Logo from "../../assets/icons/logo.webp";
export const Topbar = () => {
    return (
        <div className=" bg-white border-1 border-slate-500 shadow-lg py-2 px-10 h-16 flex items-center justify-between ">

            <div>
                <h1>
                    Dashboard
                </h1>

            </div>
            <div className="flex items-center gap-10">
                <input
                    type="text"
                    placeholder="🔍 Search Pages..."
                    className="w-80 px-4 py-3 bg-white border border-gray-300 rounded-lg
  text-sm text-gray-700 placeholder-gray-400
  outline-none focus:ring-2 focus:ring-orange-400
  focus:border-orange-400 shadow-sm transition"
                />
                <div className="bg-white rounded-full p-2 shadow-md">
                    <img className="h-10 w-10" src={Logo} alt=""/>
                    
                </div>
            </div>
        </div>
    );
};

