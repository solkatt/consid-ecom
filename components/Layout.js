import Head from 'next/head'
import styles from './Layout.module.css'

export default function Layout({ title, metaTags, children }) {

  return (
    <div className={styles.main}>
      <Head>
        <title>{title}</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        {/* {renderMetaTags(startPage.seo.concat(data.site.favicon))} */}
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={styles.container}>
        {children}
      </div>
    </div>

  )
}