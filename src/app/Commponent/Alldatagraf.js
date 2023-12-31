"use client";
import {ResponsiveContainer,LineChart,Line,XAxis,YAxis} from 'recharts'
import { useEffect, useState } from "react";

const Alldatagraf = ({ detahero }) => {
const [selectvalue,setSelectvalue]=useState("all")
const [gdata,setGdata] = useState([""])

  useEffect(() => {
    const options = {
      method: "GET",
      headers: { "X-API-KEY": "ttjSdxfaNuvIJkjnRv/JDv436WUcXfC/t+uRulBE6O8=" },
    };

    fetch(
      `https://openapiv1.coinstats.app/coins/${detahero.id}/charts?period=${selectvalue}`,
      options
    )
      .then((response) => response.json())
      .then((chartdata) => {
        setGdata(chartdata)
      })
      
  }, [detahero.id,selectvalue]); 





  const getdataselect = (e)=>{
    setSelectvalue(e.target.value)
  }
  return (
    <>
      <div className="w-auto h-auto  flex justify-center mt-7">
        <div className="w-[80%] h-auto flex-col ">
          <div className=" xl:w-[800px] md:w-[600px] lg:w-[700px] h-auto flex justify-between">
            <h1 className="xl:text-2xl sm:text-2xl text-lg font-bold">
              {detahero.name} price chart ({detahero.symbol})
            </h1>

            <select onChange={(e)=>getdataselect(e)}>
              <option value="all">all</option>
              <option value="24h">24h</option>
              <option value="1w">1w</option>
              <option value="1m">1m</option>
              <option value="3m">3m</option>
              <option value="6m">6m</option>
              <option value="1y">1y</option>
            </select>
          </div>

          <div className="xl:w-[800px] md:w-[600px] lg:w-[700px] h-auto  mt-9 border-solid border-2 border-gray-100 rounded-sm">
         
             <ResponsiveContainer width="100%" aspect={1.5} className="w-8">
                <LineChart data={gdata}  className=''>
                  <XAxis dataKey="0" interval={'preserveStartEnd'} />
                  <YAxis dataKey="1" className='h-28'/>
                   <Line type="monotone"  dataKey="1" stroke='orange' dot={false}/>
                </LineChart>
             </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alldatagraf;
