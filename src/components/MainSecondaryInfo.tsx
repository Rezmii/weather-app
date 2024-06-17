import { HStack, Text, VStack } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  textInfo: string;
  info: string | number | undefined;
  IconComponent: IconType;
  iconSize?: number;
}

const MainSecondaryInfo = ({
  textInfo,
  info,
  IconComponent,
  iconSize = 60,
}: Props) => {
  return (
    <HStack>
      <IconComponent size={iconSize} color="white" />
      <VStack alignItems="flex-start">
        <Text color="white" fontSize="4xl">
          {textInfo}
        </Text>
        <Text color="white" fontSize="2xl">
          {info}
        </Text>
      </VStack>
    </HStack>
  );
};

export default MainSecondaryInfo;
