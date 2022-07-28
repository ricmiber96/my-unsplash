import { Box, Center, Container } from '@chakra-ui/react'
import {React, useState} from 'react'
import GridImages from '../components/ImagesComponents/GridImages'
import NavBar from '../components/NavBar/NavBar'
 
 
export default function Main (){
 
    return (
      <>
        <NavBar/>
        <GridImages/>
      </>
                    
        
    )
}