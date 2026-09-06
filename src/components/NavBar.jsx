import {Input} from '@heroui/react'

function NavBar(){
    return(
        <>
          <nav className='bg-amber-300 flex flex-row gap-2 justify-center items-center p-5 '>
            <p className='font-extrabold'>Cyber</p>
            <Input type='search' placeholder='Rechercher' className='h-13'></Input>
            <a href="" className=''>Home</a>
            <a href="">A propos</a>
            <a href="">Contactez-Vous</a>
            <a href="">Blog</a>
          </nav>
        
        </>
    )
}

export default NavBar