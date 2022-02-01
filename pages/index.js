import Link from 'next/link'
//import { got } from 'got';
import { useEffect, useState } from "react";
//import styles from '../styles/Home.module.css'
const axios = require('axios').default;

import Prices from '../components/prices'

// async function getData(request){
//   try{
//     const response = await axios.get(request);
//     return response.data
//   }catch(error){
//     console.log(error)
//   }
// }

// const [prices, setPrices] = useState([]);
//
// const api_request = 'https://api.coingecko.com/api/v3/simple/price?ids=drip-network%2Cpig-finance%2Cdoggy-swap%2Crevolution%2Cgrimtoken&vs_currencies=usd'
//
//
// fetchData();




function Home() {

  const [pricelist, addPrices]  = useState('')

  const api_request = 'https://api.coingecko.com/api/v3/simple/price?ids=drip-network%2Cpig-finance%2Cdoggy-swap%2Crevolution%2Cgrimtoken&vs_currencies=usd'

  // async function fetchData(){
  //   const response = await axios.get(api_request).then((res)  =>{
  //     return res.data
  //   });
  //   console.log(response)
  //   addPrices(response);
  // }

  useEffect(() => {
    console.log("test");
    getData();
    console.log("test");
  }, [])

  const getData = () => {
    axios.get('https://api.coingecko.com/api/v3/simple/price?ids=drip-network%2Cpig-finance%2Cdoggy-swap%2Crevolution%2Cgrimtoken&vs_currencies=usd').then((res) =>{
      const allprices = res.data;
      addPrices(allprices);
    }).catch(error => console.error(error));
  };

  return (
    <div  className="maincontainer">
      {/* Header */}
      <header className="">
        <h1>Test</h1>
        <Prices props={pricelist} />
      </header>
      {/* Section 1 - Prices */}
      <section  className="">
      </section>
      {/* Section 2 -  DAO Member Breakdown */}
      <section  className="">
      </section>
      {/* Section 3 -  BR34P Token, Reqs with Citadel */}
      <section  className="">
      </section>
      {/* Section 4 -  DRIP with wallets, max payout, and tax rate */}
      <section  className="">
      </section>
      {/* Section 5 -  DRIP holders with info */}
      <section  className="">
      </section>
      {/* Section 6 -  Breakdown of NDV with indicators */}
      <section  className="">
      </section>
      {/* Section 7 -  Show Deadwallets w/t Health */}
      <section  className="">
      </section>
      {/* Section 8 -  Reward Wallet Payouts */}
      <section  className="">
      </section>
      {/* Section 9 - TBD (MAXIMUM Runway Time)*/}
      <section  className="">
      </section>
      {/* Section 10 -  DCA Goal Calculator */}
      <section  className="">
      </section>
      <footer className="">
      </footer>
    </div>
  )
}

export default Home
