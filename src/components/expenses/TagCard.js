import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CancelIcon from '@mui/icons-material/Cancel';

function TagCard({data}) {
  const handleDelete=()=>{
    
  }
  return (
    <div className='mt-20 ml-20 flex flex-col gap-3 justify-evenly'>
    {data.map((item, index) => (
        <div key={index} className='shadow-lg p-3 flex flex-row gap-2 rounded-xl bg-white w-[50rem] h-[4rem]'>
          <div className='flex flex-row '><h2 className='font-bold mr-2'>{item.expense}</h2>
         
          </div>
          
          <div>{item.amount}<span className='text-primary'><CurrencyRupeeIcon/></span></div>
          <div className='text-sm'>{item.description}</div>
          <div className=''>
            <span className='bg-zinc-300 rounded-lg p-2 text-sm'>{item.tag}</span>
          </div>
          <div className='' onClick={handleDelete}><CancelIcon/></div>
        </div>
      ))}
      </div>
  )
}

export default TagCard