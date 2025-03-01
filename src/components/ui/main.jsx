import { Container, Flex } from "@chakra-ui/react";
import { PositionHolder } from "./position-holder";

export const Main = (props) => {
  return (
    <Flex as="main" role="main" direction="column" flex="1" {...props}>
      <Container>
        <PositionHolder minH="2xl">
          {props.children}
        </PositionHolder>
      </Container>
    </Flex>
  );
};