import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

const useBreakpoint = key => {
  const theme = useTheme();
  const { breakpoints } = theme;

  return useMediaQuery(breakpoints.down(key));
};

export default useBreakpoint;
