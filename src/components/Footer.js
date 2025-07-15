import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function Footer() {
  const navLinkList = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Order",
      url: "/order",
    },
    {
      name: "Menu",
      url: "/menu",
    },
    {
      name: "Booking Page",
      url: "/booking",
    },
  ];
  return (
    <Box marginTop={90} backgroundColor="#495e57">
      <Flex
        margin="0 auto"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="1024px"
        height={406}
        position={"relative"}
      >
        <SimpleGrid
          columns={{ base: 1, md: 3, lg: 4 }}
          spacing={6}
          mt={8}
          maxW="1024px"
          margin="30px 0"
        >
          <Box>
            <Image src="../images/Logo.svg" height={50} width={"fit-content"} />
            <Text fontSize={32} fontWeight={500}>
              Little Lemon Chicago
            </Text>
          </Box>
          <Box>
            <Flex margin="0 auto" alignItems="left" direction={"column"}>
              <Text fontSize={18} color={"#facc3d"} fontWeight={500}>
                Doormat Navigation
              </Text>
              <ul className="navbar" style={{ flexDirection: "column" }}>
                {navLinkList.map((item) => {
                  return (
                    <li>
                      <a href={item.url} color="black">
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Flex>
          </Box>
          <Box>
            <Flex margin="0 auto" alignItems="left" direction={"column"}>
              <Text fontSize={18} color={"#facc3d"} fontWeight={500}>
                Contact
              </Text>
              <ul className="navbar" style={{ flexDirection: "column" }}>
                <li>
                  <a color="black">123 Main St.</a>
                </li>
                <li>
                  <a color="black">(123) 456-7890</a>
                </li>
                <li>
                  <a color="black">information@littlelemon.com</a>
                </li>
              </ul>
            </Flex>
          </Box>
          <Box>
            <Flex margin="0 auto" alignItems="left" direction={"column"}>
              <Text fontSize={18} color={"#facc3d"} fontWeight={500}>
                Doormat Navigation
              </Text>
              <ul
                className="navbar"
                style={{ flexDirection: "column", gap: 5 }}
              >
                <li>
                  <a color="black">Instagram</a>
                </li>
                <li>
                  <a color="black">Facebook</a>
                </li>
                <li>
                  <a color="black">Twitter</a>
                </li>
              </ul>
            </Flex>
          </Box>
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
