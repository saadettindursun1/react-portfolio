/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class FullTestimonials extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="arrows">
        <div className="container">
          <div
            onClick={() => this.slider.slickNext()}
            className="next cursor-pointer"
          >
            <span className="pe-7s-angle-right"></span>
          </div>
          <div
            onClick={() => this.slider.slickPrev()}
            className="prev cursor-pointer"
          >
            <span className="pe-7s-angle-left"></span>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <section
        className={`testimonials ${
          this.props.withIMG
            ? "section-padding bg-img"
            : this.props.withCOLOR
            ? "section-padding back-color"
            : this.props.noPadding ? ""
            : "section-padding"
        } ${this.props.classText ? this.props.classText : ""}`}
        style={{
          backgroundImage: `${
            this.props.withIMG ? "url(/img/testim-img.jpg)" : "none"
          }`,
        }}
        id="referanslarim"
      >
        {this.props.showHead && (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10">
                <div className="sec-head  text-center">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                   Referanslar
                  </h6>
                  <h3 className="wow color-font">
                    Daha önce çalıştığım müşterilerin geri bildirimleri.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="container-fluid position-re">
          <div className="row wow fadeInUp" data-wow-delay=".5s">
            <div className="col-lg-12">
              <Slider
                className="slic-item"
                {...{
                  ref: (c) => (this.slider = c),
                  dots: false,
                  infinite: true,
                  arrows: true,
                  centerMode: true,
                  autoplay: true,
                  rows: 1,
                  slidesToScroll: 1,
                  slidesToShow: 3,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        centerMode: false,
                      },
                    },
                  ],
                }}
              >
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                          <img src="/img/portfolio/project/metincan.png" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Metincan Ç.
                        </h6>
                        <span className="author-details">
                          Kurucu, Morsoft
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    Saadettin ile çalışmak çok güzeldi. Projenin her aşamasında iletişimde kaldık. Ortaya çok güzel bir iş çıktı.
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                        <img src="/img/portfolio/project/yusuf.png" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Yusuf Y.
                        </h6>
                        <span className="author-details">
                        Kurucu, Morsoft
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    Projeye başladığımız günden bitirdiğimiz güne kadar hiç problem yaşamadık. Tekrar çalışmayı dört gözle bekliyorum.
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                        <img src="/img/portfolio/project/selim.png" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Selim A.
                        </h6>
                        <span className="author-details">
                        Kurucu, Morsoft
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                    Bir çok işte beraber çalıştık. Memnun kalmadığım hiçbir iş olmadı. Hiç düşünmeden projenizi emanet edebilirsiniz.
                  </p>
                </div>
                <div className="item">
                  <div className="info valign">
                    <div className="cont">
                      <div className="author">
                        <div className="img">
                        <img src="/img/portfolio/project/furkan.png" alt="" />
                        </div>
                        <h6 className="author-name color-font">
                          Furkan Enes Ç.
                        </h6>
                        <span className="author-details">
                        Kurucu, Morsoft
                        </span>
                      </div>
                    </div>
                  </div>
                  <p>
                  Tercih etmemin en büyük sebepleri : Proje gizliliği konusuna çok önem veriyor olması  ve iletişiminin güçlü olması. 
                  </p>
                </div>
              </Slider>
            </div>
          </div>
          {this.renderArrows()}
        </div>
      </section>
    );
  }
}

export default FullTestimonials;
