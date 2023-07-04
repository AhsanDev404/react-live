import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import projectImage from "../assets/images/projectImage.svg";
import { AiOutlineRight } from "react-icons/ai";
import {Link} from "react-router-dom"
export default function ProjectMainCard() {
  const { colorMode } = useColorMode();
  return (
    <Stack _hover={{ cursor: "pointer" }} mt={5} mx={["0", 5]}>
      <Card
        px={["10", "36"]}
        py={["0", "2"]}
        bgColor={"#E7ECF9"}
        border={"1px"}
        borderColor={"neutrals.50"}
      >
        <CardBody>
          <Heading color={"black"} textAlign={"center"} size={"md"}>
            Medesto
          </Heading>
          <Heading
            my={3}
            fontWeight={"medium"}
            color={"primary.200"}
            textAlign={"center"}
            size={["sm", "md"]}
          >
            Perigon Health 360{" "}
          </Heading>
          <Image src={projectImage} mt={5} />
        </CardBody>
      </Card>
      <Box display={"flex"} justifyContent={"center"}>
      <Link to={'/project/123'}>
      <Button
        mt={5}
        variant={"unstyled"}
        rightIcon={<AiOutlineRight />}
        display={"flex"}
        color={"primary.200"}
      >
        {" "}
        View More
      </Button>
      </Link>
      </Box>
    </Stack>
  );
}
