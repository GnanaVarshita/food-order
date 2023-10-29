import Image from 'next/image'
import Head from 'next/head';
import Featured from '@/component/Featured';
import Pizzalist from '@/component/Pizzalist';

export default function Home() {
  return (
    <div className='hello'>
   
    <Head>
      <title>Restaurante</title>

    </Head>
          
       <Featured/>
       <Pizzalist/>
    </div>
  )
}
