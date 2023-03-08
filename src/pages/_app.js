import Layout from "@/components/Layout";
import "@/styles/app.scss";

export default function App({ Component, pageProps }) {
  return <Layout content={<Component {...pageProps} />} />;
}
