import { Box, Link, Text } from '@chakra-ui/react';
import Touch from '../components/SVGs/Touch';
import HeroVideo from '../components/cards/HeroVideo';
import TeamWrapper from '../components/cards/TeamWrapper';
import MainSection from '../components/templates/MainSection';

export default function Home() {
  return (
    <>
      <HeroVideo />

      <MainSection id="introduction" sectionHeading="Who we are?">
        <Text variant={'body-paragraph'}>
          We are a growing community of creatives based in Copenhagen, with the
          passion for capturing the stories of local businesses.
        </Text>

        <Text variant={'body-paragraph'}>
          Our mission is to facilitate the creation of professional video
          content through collaborations and support local talent.
        </Text>

        <Text variant={'body-paragraph'}>
          21motions.dk serves as a matchmaking platform with profiles of content
          creators and businesses based in Denmark.
        </Text>

        <Text variant={'body-paragraph'}>
          Join the community today and get access to our free services!
        </Text>
      </MainSection>

      <MainSection id="contact" sectionHeading="Get in touch" icon={Touch}>
        <Text variant={'body-paragraph'}>
          Meet the team behind 21motions! Connected by passion, dedication and
          growth mindset. Let&apos;s have a chat and create an impact together!
        </Text>

        <Text variant={'body-paragraph'}>
          Join us today!{' '}
          <Box as="span" display="inline-block">
            Say{' '}
            <Link
              variant="inline-link"
              href="mailto: hello@21motions.com"
              isExternal
            >
              hello@21motions.com
            </Link>{' '}
            👋
          </Box>
        </Text>
      </MainSection>

      <TeamWrapper />
    </>
  );
}
