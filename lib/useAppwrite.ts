import { useEffect, useState } from "react";
import { getAllEvents } from "./appwrite";
import { Alert } from "react-native";

const useAppwrite = (fn) =>{
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        setisLoading(true);
  
        try {
          const response = await fn();
  
          setData(response);
        } catch (error) {
          Alert.alert('Error', error.message)
        }finally{
          setisLoading(false);
        }
      }
  
      fetchData();
    }, []);
  
    return {data}
}
export default useAppwrite;