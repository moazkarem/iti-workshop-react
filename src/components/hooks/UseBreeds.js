import { useCallback, useEffect, useState } from "react"
const locaCash = {}
const UseBreeds = (animal)=>{
 const[breedList , setbreedList] = useState([])
 const fetchBreds = useCallback(async()=>{
    const res = await fetch(`https://pets-v2.dev-apis.com/breeds?animal=${animal}`)
    const json = await res.json();
    locaCash[animal] = json.breeds || []  ;
    setbreedList(locaCash[animal])
} , [animal])
 useEffect(()=>{
    if(!animal){
        setbreedList([])
    }else if (locaCash[animal]){
        setbreedList(locaCash[animal])
    }else{
        fetchBreds()
    }
 } , [animal , fetchBreds])
 return breedList;
}
export default UseBreeds