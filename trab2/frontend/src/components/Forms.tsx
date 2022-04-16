import React from "react";

import * as formik from "formik";
import { Box, Button, Flex, FormLabel } from "@chakra-ui/react";
import { getHowPlayer } from "../Proxy/flamengo-proxy";

export const Forms = (): any => {
  return (
    <formik.Formik
      initialValues={{ nome: "", idade: "", peso: "", altura: "" }}
      onSubmit={(values: any) => {
        getHowPlayer(values).then(console.log).catch(console.error);;
    }}
    >
      {(props) => (
        <Flex align="center" justify="center">
          <formik.Form>
            <Box py={2}>
              <FormLabel htmlFor="nome">Nome</FormLabel>
              <formik.Field type="nome" name="nome" placeholder="Leo Pereira" />
            </Box>
            <Box py={2}>
              <FormLabel htmlFor="idade">Idade</FormLabel>
              <formik.Field type="idade" name="idade" placeholder="31/01/1996" />
            </Box>
            <Box py={2}>
              <FormLabel htmlFor="peso">Peso</FormLabel>
              <formik.Field type="peso" name="peso" placeholder="84kg" />
            </Box>
            <Box py={2}>
              <FormLabel htmlFor="altura">Altura</FormLabel>
              <formik.Field type="altura" name="altura" placeholder="1,89m" />
            </Box>
            <Box py={2}>
              <Button mt={4} colorScheme="teal" type="submit">
                Submit
              </Button>
            </Box>
          </formik.Form>
        </Flex>
      )}
    </formik.Formik>
  );
};
