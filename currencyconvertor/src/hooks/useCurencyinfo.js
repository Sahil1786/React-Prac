import { useEffect,useState } from "react";



function UseCurencyInfo(currency){
    const [data,setdata]=useState({})
    useEffect(()=>{ // USE FOR RENDER PERPSOE
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        ).then((res)=>res.json())
        .then(()=>setdata(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data;
}

export default UseCurencyInfo; //METHOD RETURN

// CUSTOM HOOKS 