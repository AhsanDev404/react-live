import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import CustomUnSolidButton from "./CustomUnSolidButton";
import MockProject from "../assets/images/MockProject.svg";
import { Link } from "react-router-dom";

export default function ProjectCard({ odd }) {
  const { colorMode } = useColorMode();
  return (
    <Stack
      direction={["column", odd ? "row-reverse" : "row"]}
      gap={10}
      mx={[0, 20]}
      my={[10, 20]}
      _hover={{ cursor: "pointer" }}
    >
      <Card
        bgColor={colorMode == "light" ? "primary.50" : "primary.50"}
        px={5}
        py={10}
      >
        <CardBody display={"flex"}>
          <Image width={"6xl"} src={MockProject} />
        </CardBody>
      </Card>
      <Stack my={[0, 20]} gap={8} textAlign={["center", "left"]}>
        <Heading
          as={"h6"}
          fontWeight={"medium"}
          color={"primary.200"}
          size={"md"}
        >
          Medesto - Perigon Health 360{" "}
        </Heading>
        <Text
          fontSize={"xl"}
          fontFamily={"custom"}
          color={colorMode == "light" ? "neutrals.200" : "neutrals.0"}
        >
          The Medesto App works with the Medesto Dispenser to track doses taken
          or missed and provides important information about medications,
          including side effects and potentially harmful drug interactions.
        </Text>
        <Text color={"primary.200"} fontWeight={"semibold"} fontSize={"sm"}>
          Healthcare
        </Text>
        <Box display={["flex", "block"]} justifyContent={"center"}>
        <Link to={'/project/123'}>
          <CustomUnSolidButton />
          </Link>
        </Box>
      </Stack>
    </Stack>
  );
}
