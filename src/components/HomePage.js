import {
  Box,
  Flex,
  Button,
  Image,
  VStack,
  Text,
  SimpleGrid,
  Heading,
  Avatar,
} from "@chakra-ui/react";
import {
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { MdDeliveryDining } from "react-icons/md";

export default function HomePage() {
  const listSpecials = [
    {
      name: "Greek salad",
      price: "$12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
      img: "./images/greek salad.jpg",
    },
    {
      name: "Bruchetta",
      price: "$ 5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
      img: "./images/bruchetta.svg",
    },
    {
      name: "Lemon Dessert",
      price: "$ 5.00",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      img: "./images/lemon dessert.jpg",
    },
  ];
  const listEvalue = [
    {
      name: "Mario and Adrian",
      img: "./images/Mario and Adrian b.jpg",
      text: "Really good!",
    },
    {
      name: "Mario and Adrian",
      img: "./images/Mario and Adrian b.jpg",
      text: "Really good!",
    },
    {
      name: "Mario and Adrian",
      img: "./images/Mario and Adrian b.jpg",
      text: "Really good!",
    },
    {
      name: "Mario and Adrian",
      img: "./images/Mario and Adrian b.jpg",
      text: "Really good!",
    },
  ];
  return (
    <>
      <Box backgroundColor="#495e57">
        <Flex
          margin="0 auto"
          px={12}
          justifyContent="space-between"
          alignItems="center"
          maxWidth="1024px"
          height={406}
          position={"relative"}
        >
          <Flex
            px={12}
            justifyContent="flex-start"
            alignItems="left"
            maxWidth="422px"
            height="auto"
            direction={"column"}
          >
            <h1 style={{ marginBottom: 0, color: "#f4ce14", fontSize: 56 }}>
              Little Lemon
            </h1>
            <h2
              style={{
                marginTop: 0,
                marginBottom: 10,
                color: "white",
                fontSize: 24,
              }}
            >
              Chicago
            </h2>
            <p style={{ marginBottom: 50, color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button
              size="md"
              variant="solid"
              width={"fit-content"}
              backgroundColor="#facc3d"
              borderRadius={16}
            >
              Reserve a Table
            </Button>
          </Flex>
          <Image
            src="../images/restauranfood.jpg"
            fit="cover"
            boxSize="375px"
            borderRadius={16}
            top={20}
            position={"absolute"}
            right={0}
          />
        </Flex>
      </Box>
      <Box marginTop={90}>
        <Flex
          margin="0 auto"
          justifyContent="space-between"
          alignItems="center"
          maxWidth="1024px"
        >
          <Text fontSize={32} fontWeight={"500"}>
            This weeks specials!
          </Text>
          <Button
            size="md"
            variant="solid"
            width={"fit-content"}
            backgroundColor="#facc3d"
            borderRadius={10}
          >
            Online Menu
          </Button>
        </Flex>

        <Flex
          margin="0 auto"
          justifyContent="space-between"
          alignItems="center"
          width="1024px"
        >
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={6}
            mt={8}
            maxW="1024px"
            margin="30px 0"
          >
            {listSpecials.map((item) => (
              <Card
                key={item.name}
                borderRadius="lg"
                overflow="hidden"
                style={{ backgroundColor: "#edefee" }}
              >
                <Image
                  borderTopRadius={"16px"}
                  src={item.img}
                  alt={item.name}
                  boxSize="185px"
                  width={"100%"}
                  fit="cover"
                />
                <CardHeader pb={0} style={{ padding: 20 }}>
                  <Flex justify="space-between" align="center">
                    <Heading size="md">{item.name}</Heading>
                    <Text fontWeight="bold" color="#ee9972">
                      {item.price}
                    </Text>
                  </Flex>
                </CardHeader>
                <CardBody style={{ padding: "0 20px" }}>
                  <Text fontSize="sm" mb={4} height={84}>
                    {item.description}
                  </Text>
                </CardBody>
                <CardFooter gap={2} style={{ margin: "10px" }}>
                  <Button variant="ghost">
                    Order a delivery
                    <MdDeliveryDining />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>
        </Flex>
      </Box>
      <Box marginTop={90} backgroundColor="#495e57">
        <Flex
          margin="0 auto"
          py={20}
          justifyContent="space-between"
          alignItems="center"
          maxWidth="1024px"
          height={490}
          direction={"column"}
        >
          <Text fontSize={32} marginBottom={30} color={"#f4ce14"}>
            Testimonials
          </Text>
          <SimpleGrid
            columns={{ base: 1, md: 3, lg: 4 }}
            spacing={6}
            mt={8}
            maxW="1024px"
            margin="30px 0"
          >
            {listEvalue.map((item) => (
              <Card
                key={item.name}
                borderRadius="lg"
                overflow="hidden"
                style={{ backgroundColor: "#edefee", padding: 20 }}
              >
                <Text fontSize={18} fontWeight={500}>
                  Rating
                </Text>
                <Box style={{ display: "flex", flexDirection: "row" }} py={5}>
                  <Avatar src={item.img} alt={item.name} size="lg"></Avatar>
                  <Text fontSize={16} fontWeight={500} marginLeft={5}>
                    {item.name}
                  </Text>
                </Box>
                <Text fontSize={16} fontWeight={400}>
                  {item.text}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Flex>
      </Box>
      <Box marginTop={90} py={12}>
        <Flex
          margin="0 auto"
          justifyContent="space-between"
          alignItems="center"
          maxWidth="1024px"
          height={406}
          position={"relative"}
        >
          <Box width={"50%"}>
            <h1 style={{ marginBottom: 0, color: "black", fontSize: 56 }}>
              Little Lemon
            </h1>
            <h2
              style={{
                marginTop: 0,
                marginBottom: 50,
                fontSize: 24,
              }}
            >
              Chicago
            </h2>
            <p style={{ color: "black" }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
          </Box>
          <Box width={"50%"} position={"relative"} style={{display: "flex", justifyContent: "flex-end"}}>
            <Image
              src="../images/restaurant.jpg"
              fit="cover"
              boxSize="375px"
              borderRadius={16}
            />
            <Image
              src="../images/restauranfood.jpg"
              fit="cover"
              boxSize="375px"
              borderRadius={16}
              top={20}
              position={"absolute"}
              left={5}
              zIndex={-1}
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
