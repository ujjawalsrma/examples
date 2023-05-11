import { useState,useEffect } from "react";


// let [data, setData] = useState([]);
//  let [loading, setLoading] = useState(true);
 
 const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';
 const options = {
   method: 'GET',
  //  headers: {
  //    'X-RapidAPI-Key': '9c5656d442mshba4efc449023615p1e2d36jsn614b667c271b',
  //    'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
  //  }
 };

//  let getData = async () => {
//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     setData(result);
    
//     setLoading(false);
//   } catch (error) {
//     console.error(error);
//   }
//  }

let home = ({data}) => {
 
console.log(data);
  // useEffect(() => {
  //  getData();
   
  // },[]);

  // if(loading){
  //   return <div>Loading...</div>
  // }

return (
  <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        
        <th>Name</th>
        <th>24H Change</th>
        <th>price_change_24h</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
   {data.map((data)=>{

   

   return(
    <>
   <tr>
       
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={data.image} alt="Avatar " />
              </div>
            </div>
            <div>
              <div className="font-bold">{data.name}</div>
              <div className="text-sm opacity-50">{data.symbol}</div>
            </div>
          </div>
        </td>
        <td>
          {data.high_24h}
          <br/>
          <span className="badge badge-ghost badge-sm">{data.low_24h}</span>
        </td>
        <td>{data.price_change_24h}</td>
        <th>
          <button className={data.price_change_24h < 0 ? "text-red-300" :"text-green-600"}>{data.current_price}</button>
        </th>
      </tr>
    
    </>
    
 
)
   }
   )}
   </tbody>
   </table>
  </div>
  
);
   


}
export default home;


export async function getServerSideProps() {
  // Fetch data from external API
  let data;
  try {
    const response = await fetch(url, options);
     data = await response.json();
    // setData(result);
    
    // setLoading(false);
  } catch (error) {
    console.error(error);
  }
 
  // Pass data to the page via props
  return { props: { data } };
}
