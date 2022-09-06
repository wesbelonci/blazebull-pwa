import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { Container } from "./styles";

const AnimatedTransictionPage: React.FC<PropsWithChildren<any>> = ({
  children,
}) => {
  return (
    <Container className="w-full h-full bg-dark-background">
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "100%", opacity: 1 }}
        exit={{ x: -window.innerWidth, opacity: 0 }}
      >
        {children}
      </motion.div>
    </Container>
  );
};

export { AnimatedTransictionPage };
