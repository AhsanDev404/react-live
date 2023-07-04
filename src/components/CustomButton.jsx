import { Button } from "@chakra-ui/react";
export default function CustomButton({ title, onClickHandle }) {
  return (
    <Button
      onClick={onClickHandle}
      px={["10", "16"]}
      py={"6"}
      fontWeight={"medium"}
      fontSize={["md", "lg"]}
      bgColor={"primary.200"}
      color={"neutrals.0"}
      _hover={{ bgColor: "primary.100" }}
    >
      {title}
    </Button>
  );
}
