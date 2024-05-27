import React from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.username && data.password) {
      localStorage.setItem("authenticated", "true");
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <Flex minH="100vh" align="center" justify="center">
      <Box
        maxW="md"
        width="100%"
        p={6}
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        bg="white"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl id="username" mb={4}>
            <FormLabel fontSize="20px">Username</FormLabel>
            <Input type="text" {...register("username")} />
          </FormControl>
          <FormControl id="password" mb={4}>
            <FormLabel fontSize="20px">Password</FormLabel>
            <Input type="password" {...register("password")} />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">
            Login
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;
