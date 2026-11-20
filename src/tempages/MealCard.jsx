import Card from "../componets/common/Card";
import Input from "../componets/common/input";
import Usefectch from "../componets/Layouts/service/useFectch";

export function Mealcard() {
    const { data } = Usefectch("https://dummyjson.com/products/category/groceries",);
    console.log("Response:", data);

    return (
        <div>
            <div className="flex items-center justify-between ">
              <div> <h1 className="text-3xl font-bold text-orange-500 md:text-blue-500 lg:text-red-500">List of meals</h1></div> 
                

                <div><Input /></div>

                
            </div>
            <div className="grid grid-cols-1 md:grid.cols-2 lg:grid-cols-3 gap-x-3 gap-y-6 mt-5">
                {
             data.map((product) => (
        <Card
            key={product.id}
            mealName={product.title}
            imgUrl={product.thumbnail}
            description={product.description}
        />
    ))
}
                
                
                </div>  
        </div>
    );
}
