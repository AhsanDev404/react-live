import {
  Box,
  Button,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import heroImage from "../assets/images/heroSection.svg";
import ListButton from "../components/ListButton";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import ProjectMainCard from "../components/ProjectMainCard";
import { BsArrowDownShort } from "react-icons/bs";
export default function Projects() {
  const { colorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Box minH={"95vh"}>
      <Box
        minH={["44", "62vh"]}
        mx={[-5, -16]}
        bgImage={heroImage}
        bgSize={"cover"}
        textAlign={"center"}
        display={"flex"}
        flexDir={"column"}
        gap={4}
        justifyContent={"center"}
      >
        <Heading mt={[5, 16]}>Projects</Heading>
        <Text fontFamily={"custom"}>
          Ut enim ad minima veniam, quis nostrum exercitationem
        </Text>
      </Box>

      <Box my={10}>
        <Heading
          textAlign={"center"}
          fontSize={["lg", "3xl"]}
          fontWeight={"medium"}
          my={5}
        >
          All Creative{" "}
          <Text as={"span"} color={"primary.200"}>
            Work
          </Text>
        </Heading>
        <Box display={["block", "none"]}>
          <ListButton option={"All"} />
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
        </Box>
        <Box
          mx={[5, 16]}
          my={5}
          display={["none", "flex"]}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          <ListButton option={"News & Magazines"} />
          <ListButton option={"News & Magazines"} />
          <ListButton option={"News & Magazines"} />
          <ListButton option={"News & Magazines"} />
          <ListButton option={"News & Magazines"} />
          <ListButton option={"News & Magazines"} />
          <ListButton option={"News & Magazines"} />
          <ListButton option={"News & Magazines"} />
          <ListButton option={"News & Magazines"} />
          <ListButton option={"News & Magazines"} />
          <ListButton option={"News & Magazines"} />
        </Box>
      </Box>

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        gap={5}
        justifyContent={"center"}
        my={5}
      >
        <ProjectMainCard />
        <ProjectMainCard />
        <ProjectMainCard />
        <ProjectMainCard />
        <ProjectMainCard />
        <ProjectMainCard />
      </Stack>
      <Box display={"flex"} justifyContent={"center"} my={10}>
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
    </Box>
  );
}
