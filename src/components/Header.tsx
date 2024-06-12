import { HStack, Text } from "@chakra-ui/react";
import InputComponent from "./InputComponent";

const Header = () => {
  return (
    <HStack padding="16" justifyContent="space-between" alignItems="center">
      <Text fontSize="5xl" fontWeight={"bold"} color="white">
        Weather App
      </Text>
      <InputComponent />
      <Text>Change units component</Text>
    </HStack>
  );
};

export default Header;
