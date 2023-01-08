import Link from 'next/link';

import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTiktok,
  IoLogoYoutube,
} from 'react-icons/io5';

import { Box, HStack, Icon, Text, useColorModeValue } from '@chakra-ui/react';

export default function Footer() {
  const iconColor = useColorModeValue('black', 'white');

  return (
    <Box
      as="footer"
      ml={{ base: 30 }}
      mr={{ base: 22 }}
      mx={{ sm: 70, md: 100, lg: 200 }}
    >
      <Text fontSize="22px" align="center" mt={'24'}>
        Not ready yet?{' '}
        <Box as="span" display="inline-block">
          Follow our journey on Social Media:
        </Box>
      </Text>

      <HStack justifyContent="center" gap={4} mt={3} mb={14} flexWrap="wrap">
        <Link aria-label="LinkedIN" href="#">
          <Icon
            color={iconColor}
            _hover={{ color: 'american_green' }}
            boxSize={7}
            as={IoLogoLinkedin}
          />
        </Link>
        <Link aria-label="Facebook" href="#">
          <Icon
            color={iconColor}
            _hover={{ color: 'american_green' }}
            boxSize={7}
            as={IoLogoFacebook}
          />
        </Link>
        <Link aria-label="YouTube" href="#">
          <Icon
            color={iconColor}
            _hover={{ color: 'american_green' }}
            boxSize={7}
            as={IoLogoYoutube}
          />
        </Link>
        <Link aria-label="Instagram" href="#">
          <Icon
            color={iconColor}
            _hover={{ color: 'american_green' }}
            boxSize={7}
            as={IoLogoInstagram}
          />
        </Link>
        <Link aria-label="TikTok" href="#">
          <Icon
            color={iconColor}
            _hover={{ color: 'american_green' }}
            boxSize={7}
            as={IoLogoTiktok}
          />
        </Link>
      </HStack>
    </Box>
  );
}
