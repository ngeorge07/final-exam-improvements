import { Grid, GridItem, Image, useToast } from '@chakra-ui/react';
import PropositionSection from '../templates/PropositionSection';

export default function HeroImage({ text, linkText, img, alt }) {
  return (
    <Grid as="section" display="grid">
      <GridItem colStart={1} colEnd={2} rowStart={1} rowEnd={2}>
        <Image
          objectPosition={
            img === 'business' ? { md: '0 25%' } : { base: '25% 0' }
          }
          fit="cover"
          src={`/${img}/${img}-hero.jpg`}
          alt={`Hero image that covers the screen showing ${alt}`}
          width="100vw"
          height="100vh"
          boxShadow="black 0px 0px 25px 5px"
          filter="brightness(80%)"
        />
      </GridItem>
      <GridItem
        colStart={1}
        colEnd={2}
        rowStart={1}
        rowEnd={2}
        alignSelf="center"
        justifySelf="center"
        zIndex={2}
      >
        <PropositionSection
          text={text}
          linkText={linkText}
          useToast={useToast}
        />
      </GridItem>
    </Grid>
  );
}
