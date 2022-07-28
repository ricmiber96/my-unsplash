import { Box, Image, Text } from '@chakra-ui/react'
import {React, useState} from 'react'
import '../../styles/imageStyle.css'
 
 
export default function ImageComponent ({imageUrl, label}){
 
    return (
        <Box w={"100%"} className="image-container">
            <Image src={imageUrl} w="100%" borderRadius="xl"  title="Smiley face"/>
            <Text fontSize='2xl' className="text-image">{label}</Text>  
        </Box>

       
    )
}