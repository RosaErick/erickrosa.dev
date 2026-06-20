import { forwardRef } from "react";
import { Box, Spinner } from "@chakra-ui/react";

export const ModelSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);
interface DogContainerProps {
  children?: React.ReactNode;
  w?: any;
  h?: any;
  mt?: any;
  mb?: any;
}
export const ModelContainer = forwardRef<HTMLDivElement, DogContainerProps>(
  (
    {
      children,
      w = [140, 345, 460],
      h = [140, 375, 440],
      mt = ["-14px", "-34px", "-54px"],
      mb = ["-10px", "-40px", "-60px"],
    },
    ref
  ) => (
    <Box
      ref={ref}
      m="auto"
      mt={mt}
      mb={mb}
      w={w}
      h={h}
      position="relative"
      zIndex="0"
      alignSelf={["center", "center", "center"]}
    >
      {children}
    </Box>
  )
);

const Loader = () => {
  return (
    <ModelContainer>
      <ModelSpinner />
    </ModelContainer>
  );
};

export default Loader;
