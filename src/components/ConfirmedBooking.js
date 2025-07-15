import { Box, Flex, Text } from "@chakra-ui/react";

export default function ConfirmedBooking() {
    return (
        <>
        <Box>
            <Flex
                margin="0 auto"
                px={12}
                justifyContent="space-between"
                alignItems="center"
                maxWidth="1024px"
                height={406}
                position={"relative"}
            >
                <Text fontSize={32} fontWeight={"bold"}>Booking has been confirmed!</Text>
            </Flex>
        </Box>
        </>
    )
}