import { Button, HStack, Input } from "@chakra-ui/react";

const InputComponent = () => {
  return (
    <>
      <HStack alignItems="center">
        <Input
          padding="6"
          borderRadius="25"
          variant="filled"
          placeholder="Search city"
          fontSize="2xl"
          _focus={{
            bg: "gray.200",
            borderColor: "blue.400",
          }}
        />
        <Button
          borderRadius="25"
          paddingY="6"
          paddingX={8}
          color="gray.500"
          fontSize={"xl"}
        >
          Search
        </Button>
      </HStack>
    </>
  );
};

export default InputComponent;
