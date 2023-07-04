import {
  Box,
  Card,
  FormControl,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
  useColorMode,
} from "@chakra-ui/react";
import Address from "../assets/icons/Address.svg";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import Springs from "../assets/images/springs.svg";
import Phone_1 from "../assets/images/Phone_1.svg";
import Emai_1 from "../assets/images/Email_1.svg";

const CustomCard = ({ image, heading, description }) => (
  <Card
    direction={"row"}
    gap={5}
    alignItems={"center"}
    py={[8, 12]}
    m={[0, 5]}
    px={10}
    w={"full"}
    borderRadius={"2xl"}
    border={"1px"}
    borderColor={"neutrals.50"}
    shadow={"md"}
  >
    <Image boxSize={"50px"} src={image} />
    <Box>
      <Heading size={"md"} fontWeight={"medium"}>
        {heading}
      </Heading>
      <Text>{description}</Text>
    </Box>
  </Card>
);

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [thoughts, setThoughts] = useState("");
  const { colorMode } = useColorMode();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Thoughts:", thoughts);
    setEmail("");
    setThoughts("");
  };
  return (
    <Box mt={10} minH={"95vh"}>
      <Heading textAlign={"center"} fontWeight={"medium"} my={10}>
        Contact Me
      </Heading>
      <Stack direction={["column", "row"]}>
        <CustomCard
          image={Address}
          heading={"Address"}
          description={"Abcd city, Country."}
        />
        <CustomCard
          image={Phone_1}
          heading={"Phone Number"}
          description={"+92-123-456-789-00"}
        />
        <CustomCard
          image={Emai_1}
          heading={"Email"}
          description={"Example@abc.com"}
        />
      </Stack>

      <Box
        bgColor={colorMode === "light" ? "neutrals.30" : "gray.900"}
        py={5}
        mt={5}
        mx={["-5", "-16"]}
        overflow={"hidden"}
        position={"relative"}
        justifyContent={"center"}
      >
        <Box mx={["5", "96"]}>
          <Text my={5} color={"neutrals.90"}>
            Send Message
          </Text>
          <Heading
            textTransform={"uppercase"}
            color={"primary.200"}
            as={"h6"}
            size={"md"}
            fontWeight={"medium"}
            my={5}
          >
            Get In Touch
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} pb={5} position={"relative"} zIndex={1}>
              <FormControl id="name">
                <Input
                  border={"1px"}
                  borderColor={"neutrals.50"}
                  placeholder="please Enter your Name"
                  _placeholder={{
                    fontFamily: "custom",
                    fontStyle: "italic",
                    color: "neutrals.200",
                  }}
                  fontFamily={"custom"}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  bgColor={"neutrals.0"}
                />
              </FormControl>
              <FormControl id="email">
                <Input
                  border={"1px"}
                  borderColor={"neutrals.50"}
                  placeholder="please Enter your Email"
                  _placeholder={{
                    fontFamily: "custom",
                    fontStyle: "italic",
                    color: "neutrals.200",
                  }}
                  fontFamily={"custom"}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  bgColor={"neutrals.0"}
                />
              </FormControl>
              <FormControl id="thoughts">
                <Textarea
                  h={["20", "36"]}
                  border={"1px"}
                  borderColor={"neutrals.50"}
                  placeholder="Describe your thoughts"
                  _placeholder={{
                    fontFamily: "custom",
                    fontStyle: "italic",
                    color: "neutrals.200",
                  }}
                  fontFamily={"custom"}
                  value={thoughts}
                  onChange={(e) => setThoughts(e.target.value)}
                  bgColor={"neutrals.0"}
                />
              </FormControl>

              <Box
                display={"flex"}
                justifyContent={["center", "flex-start"]}
                w={"full"}
              >
                <CustomButton as="submit" title={"Submit"} />
              </Box>
            </VStack>
          </form>
        </Box>
        <Box>
          <Image
            boxSize={"xl"}
            src={Springs}
            position={"absolute"}
            right={["-44", "-64"]}
            top={[-10, -20]}
          />
        </Box>
      </Box>
    </Box>
  );
}
