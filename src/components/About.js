import { Box, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Box>
        <Flex
          margin="0 auto"
          maxWidth="1024px"
          py={10}
          justifyContent="space-between"
          alignItems="center"
        >
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 2 }}
            spacing={6}
            mt={8}
            maxW="1024px"
            margin="30px 0"
          >
            <Box>
              <Text fontSize={32} color={"#495e57"}>
                About Little Lemon
              </Text>
              <Text fontSize={24} py={5} color={"#888"}>
                Family-Owned Mediterranean Delight
              </Text>
              <Text fontSize={18} >
                Welcome to Little Lemon — a cozy, family-owned restaurant
                located in the heart of Chicago. We specialize in authentic
                Mediterranean cuisine, blending traditional flavors with modern
                flair.
                <br></br>
                Whether you're stopping by for our fresh seafood, hand-rolled
                dolmas, or signature lemon cake, every dish is made with passion
                and the finest ingredients.
                <br></br>
                Since opening in 2015, our mission has been simple: to serve
                great food with great hospitality. We can’t wait to welcome you!
              </Text>
            </Box>
            <Box alignItems={"center"}>
            <Img src="./images/restaurant.jpg" borderRadius={16}></Img>
            </Box>
          </SimpleGrid>
        </Flex>
      </Box>
    </>
  );
}
