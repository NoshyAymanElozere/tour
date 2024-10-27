import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Spinner } from "./components/atoms";
import { AuthProvider } from "./context/auth-and-perm/AuthProvider";
import "./index.css";
import "./query.css";
import "./i18n";
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    {/* <LoadingContextProvider> */}

    <BrowserRouter>
      {/* <SettingProvider> */}
      <AuthProvider>
        <HelmetProvider>
          <ProSidebarProvider>
            <Suspense
              fallback={
                <div className="h-[100vh] flex items-center justify-center">
                  <Spinner size="large" />
                </div>
              }
            >
              <App />
            </Suspense>
          </ProSidebarProvider>
        </HelmetProvider>
      </AuthProvider>
      {/* </SettingProvider> */}
    </BrowserRouter>
    {/* </LoadingContextProvider> */}
  </QueryClientProvider>
);
