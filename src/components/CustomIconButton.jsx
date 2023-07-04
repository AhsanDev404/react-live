import { IconButton } from "@chakra-ui/react";

export default function CustomIconButton({ IconOption }) {
  return (
    <IconButton
      _hover={{
        bgColor: "primary.200",
        borderColor: "primary.200",
        color: "neutrals.0",
      }}
      variant={"unstyled"}
      border={"1px"}
      borderRadius={"full"}
      display={"flex"}
      textAlign={"center"}
      fontSize={["xl", "2xl"]}
      icon={IconOption}
    />
  );
}
