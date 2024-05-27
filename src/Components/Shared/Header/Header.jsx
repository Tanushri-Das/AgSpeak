import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Switch,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("black", "white");

  const handleToggle = () => {
    toggleColorMode();
  };

  return (
    <Box px={10} py={3} boxShadow="lg" bg={bg}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box as="b" fontSize="26px" color={textColor}>
          Orderly
        </Box>
        <Flex alignItems="center">
          <Flex display={{ base: "none", md: "flex" }} alignItems="center">
            <Box mr={4} fontSize="18px" color={textColor}>
              <NavLink to="/">Home</NavLink>
            </Box>
            <Box mr={4} fontSize="18px" color={textColor}>
              <NavLink to="/login">Login</NavLink>
            </Box>
            <Switch
              size="lg"
              colorScheme="teal"
              isChecked={colorMode === "dark"}
              onChange={handleToggle}
            />
          </Flex>
          
          <IconButton
            fontSize="20px"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={onOpen}
          />
        </Flex>
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack align="start">
              <Box fontSize="18px">
                <NavLink to="/" onClick={onClose}>
                  Home
                </NavLink>
              </Box>
              <Box fontSize="18px" mb={2}>
                <NavLink to="/login" onClick={onClose}>
                  Login
                </NavLink>
              </Box>
              <Flex alignItems="center" w="full">
                <Switch
                  size="lg"
                  colorScheme="teal"
                  isChecked={colorMode === "dark"}
                  onChange={handleToggle}
                />
              </Flex>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
