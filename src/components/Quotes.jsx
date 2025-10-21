import React from 'react'

const Quotes = () => {
  return (
    <div className='flex uppercase quotes text-center text-[20px] md:text-[80px] text-[#E9E3DC] flex-col justify-center items-center'>
        <div className='md:p-20 p-8 border-b-2 border-[#ffffff]'>
            Code is not just <span>written</span>, it’s <span>crafted</span> — line by line, logic by logic.
            <p>– Linus Torvalds</p>
        </div>
        <div className='md:p-20 p-8 border-b-2 border-[#ffffff]'>
            React makes it <span>dynamic</span>, Node makes it <span>alive</span>, MongoDB makes it <span>grow</span>.
            <p>– Brad Traversy</p>
        </div>
        <div className='md:p-20 p-8 border-b-2 border-[#ffffff]'>
            A developer’s best design is <span>invisible</span> — it just works <span>beautifully.</span>
            <p>– Don Norman</p>
        </div>
    </div>
  )
}

export default Quotes


// #FF2226, #1E1E1E, #E9E3DC, #121212, #959595, #db0306, #FFFFFF