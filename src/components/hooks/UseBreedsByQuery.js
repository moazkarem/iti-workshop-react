import { useQuery } from "react-query"
const fetchAnimal = async ({queryKey})=>{
    const [ , animal] = queryKey
    if(!animal) return []
    const res =await fetch(`https://pets-v2.dev-apis.com/breeds?animal=${animal}`)
    const json = await res.json()
    return json
}
const UseBreedsByQuery = (animal)=>{
return useQuery(['animal' , animal] , fetchAnimal)
}
export default UseBreedsByQuery