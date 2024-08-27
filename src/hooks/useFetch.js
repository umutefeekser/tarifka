import axios from "axios"
import { useEffect, useState } from "react"

function useFetch(api){

    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

  useEffect(()=>{
    axios.get(`https://www.themealdb.com/api/json/v1/1/${api}`)
    .then(res => {
      setData(res.data)
      setLoading(false)
    })
    .catch(err => {
      console.error(err)
      setLoading(false)
      setError(err.message)
    })
  },[])

    return {error, loading, data}
}

export default useFetch