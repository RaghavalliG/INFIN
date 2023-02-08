import ContentBlock from '@/components/common/contentBlock'
import Contact from '@/components/home-components/contact'
import Faq from '@/components/home-components/faq'
import HighlightProcess from '@/components/home-components/highlightProcess'
import PriceList from '@/components/home-components/priceLists'
import Testimonials from '@/components/home-components/testimonials'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="infin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/** Home hero section */}
      <ContentBlock img="hero-image.png" imgpos="right" calssnames="home-page-banner">
  <h1 className="primary-title fw-bold">
  We bring solutions to make life <span className="highlighted">Easier for our clients</span>
                </h1>
                <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start actions">
                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 outline">
                     <span className="icon"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M15.2396 10.5153L4.63135 4.38029L4.6224 16.6349L15.2396 10.5153ZM6.58061 1.00977C3.98598 -0.490773 0.739953 1.38016 0.737762 4.37745L0.728805 16.632C0.726614 19.6293 3.96991 21.505 6.56673 20.0082L17.184 13.8887C19.7808 12.392 19.7835 8.64534 17.1889 7.1448L6.58061 1.00977Z" fill="#222222"/>
</svg></span> Take a tour
                    </button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                    Start using InFin for your company <span className="icon"><svg width="43" height="24" viewBox="0 0 43 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM42.0607 13.0607C42.6464 12.4749 42.6464 11.5251 42.0607 10.9393L32.5147 1.3934C31.9289 0.807611 30.9792 0.807611 30.3934 1.3934C29.8076 1.97919 29.8076 2.92893 30.3934 3.51472L38.8787 12L30.3934 20.4853C29.8076 21.0711 29.8076 22.0208 30.3934 22.6066C30.9792 23.1924 31.9289 23.1924 32.5147 22.6066L42.0607 13.0607ZM2 13.5H41V10.5H2V13.5Z" fill="white"/>
</svg>
</span>
                    </button>
                </div>
    </ContentBlock>
    {/** second content block */}
      <ContentBlock img="content-img-2.png" calssnames="bg-white mt-5" >
        <h2 className="secondary-title fw-bold">
          We make life Easier for our clients
        </h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
        <p>making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
        </p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start actions">
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">
          Know more <span className="icon"><svg width="43" height="24" viewBox="0 0 43 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5V10.5ZM42.0607 13.0607C42.6464 12.4749 42.6464 11.5251 42.0607 10.9393L32.5147 1.3934C31.9289 0.807611 30.9792 0.807611 30.3934 1.3934C29.8076 1.97919 29.8076 2.92893 30.3934 3.51472L38.8787 12L30.3934 20.4853C29.8076 21.0711 29.8076 22.0208 30.3934 22.6066C30.9792 23.1924 31.9289 23.1924 32.5147 22.6066L42.0607 13.0607ZM2 13.5H41V10.5H2V13.5Z" fill="white" />
            </svg>
            </span>
          </button>
        </div>
      </ContentBlock>

      {/* highlight process */}
      <HighlightProcess />

      {/** Let’s get started. */}
      <div className="site-price-plan pt-5 pb-5 bg-white">
        <div className="container">
          <h3 className="secondary-title text-center">Let’s get started.</h3>
          <div className="subtext-wrap text-center"><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p></div>
        </div>
        <PriceList />
      </div>

      {/* faq */}
      <Faq />
      <Contact />
      <Testimonials />
    </>
  )
}
