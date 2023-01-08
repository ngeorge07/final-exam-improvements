const HeroLink = {
  baseStyle: {
    textAlign: 'center',
    py: 3,
    borderRadius: 8,
    fontWeight: 'semibold',
    fontSize: 20,
    maxW: { base: '320px', sm: '390px' },
    w: { base: '98%', md: '50%' },
  },
  variants: {
    primary: {
      color: 'white',
      backgroundColor: 'american_green',
      _hover: {
        backgroundColor: 'may_green',
        transition: 'background-color 0.2s cubic-bezier(0.73, 0, 0.38, 1)',
      },
    },
    secondary: {
      color: 'black',
      backgroundColor: 'white',
      borderWidth: 2,
      borderColor: "white",
      _hover: {
        borderWidth: 2,
        borderColor: 'may_green',
        transition: 'border-color 0.3s cubic-bezier(0.73, 0, 0.38, 1)',
      },
    },
  },
};

export default HeroLink;
