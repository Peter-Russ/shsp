import styles from './page.module.css'
import Cards from '@components/Cards/VideoCards'


export default function Home() {
  return (
    <section className={styles.section}>
      {/* @ts-expect-error Server Component */}  
      <Cards />
      
    </section>
  )
}

