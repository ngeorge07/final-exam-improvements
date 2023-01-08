const Heading = {
  variants: {
    h1: {
      fontSize: [37, 45, 58, 58, 58],
      maxW: { sm: '500px', md: '590px' },
      color: '#fff',
      textAlign: ['center'],
    },

    h2: {
      fontWeight: 'semibold',
      mb: { base: 2.5, md: 5 },
      display: 'flex',
      alignItems: 'center',
      gap: 2,
    },

    'review-heading': {
      fontSize: 18,
      fontFamily: `'Roboto', sans-serif`,
      fontWeight: 'semibold',
    },
  },
};

export default Heading;
