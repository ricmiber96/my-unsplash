import { SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Flex, HStack, Input, InputGroup, InputLeftElement, Text} from '@chakra-ui/react'
import {React, useState} from 'react'
import AddButton from './AddButton'
import Logo from './Logo'
 
 
export default function NavBar (){
 
    return (
        <>
        <Box bg={'red.300'}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-around'}>
        <HStack spacing={6} alignItems={'center'}>
                <Logo/>
                <InputGroup>
                    <InputLeftElement
                    children={<SearchIcon  w={5} h={5} color='gray.300'/>}
                    />
                    <Input size='lg' type="text" placeholder="Search by name"  _placeholder={{ opacity: 1, color: 'gray.300' }}/>
                </InputGroup>
        </HStack>
        <Flex alignItems={'center'}>
                <AddButton>Button</AddButton>
        </Flex>
        </Flex>
        </Box>
        </>
    )
}