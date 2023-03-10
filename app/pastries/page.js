import Image from 'next/image';
import Link from 'next/link';
import { getPastries } from '../../database/pastries';
import styles from './page.module.scss';

// import styles from './page.module.scss';

export const metadata = {
  title: 'Pastries',
  description: 'This is my Pastries page',
};

export default async function PastriesPage() {
  //   const pastryCookie = cookies().get('pastryCookie');

  //   const pastryCookieParsed = JSON.parse(pastryCookie.value);
  // console.log('pastryCookie', pastryCookie);
  // console.log('pastryCookieparsed', pastryCookieParsed);

  const pastries = await getPastries();
  console.log(pastries);
  return (
    <>
      <h1 className={styles.h1}>Pastries</h1>
      <div>
        <div className={styles.list}>
          {pastries.map((pastry) => {
            return (
              <div key={`pastry-${pastry.id}`}>
                <Link
                  data-test-id="product-{pastry.id}"
                  href={`/pastries/${pastry.id}`}
                >
                  <h2>{pastry.name}</h2>
                </Link>
                <Link href={`/pastries/${pastry.id}`}>
                  <Image
                    src={`/${pastry.name}.jpg`}
                    alt={`${pastry.name} image`}
                    height="200"
                    width="200"
                  />
                </Link>
                <h3>${pastry.price / 100}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
