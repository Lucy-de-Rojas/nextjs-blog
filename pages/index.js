import Head from "next/head";
import utilStyles from '../styles/utils.module.css';
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";

import Date from "../components/date";


import Layout, {siteTitle} from "../components/layout";






export async function getStaticProps() {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}












export default function Home({allPostsData}) {
  return (
    <Layout home>

      <Head>
        <title>{siteTitle}</title>
      </Head>


      <section className={utilStyles.headingMd}>
        <p>who cares about intros</p>
        <p>more bulshalanka {' '}
        <Link href="https://nextjs.org/learn">
          <a>next tutorial</a>
        </Link>
        </p>

      </section>





      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>BLOGGG</h2>




<ul className={utilStyles.list}>

  {allPostsData.map(item=> {
    return <li className={utilStyles.listItem} key={item.id}>

      <Link href={`/posts/${item.id}`}><a>{item.title}</a></Link>
      <br />

      <small className={utilStyles.lightText}><Date dateString={item.date} /></small>
      
    </li>
  })}



</ul>
        

       
      </section>







    </Layout>
  )
}
























































