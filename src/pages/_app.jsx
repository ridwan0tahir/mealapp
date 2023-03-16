import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "@/components/layouts/Layout";
import "@/styles/app.scss";
import "swiper/css";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout content={<Component {...pageProps} />} />
    </QueryClientProvider>
  );
}
