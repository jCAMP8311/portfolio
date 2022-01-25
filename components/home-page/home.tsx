import {
    Flex,
    Avatar,
    Box,
    Text,
    Stack,
    Link,
    UnorderedList,
    ListItem,
    useColorModeValue
  } from "@chakra-ui/react";
  import { MotionBox, MotionFlex } from "../../components/ui/motion";
  import Header from "../../components/layout/header";
  import CareerJourney from "../career-journey/career"
  import NextLink from 'next/link'
  import { companies, institutes } from "../../data/data";
  
  const ANIMATION_DURATION = 0.5;
  const ORANGE = "#ff9400";

  const Home: React.FC<any> = () => {
  
    return (
      <Flex direction="column" align="center">
        <Flex direction={["column", "column", "row"]}>
          <MotionBox
            opacity="0"
            initial={{
              translateX: -150,
              opacity: 0
            }}
            animate={{
              translateX: 0,
              opacity: 1,
              transition: {
                duration: ANIMATION_DURATION
              }
            }}
            m="auto"
            mb={[16, 16, "auto"]}
          >
            <Avatar
              name={"Josh Campbell"}
              size={"2xl"}
              src={"https://avatars.githubusercontent.com/u/63418265?v=4"}
            />
          </MotionBox>
          <MotionFlex
            ml={["auto", "auto", 16]}
            m={["auto", "initial"]}
            w={["90%", "85%", "80%"]}
            maxW="800px"
            opacity="0"
            justify="center"
            direction="column"
            initial={{
              opacity: 0,
              translateX: 150
            }}
            animate={{
              opacity: 1,
              translateX: 0,
              transition: {
                duration: ANIMATION_DURATION
              }
            }}
          >
            <Header underlineColor={ORANGE} emoji="👋" mt={0}>
              Hey!
            </Header>
            <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
              My name is{" "}
              <Box as="strong" fontWeight="600">
                Josh
              </Box>{" "}
              and I&apos;m a{" "}
              <Box as="span" whiteSpace="nowrap">
                Front End Engineer
              </Box>{" "}
              from{" "}
              <Box as="span" whiteSpace="nowrap">
                Minnesota ☃️
              </Box>
            </Box>
            <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
              This is my digital resume. Stay and click awhile!
            </Box>
          </MotionFlex>
        </Flex>
          <Box mt={10}>
            <Stack
              mb={10}
              mx={[0, 0, 10]}
              padding={4}
              align="start"
              borderLeft="4px solid"
              borderColor={"#53c8c4"}
              color={"whatsapp"}
              _hover={{ shadow: "lg" }}
              backgroundColor={useColorModeValue("gray.100", "#1e2533")}
              rounded="sm"
              fontSize="md"
            >
              <Text textAlign="center" color="#53c8c4" fontWeight="bold">
                Highlights
              </Text>
              <UnorderedList textAlign="left" paddingLeft={5} m={0}>
                <ListItem>
                  <NextLink href={'/projects'} passHref>
                    <Link>
                      Personal Projects & Contributions
                    </Link>
                  </NextLink>
                </ListItem>
                <ListItem>
                  <NextLink href={'/tech-stack'} passHref>
                    <Link>
                      Tech Stack
                  </Link>
                  </NextLink>
                </ListItem>
                <ListItem>
                  <NextLink href={'/achievements'} passHref>
                    <Link>
                      Achievements
                  </Link>
                  </NextLink>
                </ListItem>
              </UnorderedList>
            </Stack>
            <CareerJourney companies={companies} institutes={institutes} />
          </Box>
      </Flex>
    );
  };
  
  export default Home;