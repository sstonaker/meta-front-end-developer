import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const avatar = "https://i.pravatar.cc/150?img=7";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={10}>
      <VStack spacing={4} alignItems="center">
        <Avatar
          src={avatar}
          size="2x1"
        />
        <Heading as="h4" size="sm">
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={2}>
        <Heading as="h1" size="2xl">
          {bio1}
        </Heading>
        <Heading as="h1" size="2xl">
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
