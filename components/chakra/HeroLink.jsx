import { chakra, forwardRef, useStyleConfig } from '@chakra-ui/react';

const HeroLink = forwardRef((props, ref) => {
  const { size, variant, ...rest } = props;
  const styles = useStyleConfig('HeroLink', { size, variant });

  return <chakra.link ref={ref} __css={styles} {...rest} />;
});

export default HeroLink;
