import { Heading, Icon, VStack } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const variants = {
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
  hidden: { y: 80, opacity: 0, scale: 0.9 },
};

export default function MainSection({ sectionHeading, children, icon, id }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ rootMargin: '-60px 0px' });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <VStack
      as={motion.section}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      ml={{ base: 30 }}
      mr={{ base: 22 }}
      mx={{ sm: 70, md: 100, lg: 200 }}
      my={20}
      alignItems={{ base: 'flex-start', md: 'center' }}
      id={id}
    >
      <Heading as="h2" variant="h2">
        {sectionHeading} {icon && <Icon as={icon} display="inline-block" />}
      </Heading>

      <VStack
        gap={{ base: 5, md: 10 }}
        alignItems={{ base: 'flex-start', md: 'center' }}
      >
        {children}
      </VStack>
    </VStack>
  );
}
