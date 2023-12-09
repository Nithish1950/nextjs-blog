import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I’m Rahul,
I’ve been writing for a while now, and it’s become an integral part of my life. My passion for writing started when I was in elementary school. I got a pen and paper and wrote down everything that popped into my head—I couldn’t stop!

Ezoic
As my writing skills improved, so did my confidence as a writer. At first, people thought I was just a kid with a lot of energy; but now they see that writing is more than just something fun to do—it’s something that makes me happy, and gives me clarity on what I want out of life, and helps me make sense of the world around me.

So if you’re interested in hiring me as your writer or if you have any questions about what it’s like to work with me, please feel free to reach out!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
