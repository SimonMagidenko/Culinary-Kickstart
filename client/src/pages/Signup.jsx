import { useState } from 'react';
// import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

import Auth from '../utils/auth';
import { handleError } from '@apollo/client/link/http/parseAndCheckHttpResponse';


const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false)
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'} textAlign={'center'}>
          Sign up
        </Heading>

        <Text fontSize={'lg'} color={'gray.600'}>
          to enjoy all of our cool features ✌️
        </Text>

      </Stack>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}>

        <Stack spacing={4}>

          <FormControl id="username" isRequired>
            <FormLabel>Username</FormLabel>
            <Input onChange={handleChange} value={formState.username} name="username" type="text" />
          </FormControl>


          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input onChange={handleChange} value={formState.email} name="email" type="email" />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input onChange={handleChange} value={formState.password} name="password" type={showPassword ? 'text' : 'password'} />
              <InputRightElement h={'full'}>
                <Button
                  variant={'ghost'}
                  onClick={() => setShowPassword((showPassword) => !showPassword)}>
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Stack spacing={10} pt={2}>
            <Button onClick={handleFormSubmit}
              loadingText="Submitting"
              size="lg"
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Sign up
            </Button>
          </Stack>

          <Stack pt={6}>
            <Text align={'center'}>
              Already a user? <Link color={'blue.400'}>Login</Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Signup;
