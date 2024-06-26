import { Button, HStack, Input } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onHandleClick: (name: string) => void;
}

const InputComponent = ({ onHandleClick }: Props) => {
  const countryRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (countryRef.current !== null) {
      onHandleClick(countryRef.current.value);
      countryRef.current.value = "";
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };
  return (
    <>
      <HStack alignItems="center" spacing={3}>
        <Input
          ref={countryRef}
          padding="6"
          borderRadius="25"
          variant="filled"
          placeholder="Search city"
          fontSize="2xl"
          _focus={{
            bg: "gray.200",
            borderColor: "blue.400",
          }}
          onKeyDown={handleKeyDown}
        />
        <Button
          borderRadius="25"
          paddingY="6"
          paddingX={8}
          color="gray.500"
          fontSize={"xl"}
          onClick={handleClick}
        >
          Search
        </Button>
      </HStack>
    </>
  );
};

export default InputComponent;
