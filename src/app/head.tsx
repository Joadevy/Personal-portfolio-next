import Script from "next/script";

export default function Head() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-0WCTMKTDRR"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
          dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "G-0WCTMKTDRR");
        `}
      </Script>
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Joaquín Arlettaz ~ Web developer</title>
      <meta property="og:title" content="Joaquin Arlettaz personal portfolio" />
      <meta
        property="og:description"
        content="I'm Joaquin Arlettaz, a web developer and this is my personal portfolio page with some of my best projects and personal information."
      />
      <meta
        name="description"
        content="I'm Joaquin Arlettaz, a web developer and this is my personal portfolio page with some of my best projects and personal information."
      />
      <meta
        name="twitter:image:src"
        content="https://res.cloudinary.com/jjoadev/image/upload/v1646782892/linkedin-img_qxyucw.jpg"
      />
      <meta name="twitter:site" content="@joaquinArlettaz" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Joaquin Arlettaz - Portfolio" />
      <meta
        name="twitter:description"
        content="Information systems engineering student &amp; frontend dev"
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/jjoadev/image/upload/v1646782892/linkedin-img_qxyucw.jpg"
      />
      <meta property="og:url" content="https://www.joaquinarlettaz.tech/" />
      <meta property="og:type" content="website" />
      <link
        rel="shortcut icon"
        type="image/png"
        sizes="32x32"
        href="./icons/favicon.webp"
      />
    </>
  );
}
