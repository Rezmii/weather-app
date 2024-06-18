import { HStack, Button } from "@chakra-ui/react";

interface Props {
  onClickCel: () => void;
  onClickFar: () => void;
}

const ChangeUnits = ({ onClickCel, onClickFar }: Props) => {
  return (
    <>
      <HStack spacing="5">
        <Button
          borderRadius="25"
          paddingY="6"
          paddingX="6"
          color="gray.500"
          fontSize={"xl"}
          onClick={onClickCel}
        >
          °C, km/h
        </Button>
        <Button
          borderRadius="25"
          paddingY="6"
          paddingX="6"
          color="gray.500"
          fontSize={"xl"}
          onClick={onClickFar}
        >
          °F, mph
        </Button>
      </HStack>
    </>
  );
};

export default ChangeUnits;
