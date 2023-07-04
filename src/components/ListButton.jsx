import { Button, useColorMode } from "@chakra-ui/react";

export default function ListButton({ option, onlClickHandler }) {
  const { colorMode } = useColorMode();
  return (
    <Button
      mx={2}
      color={colorMode === "light" ? "neutrals.100" : "neutrals.0"}
      onClick={onlClickHandler}
      variant={"unstyled"}
    >
      {option}
    </Button>
  );
}
