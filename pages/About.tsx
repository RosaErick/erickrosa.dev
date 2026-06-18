import { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Heading,
  Divider,
  Button,
  Collapse,
  LightMode,
} from "@chakra-ui/react";
import Paragraph from "../layouts/Paragraph";
import Container from "../layouts/Layout";
import { motion } from "framer-motion";
import { useTranslation } from "../lib/i18n";

const About = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const { t } = useTranslation();

  return (
    <>
      <Container>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Box>
            <Flex justifyContent="space-between" alignItems="flex-end">
              <Image
                borderRadius="full"
                boxSize="150px"
                src={`https://github.com/rosaerick.png`}
              />
            </Flex>
            <Heading p="20px 0">{t("about.greeting")}</Heading>

            <Collapse in={show} startingHeight={100}>
              <Paragraph fontSize="xl" lineHeight={1.6}>
                {t("about.paragraph")}
              </Paragraph>
            </Collapse>
            <LightMode>
              <Button
                size="sm"
                onClick={handleToggle}
                mt="1rem"
                variant="ghost"
              >
                {show ? t("about.showLess") : t("about.showMore")}
              </Button>
            </LightMode>
          </Box>
          <Divider my={10} />
        </motion.div>
      </Container>
    </>
  );
};

export default About;
