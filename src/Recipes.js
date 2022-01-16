import { useParams } from "react-router-dom";

export default function Invoice() {
  console.log("hree")
  let params = useParams();
  return <h2>Invoice: {params.listname}</h2>;
}