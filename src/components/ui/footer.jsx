import { Box, Container } from "@chakra-ui/react";
import { PositionHolder } from "./position-holder";

export const Footer = (props) => {
  return (
    <Box as="footer" role="contentinfo" bg="yellow" {...props}>
      <Container>
        <PositionHolder minH="20">
          {" "}
          YMG
        </PositionHolder>
      </Container>
    </Box>
  );
};