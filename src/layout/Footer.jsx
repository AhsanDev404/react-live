import { Box, Card, HStack, Image, Stack, Text } from "@chakra-ui/react";
import footerImage from "../assets/images/footer.svg";
import locationIcon from "../assets/icons/location.svg";
import phoneIcon from "../assets/icons/phone.svg";
import mailIcon from "../assets/icons/mail.svg";
import { FaLinkedinIn } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import CustomIconButton from "../components/CustomIconButton";
export default function Footer() {
  return (
    <Box
      bgImage={`url(${footerImage})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      py={["5", "10"]}
      px={["5", "16"]}
    >
      <Card
        px={5}
        py={3}
        display={"flex"}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Stack direction={["column", "row  "]} justifyContent={"space-evenly"}>
          <HStack>
            <Image src={locationIcon} />
            <Text fontSize={["sm", "md"]}>123-A abcd street city, Country</Text>
          </HStack>
          <HStack>
            <Image src={phoneIcon} />
            <Text fontSize={["sm", "md"]}>123-A abcd street city, Country</Text>
          </HStack>
          <HStack>
            <Image src={mailIcon} />
            <Text fontSize={["sm", "md"]}>123-A abcd street city, Country</Text>
          </HStack>
        </Stack>
        <Stack gap={["3", "5"]} direction={["column", "row"]}>
          <CustomIconButton IconOption={<IoIosMail />} />
          <CustomIconButton IconOption={<FaLinkedinIn />} />
          <CustomIconButton IconOption={<BsWhatsapp />} />
        </Stack>
      </Card>
    </Box>
  );
}
