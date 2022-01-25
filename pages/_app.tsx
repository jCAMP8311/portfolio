import { useEffect } from "react";
import App, { AppContext, AppProps } from "next/app";
import { ChakraProvider, Box } from "@chakra-ui/react";
import AppLayout from "../components/layout/appLayout";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import { AnimatePresence } from "framer-motion";
import customTheme from '../components/theme'

const isProduction = process.env.NODE_ENV === "production";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      if (isProduction) gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={customTheme}>
      <AppLayout>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Box key={router.route}>
            <Component {...pageProps} />
          </Box>
        </AnimatePresence>
      </AppLayout>
    </ChakraProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};
export default MyApp;