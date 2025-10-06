import Image from "@components/shared-component/Image.jsx";
import Link from "next/link";
import { memo, useCallback } from "react";

const ImageCard = memo(props => {
  const { scrollToTop, post } = props;

  // Memoize the click handler to prevent unnecessary re-renders
  const handleClick = useCallback(() => {
    scrollToTop();
  }, [scrollToTop]);

  return (
    <li className="grid-item wow animate__animated fadeInUp" data-wow-delay={post?.delay}>
      <Link href={`/art/${post?.postId}`} onClick={handleClick}>
        <figure>
          <div className="portfolio-img">
            <Image src={post?.image} alt={post?.name} />
          </div>
          <figcaption>
            <div className="portfolio-hover-main animate__animated animate__flipInY ">
              <div className="portfolio-hover-box align-middle">
                <div className="portfolio-icon alt-font font-weight-600 icon-medium">+</div>
                <span className="text-extra-large alt-font text-extra-dark-gray margin-5px-bottom">{post?.name}</span>
                <p className="no-letter-spacing text-small mb-0 text-medium-gray">{post?.subtitle}</p>
              </div>
            </div>
          </figcaption>
        </figure>
      </Link>
    </li>
  );
});

export default ImageCard;
