import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Viewport } from "next";
import PlausibleProvider from "next-plausible";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import config from "@/config";
import {getTranslations} from 'next-intl/server';
// import "./globals.css";
import { Suspense } from 'react';
import Header from "@/components/Header";
import { Theme } from '@radix-ui/themes';

const font = Inter({ subsets: ["latin"] });


export const viewport: Viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: config.colors.main,
  width: "device-width",
  initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
// export const metadata = getSEOTags({
//   title: 'Ai Sound Effect Generator Free & Text To Sound Effect'
// });
export async function generateMetadata({params: {locale}}: any) {
  const t = await getTranslations({locale, namespace: 'Basic'});
 
  // return {
  //   title: t('title')
  // };
  return getSEOTags({
    title: t('seoTitle'),
    description: t('seoDesc'),
    canonicalUrlRelative: locale ? '/' + locale : undefined,
  })
}

export default function RootLayout({ children }: { children: ReactNode}) {
  return (
    <html lang="en" data-theme={config.colors.theme} className={font.className}>
      {config.domainName && (
        <head>
          {/* <PlausibleProvider domain={config.domainName} /> */}
          <script defer data-domain="aisoundeffectgenerator.com" src="https://click.pageview.click/js/script.js"></script>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-T5J7K5B9VW"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                    
                      gtag('config', 'G-T5J7K5B9VW');
                      `,
            }}
          ></script>
        </head>
      )}
      <body>
        <Theme>
          <Suspense>
            <Header />
          </Suspense>
          {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
          <ClientLayout>{children}</ClientLayout>
        </Theme>
      </body>
    </html>
  );
}
