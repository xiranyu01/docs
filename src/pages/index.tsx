import { Redirect } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import React from 'react';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return <Redirect to="/docs/intro" />;

  return (
    <header className="bg-blue-500">
      <div className="container mx-auto text-center py-24">
        <h1 className="text-3xl font-bold text-white">刻行</h1>
        <h1 className="text-4xl font-bold text-white">{siteConfig.title}</h1>
      </div>
    </header>
  );
}

export default function Home() {
  // const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Home" description="coScene Documentation Site">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
