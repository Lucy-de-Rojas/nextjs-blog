

import Head from "next/head";
import Image from 'next/image';
import styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';







const name ="Lucy";
export const siteTitle = "lucy next site";



export default function Layout({children, home}) {

return (
    <div className={styles.container}>
        <Head>
            <title>{siteTitle}</title>
        </Head>


        <header className={styles.header}>
            {
                home ? (
                    <>
                        <Image
                            priority
                            src="/images/cat.jpeg"
                            width={144}
                            height={144}
                            alt={name}
                            className={utilStyles.borderCircle}
                            />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    
                    
                    </>
                ):(
                    <>
                    <Link href="/">
                        <a>
                            <Image
                                priority
                                src="/images/cat.jpeg"
                                width={108}
                                height={108}
                                alt={name}
                                className={utilStyles.borderCircle} />
                        </a>
                    </Link>

                    <h2 className={utilStyles.headingLg}>

                        <Link href="/">
                            <a className={utilStyles.colorInherit}> {name}</a>
                        </Link>
                    </h2>
                    
                    </>
                )
            }


        </header>



        <main>{children}</main>


        {!home && (
            <div>


                <Link href="/">
                    <a>Back home</a>
                </Link>
            </div>

        )}


    </div>
)


}































































































