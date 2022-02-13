import Image from 'next/image'

export default function Prices({tokenName, tokenIcon, tokenPrice}){
  return(
    <>
      <div  className='price-box'>
        <div  classname='box-row'>
          <h2 className='token-name'>${tokenName}</h2>
        </div>
        <div  className='box-row'>
          <div>
            <Image src={tokenIcon} width={19} height={23} alt="Token Icon" />
          </div>
          {/* Percentage Goes Here*/}
          <h3 className='token-percent'>+0.1%</h3>
        </div>
        <div  classname='box-row'>
          <h2>${tokenPrice}</h2>
        </div>
      </div>
    </>
  )
}
