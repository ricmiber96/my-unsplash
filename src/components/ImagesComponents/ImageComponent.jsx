import { Image } from '@chakra-ui/react'
import {React, useState} from 'react'
 
 
export default function ImageComponent ({imageUrl}){
 
    return (
        <Image src={imageUrl} w="100%" borderRadius="xl" m={6}/>
    )
}