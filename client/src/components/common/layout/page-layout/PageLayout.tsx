import React, { ReactNode } from 'react';
import Head from 'next/head';

import Footer from '../footer/Footer';
import Header from '../header/Header';

interface PageLayoutProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  hasHeader?: boolean;
  hasFooter?: boolean;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  description,
  children,
  hasHeader = true,
  hasFooter = true,
}: PageLayoutProps) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content="Food Express" />
        <meta property="og:site_name" content="Food Express" />
        <meta property="og:image" content="/assets/preview.jpg" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="M93dY9EuPcQ5AzSYwxc6_el0GwZp_XlDHBhphP6z-7g"
        />
        {description && (
          <meta property="og:description" content={description} />
        )}
      </Head>

      {hasHeader && <Header />}
      {children}
      {hasFooter && <Footer />}
    </div>
  );
};

export default PageLayout;
