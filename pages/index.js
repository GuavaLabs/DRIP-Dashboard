import Link from 'next/link'
import { useEffect, useState } from "react";
const axios = require('axios').default;
//import {PrismaClient} from "@prisma/client";
//const prisma = newPrismaClient();

// Components
import Price from "../components/prices"

function Home({price_data}) {

  return (
    <div  className="main-container">
      {/* Header is in _app.js*/}

      {/* Section 1 - Prices */}
      <section  className="box-column">
        <div  className="header-h1">
          <h1>Token Prices</h1>
        </div>
        <div  className="box-row">
          {price_data.map(token_info => (<Price token_info={token_info} />))}
        </div>
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

export async function getStaticProps() {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=drip-network%2C%20pig-finance%2C%20doggy-swap%2C%20revolution%2C%20grimtoken&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`)
  const data = await res.json()

  let price_data = []

  for(let i = 0; i < data.length; i++){

    let token_info = {}

    token_info['name'] = data[i].symbol;
    token_info['price'] = data[i].current_price;
    token_info['price_change'] = data[i].price_change_percentage_24h_in_currency.toFixed(2);

    price_data.push(token_info)
  }

  return {
    props: { price_data },
  }
}
