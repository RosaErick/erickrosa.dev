import { Text } from "@chakra-ui/react";

const Paragraph = ({ children, ...props }) => {
  return (
    <Text color="var(--text-muted)" {...props}>
      {children}
    </Text>
  );
};

export default Paragraph;