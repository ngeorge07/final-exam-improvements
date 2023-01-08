import { mode } from '@chakra-ui/theme-tools';

const styles = {
    global: (props) => ({
        body: {
          bg: mode('#fff', '#212121')(props),
          color: mode("#000", "#fff")(props)
        },
      }),
}

export default styles