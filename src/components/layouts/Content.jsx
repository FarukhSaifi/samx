import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../Context/DataContext/DataContext";

const Content = () => {
  const context = useContext(DataContext);
  const { posts } = context;

  console.log(posts);
  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <section className="wow fadeIn p-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <!-- start filter navigation --> */}
              <ul className="portfolio-filter nav nav-tabs justify-content-center border-0 portfolio-filter-tab-1 font-weight-600 alt-font text-uppercase text-center margin-80px-bottom text-small md-margin-40px-bottom sm-margin-20px-bottom">
                <li className="nav active">
                  <a data-filter="*" className="light-gray-text-link text-very-small">
                    All
                  </a>
                </li>
                <li className="nav">
                  <a data-filter=".web" className="light-gray-text-link text-very-small">
                    Web
                  </a>
                </li>
                <li className="nav">
                  <a data-filter=".advertising" className="light-gray-text-link text-very-small">
                    Advertising
                  </a>
                </li>
                <li className="nav">
                  <a data-filter=".branding" className="light-gray-text-link text-very-small">
                    Branding
                  </a>
                </li>
                <li className="nav">
                  <a data-filter=".design" className="light-gray-text-link text-very-small">
                    Design
                  </a>
                </li>
                <li className="nav">
                  <a data-filter=".photography" className="light-gray-text-link text-very-small">
                    Photography
                  </a>
                </li>
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
                  className="portfolio-grid portfolio-metro-grid work-4col hover-option8 gutter-medium"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  <li className="grid-sizer"></li>

                  {/* <!-- start portfolio item --> */}
                  {/* <li className="grid-item wow advertising design fadeInUp">
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

                  {posts.map(post => (
                    <li
                      key={post.postId}
                      className="grid-item wow fadeInUp web branding photography"
                      data-wow-delay={post?.delay}
                    >
                      <Link to={`/art/${post?.postId}`} onClick={scrollToTop}>
                        <figure>
                          <div className="portfolio-img">
                            <img src={post?.image} alt={post?.name} />
                          </div>
                          <figcaption>
                            <div className="portfolio-hover-main">
                              <div className="portfolio-hover-box align-middle">
                                <div className="portfolio-icon alt-font font-weight-600 icon-medium">+</div>
                                <span className="text-extra-large alt-font text-extra-dark-gray margin-5px-bottom">
                                  {post?.name}
                                </span>
                                <p className="no-letter-spacing text-small mb-0 text-medium-gray">{post?.subtitle}</p>
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      </Link>
                    </li>
                  ))}

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

export default Content;
