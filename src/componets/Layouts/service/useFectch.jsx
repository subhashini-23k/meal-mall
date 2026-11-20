import axios from "axios";
import { useEffect, useState } from "react";

export default function Usefectch() {

   const [data, setData] = useState([])

   useEffect(() =>{
        const fetchMeal = async () => {
                const response = await axios.get("https://dummyjson.com/products/category/groceries")
                setData(response.data.products)
        }
        fetchMeal()

   },[])

   return {data}
}
