import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
  srcSet,
  alt = "...",
  lazy = true,
  lazyProps = { width: "auto", height: "auto" },
  className,
  ...rest
}) => {
  // const classes = useStyles();
  if (lazy) {
    return (
      <LazyLoadImage
        className={clsx("image", className)}
        alt={alt}
        src={src}
        srcSet={srcSet}
        effect="opacity"
        {...lazyProps}
        {...rest}
      />
    );
  }

  return <img className={clsx("image", className)} alt={alt} src={src} srcSet={srcSet} {...rest} />;
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
   * Source set for the responsive images
   */
  srcSet: PropTypes.string,
  /**
   * Image title
   */
  alt: PropTypes.string,
  /**
   * Lazy loading properties
   */
  lazyProps: PropTypes.object,
  /**
   * Should lazy load the image
   */
  lazy: PropTypes.bool,
};

export default Image;
