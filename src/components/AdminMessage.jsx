import { Box, Grid, GridItem } from "@chakra-ui/react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { FaRobot } from "react-icons/fa";
dayjs.extend(relativeTime);

export default function AdminMessage({ message }) {
  return (
    <Box display="grid" justifyItems={"center"}>
      <Grid
        templateRows="30px 1fr 25px"
        templateColumns="1fr"
        w="70%"
        px="3"
        py="2"
        borderRadius="5px"
        borderTopLeftRadius={"5px"}
        borderTopRightRadius={"5px"}
        bg={"yellow"}
        mt="5"
        position="relative"
        _after={{
          position: "absolute",
          content: "''",
          width: 0,
          height: 0,
          borderStyle: "solid",
          // borderWidth: isYou ? "0px 0px 10px 10px" : "0px 10px 10px 0",
          // borderColor: isYou
          //   ? "transparent transparent transparent #dbfff9"
          //   : "transparent #edf3f9 transparent transparent",
          top: 0,
          left: "auto",
          right: "auto",
          // isYou ? "auto" : "-10px",
          // right: isYou ? "-10px" : "auto",
        }}
      >
        <GridItem
          fontWeight="500"
          fontSize="md"
          justifySelf="start"
          color="gray.900"
          mb="2"
        >
          <span>SoccerBot</span>
          <span> </span>
          <span>
            <FaRobot
              color="#1d9bf0"
              style={{ display: "inline", marginRight: "5px" }}
            />
          </span>
        </GridItem>
        <GridItem
          justifySelf="start"
          textAlign="left"
          wordBreak="break-word"
          fontSize="md"
          fontFamily="Montserrat, sans-serif"
        >
          {message.text}
        </GridItem>
        <GridItem
          color="gray"
          fontSize="10px"
          justifySelf="end"
          alignSelf="end"
        >
          {dayjs(message.timestamp).fromNow()}
        </GridItem>
      </Grid>
    </Box>
  );
}
