import { Box } from '@chakra-ui/react';
import {
  end,
  half,
  line_menu,
  open,
  start,
  wrapper_menu,
} from '../../styles/Burger.module.scss';

export default function IconTest({ isBurgerOpen }) {
  return (
    <Box className={`${wrapper_menu} ${isBurgerOpen && open}`}>
      <Box
        className={`${line_menu} ${half} ${start} ${isBurgerOpen && open}`}
      ></Box>
      <Box className={`${line_menu} ${isBurgerOpen && open}`}></Box>
      <Box
        className={`${line_menu} ${half} ${end}  ${isBurgerOpen && open}`}
      ></Box>
    </Box>
  );
}
