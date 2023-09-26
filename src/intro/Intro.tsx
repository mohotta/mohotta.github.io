import { VStack } from "@chakra-ui/react";
import ProfilePic from "./ProfilePic";
import Hero from "./Hero";

export default function Intro() {

    return (
        <VStack id="home">
            <ProfilePic/>
            <Hero />
        </VStack>
    )

}

