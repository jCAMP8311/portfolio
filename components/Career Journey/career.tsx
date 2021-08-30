import * as React from "react";
import {
  Text,
  VStack,
  Heading,
  Box,
  Image,
  HStack,
  Divider,
  IconButton
} from "@chakra-ui/react";
import { CareerTimeline } from "./career-timeline";
import { FaGraduationCap, FaAward, FaMedal } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import Header from "../layout/header";
import Section from "../skills/section";
import { PageSlideFade } from "../ui/page-transitions";

const MyStory = ({ companies, institutes }:any) => {

  return (
    <VStack>
      <Section mb={14}>
        <PageSlideFade>
          <VStack>
            <Header mt={0} mb={1}>
              Career Journey
            </Header>
          </VStack>
        </PageSlideFade>
      </Section>
      <VStack textAlign="start" align="flex-start" mb={0}>
        <Box>
          <CareerTimeline year={"2021"} index={0} />
          {companies.map((company: any, index: any) => (
            <>
            <CareerTimeline
              icon={BsFillBriefcaseFill}
              index={index}
              key={index}
            >
              {" "}
              <HStack>
                <Image
                  rounded="full"
                  w={[6, 8]}
                  h={[6, 8]}
                  objectFit="cover"
                  fallbackSrc={'/assets/images/placeholder.png'}
                  src={company.logo}
                  alt={company.alt}
                />
                <VStack align="start">
                  <Heading
                    fontSize={[12, 13, 15]}
                    lineHeight="shorter"
                    fontWeight="bold"
                  >
                    <Box>{company.title}</Box>
                    <Box mt={1}>{company.period}</Box>
                  </Heading>
                </VStack>
              </HStack>
              <Divider my={2} />
              <Text fontSize={[12, 13, 15]}>{company.role}</Text>
            </CareerTimeline>
            {company.awards &&
              company.awards.map((award: any, index1: any) => (
                <CareerTimeline icon={FaAward} index={index1 + index + 1} key={index1}>
                  {" "}
                  <HStack>
                    <IconButton
                      colorScheme="blue"
                      rounded="full"
                      size="sm"
                      aria-label="medal"
                      icon={<FaMedal />}
                    />

                    <VStack align="start">
                      <Heading
                        fontSize={[12, 13, 15]}
                        lineHeight="shorter"
                        fontWeight="bold"
                      >
                        <Box>{award.title}</Box>
                        <Box mt={1}>{award.date}</Box>
                      </Heading>
                    </VStack>
                  </HStack>
                  <Divider my={2} />
                  <Text fontSize={[12, 13, 15]}>{award.description}</Text>
                </CareerTimeline>
            ))}
            </>
          ))}

          <CareerTimeline year={"2012"} index={0} />
          {institutes.map((institute: any, index: any) => (
            <>
              <CareerTimeline
                icon={FaGraduationCap}
                index={index > 0 ? index + 1 : index}
              >
                {" "}
                <HStack>
                  <Image
                    rounded="full"
                    w={[6, 8]}
                    h={[6, 8]}
                    objectFit="cover"
                    fallbackSrc={'/assets/images/placeholder.png'}
                    src={institute.logo}
                    alt={institute.alt}
                  />
                  <VStack align="start">
                    <Heading
                      fontSize={[12, 13, 15]}
                      lineHeight="shorter"
                      fontWeight="bold"
                    >
                      <Box>{institute.short_title}</Box>
                      <Box mt={1}>{institute.period}</Box>
                    </Heading>
                  </VStack>
                </HStack>
                <Divider my={2} />
                <Text fontSize={[12, 13, 15]}>{institute.role}</Text>
              </CareerTimeline>
              {institute.awards &&
                institute.awards.map((award: any, index1: any) => (
                  <CareerTimeline icon={FaAward} index={index1 + index + 1} key={index1}>
                    {" "}
                    <HStack>
                      <IconButton
                        colorScheme="blue"
                        rounded="full"
                        size="sm"
                        aria-label="medal"
                        icon={<FaMedal />}
                      />

                      <VStack align="start">
                        <Heading
                          fontSize={[12, 13, 15]}
                          lineHeight="shorter"
                          fontWeight="bold"
                        >
                          <Box>{award.title}</Box>
                          <Box mt={1}>{award.date}</Box>
                        </Heading>
                      </VStack>
                    </HStack>
                    <Divider my={2} />
                    <Text fontSize={[12, 13, 15]}>{award.description}</Text>
                  </CareerTimeline>
                ))}

              <CareerTimeline
                year={institute.startingYear}
                index={0}
                skipTrail={index === institutes.length - 1 ? true : false}
              />
            </>
          ))}
        </Box>
      </VStack>
    </VStack>
  );
};

export default MyStory;