import Image from 'next/image'

export default function Prices({token_info}){
  return(
    <>
      <div  className='price-box'>
        <div  className='box-row'>
          <h2 className='token-name'>${token_info.name}</h2>
        </div>
        <div  className='box-row'>
          <div>
            {/* LOGO should be changed based on name*/}
            <Image src={'/drip_logo.svg'} width={19} height={23} alt="Token Icon" />
          </div>
          {token_info.price_change > 0 ? (<h3 className='token-percent'>{token_info.price_change}%</h3>) : (
            <h3 className='token-percent negative'>{token_info.price_change}%</h3>
          )}
        </div>
        <div  className='box-row token-price'>
          <h2>${token_info.price}</h2>
        </div>
      </div>
    </>
  )
}
