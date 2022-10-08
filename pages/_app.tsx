import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import TopBar from "../components/Topbar";

/* const customTheme = extendTheme({
  colors: {
    brand: {
      100: "#ffebee",
      200: "#e57373",
      300: "#f44336",
      400: "#e53935",
    },
  },
}); */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider /* theme={customTheme} */>
      <TopBar />
      <Box maxWidth="container.xl" margin="auto">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
