import Image from 'next/image';
import Link from 'next/link';
import { pastries } from '../database/pastries';

// import styles from './page.module.scss';

export const metadata = {
  title: 'Pastries',
  description: 'This is my Pastries page',
};

export default function PastriesPage() {
  return (
    <>
      <h1>Pastries</h1>
      <main>
        {pastries.map((pastry) => {
          return (
            <div key={pastry.id}>
              <Link href={`/pastries/${pastry.name}`}>
                <h2>{pastry.name}</h2>
              </Link>
              <Link href={`/pastries/${pastry.name}`}>
                <Image
                  src={`${pastry.name}.png`}
                  alt={`${pastry.name} image`}
                  height="200"
                  width="200"
                />
              </Link>
              <h3>{pastry.price}</h3>
            </div>
          );
        })}
      </main>
    </>
  );
}
