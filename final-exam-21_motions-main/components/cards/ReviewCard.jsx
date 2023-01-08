import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoCheckmarkSharp } from 'react-icons/io5';

export default function ReviewCard({ post, index }) {
  const cardBg = useColorModeValue('platinum', 'black');
  const accentTextColor = useColorModeValue('american_green', 'inchworm');

  return (
    <Card
      as="article"
      borderRadius="xl"
      overflow="hidden"
      backgroundColor={cardBg}
      px={10}
      py={4}
      boxShadow="rgba(0, 0, 0, 0.16) 1px 2.5px 0px, rgba(0, 0, 0, 0.23) 4.3px 0px 3px"
    >
      <CardHeader
        as="section"
        p={0}
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Box>
          <Heading size={{ base: 'md', lg: 'lg' }} as="h3">
            {post.name ? post.name : 'Segun Adebayo'}
          </Heading>
          <Text
            variant="review-paragraph"
            fontWeight="semibold"
            color={accentTextColor}
          >
            {post.job ? post.job : 'Creator, Chakra UI'}
          </Text>
        </Box>

        <Avatar
          size="lg"
          name={post.name ? post.name : 'Segun Adebayo'}
          src={
            post.profileImage
              ? post.profileImage
              : 'https://bit.ly/sage-adebayo'
          }
          boxShadow="rgba(0, 0, 0, 0.3) 2px 2.4px 2px"
        />
      </CardHeader>

      <CardBody p={0} mt={10} as="section">
        <Heading as="h4" variant="review-heading" mb={3}>
          {post.title}
        </Heading>

        <Text variant="review-paragraph">{post.body}</Text>

        <Grid as="section" templateColumns="repeat(3, 1fr)" gap={6} mt={10}>
          <GridItem justifySelf="center">
            <Image
              boxSize="100px"
              objectFit="cover"
              src={`https://api.lorem.space/image/shoes?w=150&h=15${
                index <= 9 ? index : '3'
              }`}
              alt={`Profile picture of ${
                post.name ? post.name : 'Segun Adebayo'
              }`}
            />
          </GridItem>
          <GridItem justifySelf="center">
            <Image
              boxSize="100px"
              objectFit="cover"
              src={`https://api.lorem.space/image/shoes?w=150&h=15${
                index <= 6 ? index + 3 : '6'
              }`}
              alt={`Profile picture of ${
                post.name ? post.name : 'Segun Adebayo'
              }`}
            />
          </GridItem>
          <GridItem justifySelf="center">
            <Image
              boxSize="100px"
              objectFit="cover"
              src={`https://api.lorem.space/image/shoes?w=150&h=15${
                index <= 3 ? index + 6 : '9'
              }`}
              alt={`Profile picture of ${
                post.name ? post.name : 'Segun Adebayo'
              }`}
            />
          </GridItem>
        </Grid>
      </CardBody>

      <CardFooter as="section" justifyContent="flex-end">
        <Text
          display="flex"
          alignItems="center"
          variant="review-paragraph"
          fontSize={16}
          color={accentTextColor}
        >
          <Icon boxSize={7} as={IoCheckmarkSharp} />
          Joined 2 months ago
        </Text>
      </CardFooter>
    </Card>
  );
}
