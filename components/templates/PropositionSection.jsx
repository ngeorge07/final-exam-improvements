import { Flex, Heading, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';
import HeroLink from '../chakra/HeroLink';

export default function PropositionSection({
  text,
  linkText,
  isHome,
  useToast,
}) {
  const toast = useToast();
  const id = 'info-toast';

  return (
    <VStack w="fit-content" zIndex={2} mt={isHome ? 20 : 40}>
      <Heading as="h1" variant="h1" textShadow="rgb(0, 0, 0.5) 2px 2px">
        {text}
      </Heading>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        maxW={{ sm: '500px' }}
        w="90%"
        justifyContent={isHome ? 'space-between' : 'center'}
        alignItems="center"
        gap="5"
      >
        {isHome && (
          <HeroLink as={NextLink} href="/creator" variant="secondary">
            Video creators
          </HeroLink>
        )}

        <HeroLink
          as={isHome ? NextLink : 'button'}
          href={isHome ? '/business' : '#'}
          variant="primary"
          w={
            isHome
              ? { base: '98%', md: '50%' }
              : { base: '98%', sm: '70%', md: '80%' }
          }
          onClick={() =>
            !isHome &&
            !toast.isActive(id) &&
            toast({
              id,
              title: 'Hi, the developer here :)',
              description:
                'This is a prototype website. The section you are trying to access is not available yet. Please come back in 4 weeks.',
              status: 'info',
              duration: 4500,
              isClosable: true,
            })
          }
        >
          {linkText}
        </HeroLink>
      </Flex>
    </VStack>
  );
}
