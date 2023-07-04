import {
  Box,
  Button,
  Card,
  HStack,
  Heading,
  IconButton,
  Image,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import ProjectHero from "../assets/images/ProjectHero.svg";
import project_1 from "../assets/images/Project_1.svg";
import projectLogo from "../assets/images/projectLogo.svg";
import PlayStore from "../assets/icons/PlayStore.svg";
import Springs from "../assets/images/springs.svg";
import client from "../assets/images/client.svg";
import Qutation from "../assets/images/quotation-mark.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const OtherProjectCard = () => (
  <Card bgColor={"neutrals.30"} my={20} mx={[2,5]}>
    <Image boxSize={["150px" , "xs"]} src={projectLogo} />
  </Card>
);
const LinkButton = ({ title = "title" }) => (
  <Button
    m={1}
    fontWeight={"normal"}
    variant={"outline"}
    color={"white"}
    borderColor={"white"}
    _hover={{}}
    borderRadius={"full"}
    px={[6, 10]}
  >
    {title}
  </Button>
);

const LinkIconButton = () => (
  <Button
    variant={"outline"}
    color={"black"}
    border={"1px"}
    gap={2}
    fontWeight={"normal"}
    p={[4, 7]}
    m={[2, 5]}
    fontSize={["xl", "2xl"]}
  >
    Play Store
    <Image src={PlayStore} />
  </Button>
);

const ProjectDesCard = ({ direction }) => {
  const { colorMode } = useColorMode();

  return (
    <Stack
      mx={[0, 20]}
      my={[5, 10]}
      gap={5}
      direction={["column", direction ? "row-reverse" : "row"]}
      alignItems={"center"}
      justifyContent={"space-evenly"}
    >
      <Card
        w={["full", "fit-content"]}
        px={[5, 20]}
        bgColor={"#E7ECF9"}
        borderRadius={"3xl"}
        position={"relative"}
        alignItems={"center"}
      >
        <Image boxSize={["200px", "sm"]} src={project_1} />
        <Image
          left={0}
          position={"absolute"}
          boxSize={["50px", "80px"]}
          src={projectLogo}
        />
      </Card>
      <Stack w={["full", 96]} textAlign={["center", "left"]}>
        <Heading size={"md"} fontWeight={"medium"} color={"primary.200"}>
          <Text
            as={"span"}
            color={colorMode === "light" ? "neutrals.90" : "white"}
          >
            My{" "}
          </Text>
          Challenge
        </Heading>
        <Heading
          size={"sm"}
          fontWeight={"medium"}
          color={colorMode === "light" && "neutrals.90"}
        >
          The Medesto App works with the Medesto Dispenser to track doses taken
          or missed and provides important information about medications,
          including side effects and potentially harmful drug interactions.
        </Heading>
      </Stack>
    </Stack>
  );
};

const ImageCard = () => (
  <Card
    w={["full", "fit-content"]}
    bgColor={"#DFF2E9"}
    px={[0, 28]}
    rounded={"2xl"}
    my={5}
    mx={[0, 5]}
    alignItems={"center"}
  >
    <Image boxSize={["200px", "sm"]} src={project_1} />
  </Card>
);

export default function ProjectDetail() {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Box
        position={"relative"}
        color={"white"}
        mx={["-5", "-16"]}
        h={["70vh", "80vh"]}
        bgGradient="linear(to bottom, #88B2C5, #80CFAF)"
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        gap={5}
        overflow={"hidden"}
      >
        <Box
          mt={[16, 28]}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDir={"column"}
          gap={5}
          textAlign={"center"}
          w={"96"}
        >
          <Heading fontWeight={"medium"}>Medesto</Heading>
          <Text w={["56", "full"]}>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam.
          </Text>
          <Heading size={"md"} fontWeight={"medium"}>
            Healthcare
          </Heading>
          <Box>
            <LinkButton title="web" />
            <LinkButton title="android" />
            <LinkButton title="ios" />
          </Box>
        </Box>
        <Image
          position={["absolute", "inherit"]}
          bottom={0}
          boxSize={["fit-content", "2xl"]}
          src={ProjectHero}
        />
      </Box>

      <Box>
        <ProjectDesCard />
        <ProjectDesCard direction={true} />
      </Box>

      <Box my={5} >
        <Heading my={5} size={"lg"} fontWeight={"medium"} textAlign={"center"}>
          More high level images about the{" "}
          <Text as={"span"} color={"primary.200"}>
            Medesto
          </Text>{" "}
        </Heading>

        <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </Box>

        
      </Box>

      <Box
      color={"black"}
          bgColor={"#DCE5EF"}
          mx={[-5, -16]}
          display={"flex"}
          justifyContent={["center", "space-around"]}
          py={5}
          px={2}
        >
          <Stack
            gap={["2", "5"]}
            w={["full", "fit-content"]}
            justifyContent={"center"}
          >
            <Heading size={["md", "xl"]}>Heading</Heading>
            <Heading
              size={["xs", "md"]}
              fontWeight={"medium"}
              color={"neutrals.300"}
            >
              Have a look on my Work
            </Heading>
          </Stack>
          <Box>
            <Heading size={["md", "xl"]}>Medesto</Heading>
            <LinkIconButton />
            <LinkIconButton />
          </Box>
        </Box>
      <Box
        bgColor={colorMode==="light"? "neutrals.30" :"neutrals.600"}
        my={10}
        mx={[-5, -16]}
        color={"black"}
        position={["inherit", "relative"]}
        py={[10, 28]}
        display={["block", "flex"]}
        alignItems={"center"}
        gap={5}
        px={[10, 28]}
        overflow={"hidden"}
      >
        <Image src={client} boxSize={"sm"} zIndex={1} />
        <Box
          bgColor={"primary.200"}
          position={["inherit", "absolute"]}
          zIndex={2}
          mx={[5, 0]}
          my={[2, 5]}
          color={"white"}
          py={3}
          px={5}
          rounded={"full"}
          left={[0, "350px"]}
          bottom={28}
        >
          <Heading size={"md"} textAlign={"center"}>
            Jack Nitzsche
          </Heading>
          <Text noOfLines={1} textAlign={"cen"}>
            Investor Group Coordinator
          </Text>
        </Box>

        <Card
          w={["full", "96"]}
          h={"fit-content"}
          px={[5, 16]}
          py={5}
          rounded={"lg"}
          border={"1px"}
          borderColor={"neutrals.50"}
          m={[0, 20]}
          my={[5, 0]}
        >
          <Heading size={"md"} fontWeight={"medium"}>
            Absolutely wonderful!
          </Heading>
          <Text color={"neutrals.90"}>
            Error voluptate adipisci. Quas a delectus optio ut. Non consequatur
            voluptatem quia rerum cum similique enim.
          </Text>
        </Card>

        <Image
          display={["none", "flex"]}
          src={Qutation}
          position={"absolute"}
          left={"500px"}
          top={"44"}
        />
        <Image
          display={["none", "flex"]}
          src={Qutation}
          position={"absolute"}
          left={"1000px"}
          top={"420px"}
        />

        <Image
          display={["none", "flex"]}
          src={Springs}
          position={"absolute"}
          boxSize={"1300px"}
          left={"-650px"}
          transform="rotate(160deg)"

        />
      </Box>

      <Box display={["block" , "none"]}  py={10} position={"relative"}>
        <Heading right={11} mx={5} top={["-5" , 5]} size={"xl"} fontWeight={"medium"} position={"absolute"}>See more <Text as={"span"} color={"primary.200"}>Projects</Text></Heading>
        <Carousel
         renderArrowPrev={(onClickHandler) => (
          <IconButton _hover={{color:"primary.200"}} position={"absolute"} zIndex={1} right={20} top={0}  display={"flex"} border={"1px"} rounded={"full"} variant={"unstyled"} onClick={onClickHandler}>
            <FaChevronLeft />
          </IconButton>
        )}
        renderArrowNext={(onClickHandler) => (
          <IconButton _hover={{color:"primary.200"}} position={"absolute"} zIndex={1} right={0} top={0} display={"flex"} border={"1px"} rounded={"full"} variant={"unstyled"} onClick={onClickHandler}>
            <FaChevronRight />
          </IconButton>
        )}
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          emulateTouch={true}
          infiniteLoop={true}
          swipeable={true}
          renderIndicator={()=>{false}}
          centerMode={true}
          centerSlidePercentage={50} 
        >
          <OtherProjectCard />
          <OtherProjectCard />
          <OtherProjectCard />
          <OtherProjectCard />
        </Carousel>
      </Box>
      <Box display={["none" , "block"]}  py={10} position={"relative"}>
        <Heading mx={5} top={["-5" , 10]} size={"xl"} fontWeight={"medium"} position={"absolute"}>See more <Text as={"span"} color={"primary.200"}>Projects</Text></Heading>
        <Carousel
         renderArrowPrev={(onClickHandler) => (
          <IconButton _hover={{color:"primary.200"}} position={"absolute"} zIndex={1} right={20} top={0}  display={"flex"} border={"1px"} rounded={"full"} variant={"unstyled"} onClick={onClickHandler}>
            <FaChevronLeft />
          </IconButton>
        )}
        renderArrowNext={(onClickHandler) => (
          <IconButton _hover={{color:"primary.200"}} position={"absolute"} zIndex={1} right={0} top={0} display={"flex"} border={"1px"} rounded={"full"} variant={"unstyled"} onClick={onClickHandler}>
            <FaChevronRight />
          </IconButton>
        )}
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          emulateTouch={true}
          infiniteLoop={true}
          swipeable={true}
          renderIndicator={()=>{false}}
          centerMode={true}
          centerSlidePercentage={33.33} 
        >
          <OtherProjectCard />
          <OtherProjectCard />
          <OtherProjectCard />
          <OtherProjectCard />
        </Carousel>
      </Box>
    </Box>
  );
}
