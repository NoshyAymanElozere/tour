/////////// IMPORTS
///
import { Box, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { ModalsProvider } from "@mantine/modals";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./context/auth-and-perm/AuthProvider";
import { useIsRTL } from "./hooks/useIsRTL";
import { AllRoutesProvider } from "./routing/allRoutes";
///
const App = () => {
  const isRTL = useIsRTL();
  const { user } = useAuth();
  const navigate = useNavigate();

  

  useLayoutEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = isRTL ? "ar" : "en";
  }, []);


  // useEffect(() => {
  //   var manifestLink = document.querySelector('link[rel="manifest"]');
  //   fetch(manifestLink?.href)
  //     .then((response) => response.json())
  //     .then((manifest) => {
  //       var blob = new Blob([JSON.stringify(manifest)], {
  //         type: "application/json",
  //       });
  //       var newUrl = URL.createObjectURL(blob) + "?v=" + new Date().getTime();
  //       manifestLink.href = newUrl;
  //     });
  // }, []);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        // emotionCache={isRTL ? rtlCache : undefined}
        theme={{ dir: isRTL ? "rtl" : "ltr", colorScheme: "light" }}
      >
        <ModalsProvider>
          <Box pos="relative">
      
            <AllRoutesProvider />
            <ToastContainer rtl={isRTL} />
            <ReactQueryDevtools
              initialIsOpen={false}
              position={"bottom-right"}
            />
          </Box>
        </ModalsProvider>
      </MantineProvider>
    </>
  );
};
export default App;
