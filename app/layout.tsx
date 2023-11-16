import { Metadata } from 'next';

import { SITE } from '~/config.js';

import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Announcement from '~/components/widgets/Announcement';
import Footer2 from '~/components/widgets/Footer2';

import { Inter as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';

const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white tracking-tight text-gray-900 antialiased dark:bg-slate-900 dark:text-slate-300">
        <Providers>
          <Header />
          <main>{children}</main>
          <br /><br />
          <div id="bracket">
            <iframe src="https://challonge.com/wally_mclean_memorial_2023/module?theme=8228&amp;multiplier=1&amp;match_width_multiplier=1&amp;show_final_results=1&amp;show_standings=0&amp;show_live_status=0&amp;subdomain=" allow="fullscreen" width="100%" height="1200" frameBorder="0" scrolling="auto" allow-transparency="true"></iframe>
          </div>
        </Providers>
      </body>
    </html>
  );
}
