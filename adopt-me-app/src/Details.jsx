import { useParams } from "react-router-dom"




const Detail = () => {
  const {id} = useParams();
  return (
    <h2>{id}</h2>
  )
}

export default Detail