import Link from 'next/link'
import { useEffect, useState } from "react";
const axios = require('axios').default;
//import {PrismaClient} from "@prisma/client";
//const prisma = newPrismaClient();

// Components
import Price from "../components/prices"

function Home() {

  return (
    <div  className="maincontainer">
      {/* Header */}
      <header className="box-row">
        <Price tokenName={'DRIP'} tokenIcon={'/drip_logo.svg'} tokenPrice={'129.00'}/>
        <Price tokenName={'BR34P'} tokenIcon={'/drip_logo.svg'} tokenPrice={'0.00'}/>
        <Price tokenName={'RAKE'} tokenIcon={'/drip_logo.svg'} tokenPrice={'14.88'}/>
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

// export async function getServerSideProps(){
//   const allprices = await prisma.token_info.findMany();
//
//   return {
//     props: allprices
//   };
// }
