import { Avatar, Flex, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const variants = {
  visible: {
    y: 0,
    opacity: 1,
  },
  hidden: { y: 50, opacity: 0 },
};

export default function TeamMember({ name, title }) {
  return (
    <Flex
      as={motion.div}
      variants={variants}
      align="center"
      direction="column"
      textAlign="center"
    >
      <Avatar
        size={{ base: 'xl', sm: '2xl' }}
        name={name}
        src={`/home/${name.split(' ')[0]}-portrait.png`}
      />
      <Heading mt={5} mb={2} fontSize={22} size="md" fontWeight={500}>
        {name}
      </Heading>
      <Text fontSize={22}>{title}</Text>
    </Flex>
  );
}
