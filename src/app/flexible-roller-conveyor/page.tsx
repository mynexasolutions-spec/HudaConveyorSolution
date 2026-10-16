import fs from "node:fs";
import path from "node:path";
import Script from "next/script";

export default function Page() {
  const html = fs.readFileSync(path.join(process.cwd(), "src/app/_flexible-roller-conveyor.html"), "utf8");
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Script src="/js/jquery.js" strategy="afterInteractive" />
      <Script src="/js/popper.min.js" strategy="afterInteractive" />
      <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/js/owl.js" strategy="afterInteractive" />
      <Script src="/js/wow.js" strategy="afterInteractive" />
      <Script src="/js/appear.js" strategy="afterInteractive" />
      <Script src="/js/jquery.stellar.min.js" strategy="afterInteractive" />
      <Script src="/js/jquery.fancybox.js" strategy="afterInteractive" />
      <Script src="/js/mixitup.js" strategy="afterInteractive" />
      <Script src="/js/jquery.mCustomScrollbar.concat.min.js" strategy="afterInteractive" />
      <Script src="/js/swiper.min.js" strategy="afterInteractive" />
      <Script src="/js/TweenMax.min.js" strategy="afterInteractive" />
      <Script src="/js/script.js" strategy="afterInteractive" />
    </>
  );
}
