import "./CuisineTypeCard.css";
import { Box, Center, Heading, Stack, Image } from "@chakra-ui/react";

const CuisineTypeCard = ({ title, imageSrc }) => {
  return (
    <div className="cuisineTypeCard">
      <Center py={12}>
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          boxShadow={"lg"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              top: 5,
              left: 0,
              backgroundImage: `url(${imageSrc})`,
              zIndex: -1,
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              shadow={"xl"}
              objectFit={"cover"}
              src={imageSrc}
              alt="image of mealType "
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              {title}
            </Heading>
            <Stack direction={"row"} align={"center"}></Stack>
          </Stack>
        </Box>
      </Center>
    </div>
  );
};

export default CuisineTypeCard;
