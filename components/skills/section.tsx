import React from "react";
import { Center } from "@chakra-ui/react";
import Container from "./container";

const Section = (props: { [x: string]: any; full: any; children: any; }) => {
  const { full, children, ...rest } = props;
  return (
    <Center as="section" {...rest} w="100%">
      {full ? children : <Container>{children}</Container>}
    </Center>
  );
};

export default Section;