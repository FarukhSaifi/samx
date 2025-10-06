import { initializeTheme } from "@/common/legacyPlugins.js";
import SeoHead from "@components/shared-component/SeoHead.jsx";
import DataState from "@context/DataContext/DataState.jsx";
import "@styles/css/index.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    initializeTheme();
  }, []);

  return (
    <DataState>
      <SeoHead />
      <Component {...pageProps} />
    </DataState>
  );
}
