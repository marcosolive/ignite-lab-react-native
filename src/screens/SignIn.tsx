import { View, Text } from "react-native";
import { useState } from 'react'
import { Heading, VStack, Icon, useTheme } from 'native-base'
import React from "react";
import Logo from '../assets/logo_primary.svg'
import {Envelope, Key} from 'phosphor-react-native'
 
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export function SignIn(){

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const {colors} = useTheme()

    return(
        <VStack flex={1} alignItems="center" bg={"gray.600"} px={8} pt={24}>
            <Logo />
            <Heading color="gray.100" mt={20} mb={6}>Acesse sua conta</Heading>
            <Input placeholder="E-mail" 
            mb={4}
            InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4}/>}
            onChangeText={setName}
            />
            <Input placeholder="Senha"
             mb={4}
             InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4}/>}
             secureTextEntry
             onChangeText={setPassword}
            />

            <Button title='Entrar' w='full'/>
        </VStack>
    )
}