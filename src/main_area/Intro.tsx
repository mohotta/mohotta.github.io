import { VStack, Flex, Image, Heading, Text } from "@chakra-ui/react";
import ProfilePic from "./ProfilePic";
import Hero from "./Hero";

export default function Intro() {

    return (
        <VStack>
            <ProfilePic/>
            <Hero />
        </VStack>
    )

}

