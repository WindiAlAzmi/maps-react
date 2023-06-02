import { DataService } from "../../../data/service-data"

export default function ProductPagination() {

  const itemProduct = DataService();

    
  return (
    <div>
       <div>ini data product</div>
       <div>{itemProduct?.map((item, index) => {
        return <div key={index}>{item.title}</div>
       })}</div>
    </div>
  )
}
