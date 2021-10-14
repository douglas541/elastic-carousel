import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { useRef } from 'react';
import Carousel from 'react-elastic-carousel';

export default function Home() {
  const carouselRef = useRef(null);
  let resetTimeout;

  const Item = ({ children }) => {
    return (
      <div className={styles.card}>
        <h1>{children}</h1>
      </div>
    )
  };

  const items = [<Item key="0">Isso é um teste</Item>, <Item key="1">Isso é um teste</Item>, <Item key="2">Isso é um teste</Item>];

  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the last item, go to first item
      carouselRef.current.goTo(0);
    }
  };

  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      // we hit the first item, go to last item
      carouselRef.current.goTo(items.length);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="slider" content="A test app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Carousel
        ref={carouselRef}
        enableAutoPlay
        autoPlaySpeed={5000}
        tiltEasing
        onNextStart={onNextStart}
        onPrevStart={onPrevStart}
        disableArrowsOnEnd={false}
      >
        {items}
      </Carousel>

    </div>
  )
}
