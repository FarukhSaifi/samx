import Footer from "@components/layouts/Footer.jsx";
import Header from "@components/layouts/Header.jsx";
import ArtBoard from "@components/shared-component/ArtBoard.jsx";
import { DataContext } from "@context/DataContext/DataState.jsx";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

export default function ArtPage() {
  const router = useRouter();
  const { postId } = router.query;
  const { getArt } = useContext(DataContext);

  useEffect(() => {
    if (postId) getArt(postId);
  }, [postId, getArt]);

  return (
    <>
      <Header />
      <ArtBoard />

      <Footer />
    </>
  );
}
