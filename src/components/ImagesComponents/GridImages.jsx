import { Box, Center } from '@chakra-ui/react'
import {React, useState} from 'react'
import ImageComponent from './ImageComponent';


const images = [
    {
        imageUrl:  "https://images.unsplash.com/photo-1658997923798-54a587ec0e89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        label: "Lorem ipsum dolor sit amet, consectetur adip euismod, sed do eiusmod tempor incididunt ut",
    },
    {
        imageUrl:  "https://images.unsplash.com/photo-1659001308724-96e4c23115d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        label: "Esto es una description larga de una image",
    }
 ,
   
  ];
 
export default function GridImages (){
 
    return (
        <Center>
        <Box padding={4}
        w="100%"
        maxW={"92%"}
        sx={{columnCount:[1,2,3], columnGap: "1rem"}}>
            {images.map((image,i)=>(
                <ImageComponent imageUrl={image.imageUrl} label={image.label}/>
            ))}

        </Box>
        </Center>
    )
}