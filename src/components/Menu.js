import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { MdDeliveryDining } from "react-icons/md";

// Example menu data (replace or fetch from API)
const menuItems = [
  {
    id: 1,
    name: "Greek Salad",
    description:
      "Fresh lettuce, tomatoes, olives, and feta cheese with olive oil dressing.",
    price: "$12",
    image: "./images/greek salad.jpg",
  },
  {
    id: 2,
    name: "Bruchetta",
    description:
      "Grilled bread rubbed with garlic and topped with fresh tomatoes, basil, and olive oil.",
    price: "$10",
    image: "./images/bruchetta.svg",
  },
  {
    id: 3,
    name: "Lemon Dessert",
    description:
      "Moist lemon cake topped with a tangy lemon glaze, perfect for dessert.",
    price: "$8",
    image: "./images/lemon dessert.jpg",
  },
  // Add more items as needed
];

export default function Menu() {
  return (
    <section className="menu-section">
      <h1>Our Menu</h1>
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
          {menuItems.map((item) => (
            <Card
              key={item.name}
              borderRadius="lg"
              overflow="hidden"
              style={{ backgroundColor: "#edefee" }}
            >
              <Image
                borderTopRadius={"16px"}
                src={item.image}
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
                <Text fontSize="sm" mb={4} height={84} textAlign={"left"}>
                  {item.description}
                </Text>
              </CardBody>
              {/* <CardFooter gap={2} style={{ margin: "10px" }}>
                <Button variant="ghost" onClick={onOrder}>
                  Order a delivery
                  <MdDeliveryDining />
                </Button>
              </CardFooter> */}
            </Card>
          ))}
        </SimpleGrid>
      </Flex>
    </section>
  );
}
