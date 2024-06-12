import { Box, HStack, Text } from "@chakra-ui/react";
import InputComponent from "./InputComponent";

interface Props {
  onHandleClick: (name: string) => void;
}

const Header = ({ onHandleClick }: Props) => {
  return (
    <HStack padding="16" justifyContent="space-between" alignItems="center">
      <Text fontSize="5xl" fontWeight={"bold"} color="white">
        Weather App
      </Text>
      <Box width="50%">
        <InputComponent onHandleClick={(name) => onHandleClick(name)} />
      </Box>

      <Text>Change units component</Text>
    </HStack>
  );
};

export default Header;
