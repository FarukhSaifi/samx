import clsx from "clsx";
import NextImage from "next/image";
import PropTypes from "prop-types";

// const useStyles = makeStyles(() => ({
//   root: {
//     width: "100%",
//     height: "100%",
//   },
//   dBlock: {
//     display: "block",
//   },
// }));

/**
 * Component to display the images
 *
 * @param {Object} props
 */
const Image = ({
  src,
  alt = "...",
  width = 800,
  height = 600,
  sizes = "100vw",
  priority = false,
  className,
  ...rest
}) => {
  return (
    <NextImage
      className={clsx("image", className)}
      alt={alt}
      src={src}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      {...rest}
    />
  );
};

Image.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Source of the image
   */
  src: PropTypes.string.isRequired,
  /**
   * Image title
   */
  alt: PropTypes.string,
  /**
   * Width and height for Next.js image optimization
   */
  width: PropTypes.number,
  height: PropTypes.number,
  /**
   * Responsive sizes attribute for responsive images
   */
  sizes: PropTypes.string,
  /**
   * Request high priority for LCP images
   */
  priority: PropTypes.bool,
};

export default Image;
