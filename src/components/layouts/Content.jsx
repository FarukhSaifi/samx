import { DataContext } from "@context/DataContext/DataState.jsx";
import React, { useCallback, useContext, useMemo } from "react";
import ImageCard from "./ImageCard.jsx";

const Content = () => {
  const context = useContext(DataContext);
  const { posts, filterPost, categorys } = context;

  // Set the top cordinate to 0
  // make scrolling smooth - memoized to prevent recreation
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Optimized filter function - memoized to prevent recreation
  const filterByCatagory = useCallback(
    e => {
      const data = e.target.textContent;
      filterPost(data);
    },
    [filterPost]
  );

  // Memoize the posts to prevent unnecessary re-renders
  const memoizedPosts = useMemo(() => posts, [posts]);

  return (
    <div>
      <section className="wow animate__animated fadeIn p-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <!-- start filter navigation --> */}
              <ul className="portfolio-filter nav nav-tabs justify-content-center border-0 portfolio-filter-tab-1 font-weight-600 alt-font text-uppercase text-center margin-80px-bottom text-small md-margin-40px-bottom sm-margin-20px-bottom">
                {categorys?.map(item => (
                  <li key={item} className="nav">
                    <button
                      data-filter={item}
                      className="light-gray-text-link text-very-small"
                      onClick={filterByCatagory}
                    >
                      {item}
                    </button>
                  </li>
                ))}

                {/* <li className="nav">
                  <a data-filter=".photography" className="light-gray-text-link text-very-small">
                    Photography
                  </a>
                </li> */}
              </ul>
              {/* <!-- end filter navigation --> */}
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 px-3 p-md-0">
              <div className="filter-content overflow-hidden">
                <ul
                  className="portfolio-grid portfolio-metro-grid work-4col hover-option5 gutter-medium"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  {/* <!-- start portfolio item --> */}
                  {/* <li className="grid-item wow animate__animated advertising design fadeInUp">
                    <a href="single-project-page-01.html">
                      <figure>
                        <div className="portfolio-img">
                          <img src="images/posts/_1.jpg" alt="" />
                        </div>
                        <figcaption>
                          <div className="portfolio-hover-main">
                            <div className="portfolio-hover-box align-middle">
                              <div className="portfolio-icon alt-font font-weight-600 icon-medium">+</div>
                              <span className="text-extra-large alt-font text-extra-dark-gray margin-5px-bottom">
                                Tailoring Interior
                              </span>
                              <p className="no-letter-spacing text-small mb-0 text-medium-gray">Branding and Brochure</p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li> */}
                  {/* <!-- end portfolio item --> */}
                  {/* <!-- start  portfolio item --> */}
                  {memoizedPosts.map(post => (
                    <ImageCard key={post.postId} scrollToTop={scrollToTop} post={post} />
                  ))}

                  <li className="grid-sizer"></li>

                  {/* <!-- end portfolio item -->  */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(Content);
