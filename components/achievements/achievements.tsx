import * as React from "react";
import {
  FiPackage,
  FiUserPlus,
  FiGithub,
  FiBriefcase
} from "react-icons/fi";
import { VStack, Heading, Box, Link, LinkProps } from "@chakra-ui/react";
import { TimelineItem } from "./Timeline";
import { PageSlideFade } from "../../components/ui/page-transitions";
import Header from "../../components/layout/header";
import NextLink from "next/link";
import customTheme from '../theme'

interface ExternalLinkProps extends LinkProps {
  url: string;
  linkProps?: LinkProps;
  text: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <NextLink href={url} passHref>
      <Link {...linkProps} {...props}>
        {text}
      </Link>
    </NextLink>
  );
};

const InternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <NextLink href={url} passHref>
      <Link {...linkProps} {...props}>
        {text}
      </Link>
    </NextLink>
  );
};
const Achievements = () => {

  return (
    <PageSlideFade>
      <Box align="start" mb={6}>
        <Header mt={0} mb={0}>
          Achievements
        </Header>
      </Box>
      <VStack textAlign="start" align="start" mb={5}>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2021
          </Heading>
          <Box>
            <TimelineItem icon={FiPackage}>
              Created my first website{" "}
              <InternalLink
              color={customTheme.colors.cyan.default}
              url="https://github.com/jCAMP8311/portfolio"
              text={"source on Github"} />
            </TimelineItem>
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2020
          </Heading>
          <Box>
            <TimelineItem icon={FiUserPlus}>
            Promoted from (QA) Engineer to (Front end) Engineer
            </TimelineItem>
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2019
          </Heading>
          <Box>
            <TimelineItem icon={FiGithub}>
                Created a Discord bot as a side project{" "}
                <ExternalLink
                color={customTheme.colors.cyan.default}
                url="https://github.com/jCAMP8311/kombat-lab-bot"
                text={"source on Github"}
                target="_blank"
              />
            </TimelineItem>
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2018
          </Heading>
          <Box>
            <TimelineItem icon={FiBriefcase}>
                Hired fulltime at Target working on .com
            </TimelineItem>
            <TimelineItem icon={FiUserPlus}>
            Promoted to QA Engineer II at Tap|QA
            </TimelineItem>
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2014
          </Heading>
          <Box>
            <TimelineItem icon={FiBriefcase} skipTrail>
                Begin Career at Tap|QA as QA Engineer
            </TimelineItem>
          </Box>
        </Box>
      </VStack>
    </PageSlideFade>
  );
};

export default Achievements;