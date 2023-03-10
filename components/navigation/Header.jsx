import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import NextLink from 'next/link';
import { useRef } from 'react';
import {
  IoLockClosedOutline,
  IoLockOpenOutline,
  IoMoon,
  IoSunny,
} from 'react-icons/io5';
import IconHamburger from '../SVGs/IconHamburger';
import Logo from '../SVGs/Logo';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const user = useUser();
  const supabase = useSupabaseClient();

  return (
    <Flex
      as="header"
      position="absolute"
      top={10}
      px={10}
      zIndex={1401}
      w="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <Link aria-label="Home" as={NextLink} href="/" onClick={onClose}>
        <Logo />
      </Link>

      <Box
        ref={btnRef}
        as={IconButton}
        icon={<IconHamburger isBurgerOpen={isOpen} />}
        background="none"
        _hover={{ background: 'none' }}
        _active={{ background: 'none' }}
        onClick={isOpen ? onClose : onOpen}
        aria-label="Burger menu icon"
      ></Box>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={{ base: 'full', sm: 'sm' }}
        blockScrollOnMount={false}
      >
        <DrawerOverlay />

        <DrawerContent
          alignItems="center"
          backgroundColor={useColorModeValue('white', 'raisin_black')}
        >
          <DrawerBody
            mt={120}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={5}
          >
            <Link as={NextLink} href="/" variant="menu-link" onClick={onClose}>
              Home
            </Link>
            <Link
              as={NextLink}
              href="/creator"
              variant="menu-link"
              onClick={onClose}
            >
              Video creators
            </Link>
            <Link
              as={NextLink}
              href="/business"
              variant="menu-link"
              onClick={onClose}
            >
              For businesses
            </Link>

            {user && (
              <Link
                as={NextLink}
                href="/profile"
                variant="menu-link"
                onClick={onClose}
              >
                {' '}
                Your profile
              </Link>
            )}

            <Button
              w={'36'}
              as={NextLink}
              href="/login"
              aria-label={user ? 'sign-out' : 'sign-in'}
              variant="outline"
              border="none"
              outlineColor={user ? 'portland_orange' : 'white'}
              color={user ? 'portland_orange' : 'white'}
              _hover={{
                backgroundColor: useColorModeValue(
                  'gray.200',
                  'blackAlpha.400'
                ),
                outlineColor: user ? 'orange.600' : 'inchworm',
                color: user ? 'orange.600' : 'inchworm',
              }}
              _active={{ backgroundColor: 'none' }}
              fontSize={18}
              mt={5}
              rightIcon={user ? <IoLockOpenOutline /> : <IoLockClosedOutline />}
              onClick={() => {
                onClose();
                user && supabase.auth.signOut();
              }}
            >
              {user ? 'Sign out' : 'Sign in'}
            </Button>

            <Button
              w={'36'}
              aria-label="color-mode"
              onClick={toggleColorMode}
              variant="outline"
              border="none"
              outlineColor={useColorModeValue('black', 'white')}
              _hover={{
                backgroundColor: useColorModeValue(
                  'gray.200',
                  'blackAlpha.400'
                ),
              }}
              _active={{ backgroundColor: 'none' }}
              fontSize={18}
              mt={5}
              rightIcon={colorMode === 'light' ? <IoMoon /> : <IoSunny />}
            >
              {colorMode === 'light' ? 'Dark' : 'Light'} Mode
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
