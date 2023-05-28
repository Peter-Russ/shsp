import styles from './page.module.css'
import Cards from '@components/Cards/Cards'


export default function Home() {
  return (
    <section className={styles.section}>
      <Cards/>
    </section>
  )
}

