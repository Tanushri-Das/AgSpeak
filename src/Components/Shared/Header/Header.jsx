import React from "react";
import { Box, Switch, useColorMode } from "@chakra-ui/react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const handleToggle = () => {
    toggleColorMode();
  };

  return (
    <Box
      p={4}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>Header</Box>
      <Switch
        colorScheme="teal"
        isChecked={colorMode === "dark"}
        onChange={handleToggle}
      />
    </Box>
  );
};

export default Header;
