import React from 'react'
import Button from '../../components/Button/Button'

export default function Contacts() {
     return (
     <div id='contacts' className='pb-[70px] flex flex-col justify-center items-center'>
          <h3 className="font-bold text-blue text-lg  mb-20">Contacts</h3>
          <Button link={'mailto:tarasiy73@gmail.com'} color={'blue'} children={'Email me'}/>
     </div>
     )
}
