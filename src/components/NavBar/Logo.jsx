import { Image } from '@chakra-ui/react'
import {React, useState} from 'react'
 
 
export default function Logo (){
 
    return (
        <Image objectFit='cover' boxSize='40px'  src={"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_Unsplash.svg/1024px-Logo_of_Unsplash.svg.png"} alt="Logo" />
    )
}