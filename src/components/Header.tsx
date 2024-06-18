import { Box, HStack, Text } from "@chakra-ui/react";
import InputComponent from "./InputComponent";
import ChangeUnits from "./ChangeUnits";

interface Props {
  onHandleClick: (name: string) => void;
  onClickCel: () => void;
  onClickFar: () => void;
}

const Header = ({ onHandleClick, onClickCel, onClickFar }: Props) => {
  return (
    <HStack padding="16" justifyContent="space-between" alignItems="center">
      <Text fontSize="5xl" fontWeight={"bold"} color="white">
        Weather App
      </Text>
      <Box width="50%">
        <InputComponent onHandleClick={(name) => onHandleClick(name)} />
      </Box>

      <ChangeUnits onClickCel={onClickCel} onClickFar={onClickFar} />
    </HStack>
  );
};

export default Header;
