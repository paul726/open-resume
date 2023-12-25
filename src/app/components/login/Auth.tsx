// components/AuthPage.tsx
import { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { Button, Input, VStack, Box, Heading, FormControl, FormLabel } from '@chakra-ui/react';
import { HaveAnAccount } from './HaveAnAccount';

const fetchUser = async (email: string) => {
  // API call to fetch user details by email
};

const registerUser = async (userData: any) => {
  // API call to register a new user
};

const loginUser = async (userData: any) => {
  // API call to login a user
};

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { data: user } = useQuery(['user', email], () => fetchUser(email));

  const registerMutation = useMutation(registerUser);
  const loginMutation = useMutation(loginUser);

  const handleRegister = () => {
    registerMutation.mutate({ email, password });
  };

  const handleLogin = () => {
    loginMutation.mutate({ email, password });
  };

  return (
    <Box p={8} maxW="md" borderWidth={1} borderRadius="lg">
      <Heading as="h2" size="xl">Login</Heading>
      <HaveAnAccount className="" spanClassName={""} text='' text1=''/>
      <VStack spacing={4} mt={8}>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={handleRegister}>Register</Button>
      </VStack>
    </Box>
  );
};

export default AuthPage;