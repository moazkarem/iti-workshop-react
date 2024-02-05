import { useQuery } from "react-query"
const fetchData = async({queryKey})=>{
    const[ ,id] = queryKey
    const res = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`)
    const json = await res.json()
    return json
}
const UseDetailsByQuery = (id)=>{


return  useQuery(['pet' , id] , fetchData)
  
}

export default UseDetailsByQuery