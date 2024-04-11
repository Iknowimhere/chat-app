import React, { useState } from 'react';
import { VStack, Button } from '@chakra-ui/react';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { FormControl, FormLabel } from '@chakra-ui/form-control';

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submithandler = () => {};

  const handleClick = () => setShow(!show);
  return (
    <VStack spacing={'5px'}>
      <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder='Enter your email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? 'text' : 'password'}
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        colorScheme='blue'
        width={'100%'}
        marginTop={'15px'}
        //   onSubmit={submithandler}
      >
        Signup
      </Button>
          <Button
              colorScheme='red'
              width={"100%"}
              marginTop={"10px"}
              onClick={() => {
                  setEmail("guest@example.com")
                  setPassword("123456")
              }}
          >Get Guest User Credentials</Button>
    </VStack>
  );
};

export default Login;
