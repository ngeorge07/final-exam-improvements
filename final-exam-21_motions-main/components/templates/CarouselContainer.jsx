import { Container } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ReviewCard from '../cards/ReviewCard';
import ChakraCarousel from './ChakraCarousel';

export default function CarouselContainer({ creator }) {
  const [data, setData] = useState(
    creator
      ? [
          {
            title: 'BEST TEAM EVER 💯',
            body: 'I am so grateful that I can be part of a creative community 🙏 like this, where you feel everyone is welcome regardless of background !! I can really be myself, coming up with crazy ideas 😜 and learn from others as well. My first business case was with a fashion brand, working together with a professional videographer and supporting his footage with animation work. It turned out really nice... and great stuff for my portfolio. Thanks for the collab! 🌈 🤍',
            name: 'Celcilie Lyn',
            job: 'Motion Graphics Designer',
            profileImage: 'https://randomuser.me/api/portraits/women/74.jpg',
          },
          {
            title: 'GREAT SUPPORT  📸',
            body: 'If you are a doer, 21motions it can be a good choice for you. I found it very interesting to belong to a community of peers and it is a big help in getting new clients. The crew can help you with planning and organising the production. So if you need extra hands for a bigger production or an animation creator, the solution is here. I would definitely recommend this approach both for solo players as well as for people who prefer to work with peers.',
            name: 'Misha Jensen',
            job: 'Video Producer',
            profileImage: 'https://randomuser.me/api/portraits/men/73.jpg',
          },
        ]
      : [
          {
            title: 'MATCHING RESULTS! 🙌',
            body: "It has been very smooth and inspiring to work with 21motion's young professional team. I loved their enthusiasm and crazy ideas, it really pushed our content to a cool 😎 👠 and trendy level. The video work they delivered went viral on TikTok and got very good results on Instagram as well. Great collaboration and representation of the SILFEN universe! Well done guys and girls! 👍",
            name: 'Daniel Silfen',
            job: 'Founder of Silfen Bags',
            profileImage: 'https://randomuser.me/api/portraits/men/72.jpg',
          },
          {
            title: "I'VE GOT A PIECE OF MIND",
            body: "Our small company has been enriched with very nice creative videos thanks to the team. I dont have to worry anymore about our Instagram page being empty, because it's enriched with good quality materials and I can proudly show it to anyone. We have got a broad following base and people started to share our content, this is a very good feeling.",
            name: 'Anders Berg',
            job: 'Owner of Green Spot Café',
            profileImage: 'https://randomuser.me/api/portraits/men/71.jpg',
          },
        ]
  );

  useEffect(() => {
    fetch('https://dummyjson.com/posts?limit=13')
      .then((res) => res.json())
      .then((res) => setData((prev) => prev.concat(res.posts)));
  }, []);

  return (
    <Container
      pt={3}
      pb={8}
      px={0}
      maxW={{
        base: '100%',
        sm: '35rem',
        md: '43.75rem',
        lg: '57.5rem',
      }}
    >
      <ChakraCarousel gap={32}>
        {data.map((post, index) => (
          <ReviewCard key={index} post={post} index={index} />
        ))}
      </ChakraCarousel>
    </Container>
  );
}
