import { HStack, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <HStack padding="16" justifyContent="space-between">
      <Text fontSize="5xl" fontWeight={"bold"}>
        Weather App
      </Text>
      <Text>Change units component</Text>
    </HStack>
  );
};

export default Header;
