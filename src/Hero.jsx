import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  color: white;
  font-size: 3rem;
  text-align: center;
`;

const Hero = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1>こんにちは、私は◯◯です</h1>
        <p>ReactでApple風ポートフォリオを作成中。</p>
      </motion.div>
    </Container>
  );
};

export default Hero;