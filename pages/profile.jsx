import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Icon,
  Input,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IoCheckmarkSharp } from 'react-icons/io5';
import plunk from '../lib/plunkClient';

export default function Profile() {
  const [editMode, setEditMode] = useState(false);
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [full_name, setFullname] = useState(null);
  const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);
  const [description_headline, setDescriptionHeadline] = useState(null);
  const [description, setDescription] = useState(null);

  const cardBg = useColorModeValue('platinum', 'black');
  const accentTextColor = useColorModeValue('american_green', 'inchworm');

  const router = useRouter();

  useEffect(() => {
    async function getProfile() {
      if (user) {
        try {
          setLoading(true);

          let { data, error, status } = await supabase
            .from('profiles')
            .select(`*`)
            .eq('id', user.id)
            .single();

          if (error && status !== 406) {
            throw error;
          }

          if (data) {
            plunk.events.publish({
              email: data.email,
              event: 'account-created',
            });

            setFullname(data.full_name);
            setWebsite(data.website);
            data.avatar_url
              ? setAvatarUrl(data.avatar_url)
              : setAvatarUrl(
                  `https://api.dicebear.com/5.x/identicon/svg?seed=${data.email}`
                );
            setDescriptionHeadline(data.description_headline);
            setDescription(data.description);
          }
        } catch (error) {
          alert('Error loading user data!');
          console.log(error);
        } finally {
          setLoading(false);
        }
      } else {
        router.push('/login');
      }
    }

    getProfile();
  }, [user, supabase, editMode, router]);

  async function updateProfile({
    full_name,
    website,
    avatar_url,
    description_headline,
    description,
  }) {
    try {
      setLoading(true);

      const updates = {
        id: user.id,
        full_name,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
        description_headline,
        description,
      };

      let { error } = await supabase.from('profiles').upsert(updates);
      if (error) throw error;
    } catch (error) {
      alert('Error updating the data!');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    user && (
      <Flex direction={'column'} as="section" pt={200} mx={50}>
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
              {editMode ? (
                <Input
                  variant="outline"
                  placeholder="Full name"
                  value={full_name || ''}
                  onChange={(e) => setFullname(e.target.value)}
                />
              ) : (
                <Heading size={{ base: 'md', lg: 'lg' }} as="h3">
                  {full_name}
                </Heading>
              )}

              <Text
                variant="review-paragraph"
                fontWeight="semibold"
                color={accentTextColor}
              >
                {'Creator, Chakra UI'}
              </Text>
            </Box>

            <Avatar
              size="lg"
              name={'Segun Adebayo'}
              src={avatar_url}
              boxShadow="rgba(0, 0, 0, 0.3) 2px 2.4px 2px"
            />
          </CardHeader>

          <CardBody p={0} mt={10} as="section">
            {editMode ? (
              <>
                <Input
                  variant="outline"
                  placeholder="Description title"
                  value={description_headline || ''}
                  onChange={(e) => setDescriptionHeadline(e.target.value)}
                />

                <Input
                  variant="outline"
                  placeholder="Description"
                  value={description || ''}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </>
            ) : (
              <>
                <Heading size={{ base: 'md', lg: 'lg' }} as="h3">
                  {description_headline}
                </Heading>
                <Text variant="review-paragraph">{description}</Text>
              </>
            )}

            {/* <Grid as="section" templateColumns="repeat(3, 1fr)" gap={6} mt={10}>
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
            </Grid> */}
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

        <Flex gap={10} mt={5} mb={50}>
          <Button
            w={'28'}
            color={'white'}
            backgroundColor={editMode ? 'venetian_red' : 'american_green'}
            _hover={{
              backgroundColor: editMode ? 'red.500' : 'may_green',
              transition:
                'background-color 0.2s cubic-bezier(0.73, 0, 0.38, 1)',
            }}
            onClick={() => setEditMode((prev) => !prev)}
          >
            {editMode ? 'Cancel' : 'Edit mode'}
          </Button>

          {editMode && (
            <Button
              w={'28'}
              color={'white'}
              backgroundColor={'american_green'}
              _hover={{
                backgroundColor: 'may_green',
                transition:
                  'background-color 0.2s cubic-bezier(0.73, 0, 0.38, 1)',
              }}
              onClick={() => {
                updateProfile({
                  full_name,
                  website,
                  avatar_url,
                  description_headline,
                  description,
                });
                setEditMode((prev) => !prev);
              }}
              disabled={loading}
            >
              {loading ? 'Loading ...' : 'Update'}
            </Button>
          )}
        </Flex>

        <Button
          w={'28'}
          color={'white'}
          backgroundColor={'portland_orange'}
          _hover={{
            backgroundColor: 'orange.600',
            transition: 'background-color 0.2s cubic-bezier(0.73, 0, 0.38, 1)',
          }}
          onClick={() => supabase.auth.signOut()}
        >
          Sign out
        </Button>
      </Flex>
    )
  );
}
