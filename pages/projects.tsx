import * as React from "react";
import {
  VStack,
  Text,
  useColorModeValue,
  HStack,
  IconButton,
  Tooltip
} from "@chakra-ui/react";
import { PageSlideFade } from "../components/ui/page-transitions";
import Header from "../components/layout/header";
import { RiSignalTowerLine } from "react-icons/ri";
import LiveData from "../components/home-page/projects/live-data";
import { repositories } from "../data/repositories";
import PageLayout from "../components/layout/pageLayout";

const TURQUOISE = "#06b6d4";

const iconProps = {
  variant: "ghost",
  size: "md",
  isRound: true
};

const RepositoriesList = () => {

  return (
    <PageLayout title="Projects" keywords="A list of all my current projects">
      <PageSlideFade>
        <VStack align="start" spacing={3}>
          <HStack justifyContent={"space-between"} width={"100%"}>
            <Header underlineColor={TURQUOISE} mt={0} mb={0}>
              Projects
            </Header>
            <HStack>
              <Tooltip hasArrow label="Github repos" placement="top">
                <IconButton
                  aria-label={"live"}
                  colorScheme={"linkedin"}
                  icon={<RiSignalTowerLine />}
                  {...iconProps}
                />
              </Tooltip>
            </HStack>
          </HStack>
          <Text
            color={useColorModeValue("gray.500", "gray.200")}
            textAlign="left"
          >
            This page lists all the projects I am currently working on or have created!
          </Text>
        </VStack>
          <LiveData />
      </PageSlideFade>
    </PageLayout>
  );
};

export function getStaticProps() {
  return {
    props: {
      repositories
    }
  };
}

export default RepositoriesList;