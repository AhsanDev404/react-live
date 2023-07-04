import {
  Box,
  Button,
  HStack,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  VStack,
  FormControl,
  Input,
  Textarea,
} from "@chakra-ui/react";
import HomeBG from "../assets/images/HomeBG.svg";
import CustomButton from "./../components/CustomButton";
import { FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import Main from "../assets/images/main.svg";
import { BsArrowDownShort } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import CustomIconButton from "../components/CustomIconButton";
import ListButton from "../components/ListButton";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import PreviousCompnies from "../components/PreviousCompnies";
import SectionBg from "../assets/images/sectionBg.svg";
import Springs from "../assets/images/springs.svg";
export default function Home() {
  const { colorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [thoughts, setThoughts] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Thoughts:", thoughts);
    setEmail("");
    setThoughts("");
  };
  return (
    <Box>
      <Box>
        <Box
          bgImage={`url(${HomeBG})`}
          bgSize={"contain"}
          bgRepeat={"no-repeat"}
          bgPos={"right"}
          mx={[-5, -16]}
          px={[5, 16]}
          display={["block", "flex"]}
          justifyContent={"space-between"}
          mb={"5"}
        >
          <Stack mt={["5"]} gap={5} justifyContent={"center"} pl={["0", "16"]}>
            <Stack gap={5}>
              <Heading
                as={"h2"}
                size={["sm", "md"]}
                color={colorMode === "light" ? "neutrals.400" : "neutrals.50"}
                fontWeight={"500"}
              >
                Associate Project Manager, Senior Software Engineer
              </Heading>
              <Heading as={"h6"} size={["2xl", "4xl"]}>
                Hi, I’m{" "}
                <Text color={"primary.200"} as={"span"}>
                  Tahir Zahoor
                </Text>
              </Heading>
              <Heading
                as={"h2"}
                size={["xs", "sm"]}
                color={colorMode === "light" ? "neutrals.200" : "neutrals.50"}
                fontWeight={"500"}
              >
                Bringing Vision to Life with Precision
              </Heading>
            </Stack>
            <Box>
              <CustomButton title="Hire Me" />
            </Box>
            <Box display={"flex"} gap={["3", "5"]}>
              <CustomIconButton IconOption={<IoIosMail />} />
              <CustomIconButton IconOption={<FaLinkedinIn />} />
              <CustomIconButton IconOption={<BsWhatsapp />} />
            </Box>
          </Stack>
          <Box mt={["5", "0"]}>
            <Box
              bgColor={colorMode == "light" ? "neutrals.40" : "#0F131A"}
              borderBottomRadius={["100px", "full"]}
              pt={["0", "28"]}
            >
              <Image
                boxSize={"full"}
                borderBottomRadius={["100px", "full"]}
                src={Main}
              />
            </Box>
          </Box>
        </Box>
        <Box
          display={["none ", "flex"]}
          flexDir={"column"}
          alignItems={"center"}
          mb={"28"}
          gap={5}
        >
          <Box>
            <IconButton
              variant={"unstyled"}
              border={"1px"}
              borderRadius={"full"}
              color={"primary.200"}
              fontSize={"4xl"}
              display={"flex"}
              icon={<BsArrowDownShort />}
            />
          </Box>
          <Heading
            as={"h2"}
            size={"sm"}
            fontWeight={"medium"}
            color={colorMode === "light" ? "neutrals.500" : "neutrals.25"}
          >
            SCROLL FOR MORE
          </Heading>
        </Box>
      </Box>
      <Box
        my={10}
        display={"flex"}
        gap={16}
        flexDir={["column-reverse", "row"]}
      >
        <Stack gap={[1, 5]} direction={["row", "column"]}>
          <HStack
            border={"2px"}
            borderColor={"primary.200"}
            gap={["2", "20"]}
            px={["5", "8"]}
            py={["3", "8"]}
            borderRadius={[20, 40]}
          >
            <Heading as={"h6"} size={["md", "4xl"]} color={"primary.200"}>
              8+
            </Heading>
            <Text textAlign={"center"} fontSize={["sm", "2xl"]}>
              YEARS OF EXPERIENCE
            </Text>
          </HStack>
          <HStack
            border={"2px"}
            borderColor={"primary.200"}
            gap={["2", "20"]}
            px={["5", "8"]}
            py={["2", "8"]}
            borderRadius={[20, 40]}
          >
            <Heading as={"h6"} size={["md", "4xl"]} color={"primary.200"}>
              8+
            </Heading>
            <Text textAlign={"center"} fontSize={["sm", "2xl"]}>
              YEARS OF EXPERIENCE
            </Text>
          </HStack>
        </Stack>
        <Stack gap={3} textAlign={["center", "left"]}>
          <Heading
            as={"h6"}
            size={["sm", "md"]}
            fontWeight={"normal"}
            color={colorMode == "light" ? "neutrals.200" : "neutrals.0"}
          >
            ABOUT ME
          </Heading>
          <Heading as={"h6"} size={["lg", "3xl"]} fontWeight={"normal"}>
            <Text color={"primary.200"} as={"span"}>
              Empowering
            </Text>{" "}
            Lives through Android.
          </Heading>
          <Text
            color={colorMode == "light" ? "neutrals.200" : "neutrals.0"}
            fontSize={["lg", "2xl"]}
            fontFamily={"custom"}
            fontWeight={"normal"}
          >
            My journey as an Android developer was driven by a noble purpose to
            create apps that empower individuals and improve lives. Combining
            his technical expertise with his passion for social impact
          </Text>
          <Box>
            <Button
              variant={"unstyled"}
              gap={2}
              color={"primary.400"}
              fontWeight={"bold"}
              rightIcon={<BsArrowRight />}
            >
              READ MORE
            </Button>
          </Box>
        </Stack>
      </Box>
      <Box my={10}>
        <Heading
          textAlign={"center"}
          as={"h6"}
          size={"3xl"}
          fontWeight={"normal"}
        >
          Featured{" "}
          <Text color={"primary.200"} as={"span"}>
            Projects
          </Text>
        </Heading>
        <Stack direction={"row"} justifyContent={"center"} my={5}>
          <ListButton option={"More"} />
          <ListButton option={"News & Magazines"} />
          <Menu>
            <MenuButton
              color={colorMode === "light" ? "neutrals.300" : "neutrals.0"}
              border={["1px", "none"]}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              variant={""}
              as={Button}
              rightIcon={isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
            >
              5 More
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Stack>
        <Box>
          <ProjectCard />
          <ProjectCard odd />
          <ProjectCard />
          <ProjectCard odd />
        </Box>
      </Box>
      <Box my={5}>
        <Heading
          textAlign={["center", "left"]}
          fontWeight={"medium"}
          fontSize={"2xl"}
        >
          Some of my{" "}
          <Text as={"span"} color={"primary.200"}>
            Clients
          </Text>{" "}
          i have worked for
        </Heading>
        <PreviousCompnies />
      </Box>
      <Stack
        display={["none", "flex"]}
        bgColor={"neutrals.30"}
        direction={"row"}
        mx={-16}
      >
        <Box w={"full"} display={"flex"} pos={"relative"}>
          <Image src={SectionBg} boxSize={"lg"} />
          <Image
            src={Springs}
            boxSize={"lg"}
            position={"absolute"}
            left={"-44"}
          />
          <Box
            color={"neutrals.0"}
            position={"absolute"}
            left={"36"}
            top={"48"}
          >
            <Box w={"64"}>
              <Heading size={"lg"}>Don’t Be Shy</Heading>
              <Text>
                Feel free to get in touch with me. I’m always open to discussing
                new projects, or creative ideas to be part of your vision.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box w={"full"}>
          <Heading
            my={10}
            textTransform={"uppercase"}
            color={"primary.200"}
            as={"h6"}
            size={"md"}
            fontWeight={"medium"}
          >
            Get In Touch
          </Heading>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4} px={"28"} pb={5}>
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
                  h={"36"}
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

              <Box display={"flex"} justifyContent={"flex-start"} w={"full"}>
                <CustomButton as="submit" title={"Submit"} />
              </Box>
            </VStack>
          </form>
        </Box>
      </Stack>

      <Stack
        bgGradient="linear(180deg, #96C0FF 0%, #358DF0 100%)"
        mx={-5}
        textAlign={"center"}
        p={"5"}
        my={-1}
        gap={5}
        display={["flex", "none"]}
      >
        <Heading size={"lg"}>Don’t Be Shy</Heading>
        <Text>
          Feel free to get in touch with me. I’m always open to discussing new
          projects, or creative ideas to be part of your vision.
        </Text>
        <Box>
          <CustomButton title="CONTACT ME" />
        </Box>
      </Stack>
    </Box>
  );
}
