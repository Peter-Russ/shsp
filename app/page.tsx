import style from './page.module.css'
import Cards from '@components/Cards/VideoCards'
import prisma from '@lib/prismadb'

export default async function Home() {

  const videos = await prisma.video.findMany();

  return (
    <section className={style.section}>
      <div className={style.row}>
        {videos.map((video) => {
          {/* @ts-expect-error Server Component */}  
            return <Cards {...video} />
          }
        )}
      </div>
    </section>
  )
}

