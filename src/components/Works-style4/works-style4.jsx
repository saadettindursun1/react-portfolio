/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksStyle4 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio-frl section-padding pb-70" id="projelerim">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Projelerim
              </h6>
              <h3 className="wow color-font">
                Bu bölümde yaptığım <br /> bazı projeleri göreceğiz.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter wow fadeIn" data-wow-delay=".5s"> 
              <span data-filter="*" className="active">
                Tümü
              </span>
              <span data-filter=".web-siteleri">Web</span>
              <span data-filter=".masaustu-uygulamalari">
                Masaüstü Projeleri
              </span>
            </div>
          </div>

          <div className="gallery full-width">
           

            <div
              className="col-md-6 items masaustu-uygulamalari wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>İş Takip Uygulaması</h6>
                  <p>
                    C# ve MySql kullanılarak geliştirilmiş iş takip uygulaması.
                  </p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img
                      src="/img/portfolio/project/saadettin-dursun-masaustu-proje-2.jpg"
                      alt="image"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/works2/works2-dark">App</Link>
                  </span>
                  <span>
                    <Link href="/works2/works2-dark">Fitnes</Link>
                  </span>
                  <span>
                    <Link href="/works2/works2-dark">Creative</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items masaustu-uygulamalari wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Muhasebe Uygulaması</h6>
                  <p>
                    C# ve MySql kullanılarak geliştirilmiş muhasebe uygulaması.
                  </p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img
                      src="/img/portfolio/project/saadettin-dursun-masaustu-proje-1.jpeg"
                      alt="image"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/works2/works2-dark">C#</Link>
                  </span>
                  <span>
                    <Link href="/works2/works2-dark">MySql</Link>
                  </span>
                  <span>
                    <Link href="/works2/works2-dark">Muhasebe</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items masaustu-uygulamalari wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Kafe & Restaurantlar için uygulama</h6>
                  <p>C# ile geliştirilmiş, adisyon ve gelir gider takibi yapılabilen uygulama.</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img
                      src="/img/portfolio/project/saadettin-dursun-masaustu-proje-3.jpg"
                      alt="image"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/works2/works2-dark">App</Link>
                  </span>
                  <span>
                    <Link href="/works2/works2-dark">Fitnes</Link>
                  </span>
                  <span>
                    <Link href="/works2/works2-dark">Creative</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 float-left items web-siteleri wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>E-Ticaret Sitesi (Mor Kitapçılık)</h6>
                  <p>WordPress & WooCommerce altyapısı ile yapılmıştır.</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a
                    href="https://www.juniorbest.shop/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/img/portfolio/project/saadettin-dursun-web-proje-1.png"
                      alt="image"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/works2/works2-dark">WordPress</Link>
                  </span>
                  <span>
                    <Link href="/works2/works2-dark">WooCommerce</Link>
                  </span>
                  <span>
                    <Link href="/works2/works2-dark">E-Ticaret</Link>
                  </span>
                </div>
              </div>
            </div>


            <div
              className="col-md-6 float-left items web-siteleri wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Haber Platformu (HaberG) </h6>
                  <p>
                  ASP .NET WEB API / Angular Material ile yapılmıştır.
                  </p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img
                      src="/img/portfolio/project/saadettin-dursun-web-proje-5.png"
                      alt="image"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/works2/works2-dark">ASP .NET WEB API</Link>
                  </span>
                  <span>
                    <Link href="/works2/works2-dark">Angular Material</Link>
                  </span>
                  <span>
                    <Link href="/works2/works2-dark">Haber Platformu</Link>
                  </span>
                </div>
              </div>
            </div>



            <div
              className="col-md-6 float-left items web-siteleri wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>İş Platformu (İnternet Taşımacılığı) </h6>
                  <p>AngularJS & Firebase ile yapılmıştır. </p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img
                      src="/img/portfolio/project/saadettin-dursun-web-proje-2.png"
                      alt="image"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/works2/works2-dark">Angular</Link>
                  </span>
                  <span>
                    <Link href="/works2/works2-dark">Firebase</Link>
                  </span>
                  <span>
                    <Link href="/works2/works2-dark">Yönetim Panelli Site</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 float-left items web-siteleri wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>İş Yönetim Sistemi (Dursun Kereste)</h6>
                  <p>Php & Mysql kullanarak yapılmıştır</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a
                    href="https://www.juniorbest.shop/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/img/portfolio/project/saadettin-dursun-web-proje-3.jpg"
                      alt="image"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/works2/works2-dark">Php</Link>
                  </span>
                  <span>
                    <Link href="/works2/works2-dark">Mysql</Link>
                  </span>
                  <span>
                    <Link href="/works2/works2-dark">HTML / CSS</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 float-left items web-siteleri wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Proje Yarışması (Nettakip) </h6>
                  <p>
                    2018 yılında Teknofest Science Expo 2018 yarışması için
                    yapılmıştır.{" "}
                  </p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img
                      src="/img/portfolio/project/saadettin-dursun-web-proje-4.jpg"
                      alt="image"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/works2/works2-dark">Php & Mysql</Link>
                  </span>
                  <span>
                    <Link href="/works2/works2-dark">HTML / CSS</Link>
                  </span>
                  <span>
                    <Link href="/works2/works2-dark">Proje Yarışması</Link>
                  </span>
                </div>
              </div>
            </div>


            <div
              className="col-md-6 float-left items web-siteleri wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>İş Takip Uygulaması (Exwork) </h6>
                  <p>
                    PHP & MySql Kullanarak Yapılmıştır
                  </p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img
                      src="/img/portfolio/project/saadettin-dursun-web-proje-6.png"
                      alt="image"
                    />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="/works2/works2-dark">Php & Mysql</Link>
                  </span>
                  <span>
                    <Link href="/works2/works2-dark">HTML / CSS</Link>
                  </span>
                  <span>
                    <Link href="/works2/works2-dark">Proje Yarışması</Link>
                  </span>
                </div>
              </div>
            </div>



           

          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle4;
