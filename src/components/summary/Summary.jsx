import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Summary = () => {
  return (
    <Box
      p="6"
      border={"1px solid"}
      overflow={"hidden"}
      borderColor={"gray.100"}
      borderRadius={"10"}
      background={"white"}
      display={"flex"}
    >
      <Flex
        w={"full"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          flex={1}
          w={"full"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"space-evenly"}
          ml={"_20"}
          mr={"2"}
        >
          <Heading size={"md"} mb={"4"} color={"gray.600"}>
            Balance is 100
          </Heading>
          <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"gray.50"}
            w="full"
            h="100px"
            border={"1px solid"}
            borderColor={"gray.100"}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"gray.700"}>$ 100</Heading>
              <Text color={"gray.600"}>Total Income</Text>
            </Flex>
          </Flex>
          <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"gray.50"}
            w="full"
            h="100px"
            border={"1px solid"}
            borderColor={"gray.100"}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"gray.700"}>$ 100</Heading>
              <Text color={"gray.600"}>Total Expense</Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          flex={1}
          mt={"10"}
          ml={"-90px"}
          mr={"5"}
          width={"300px"}
          height={"300px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading>this is our chart</Heading>
        </Box>
      </Flex>
    </Box>
  );
};

export default Summary;
