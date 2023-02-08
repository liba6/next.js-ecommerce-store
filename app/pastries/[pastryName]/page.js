import Image from 'next/image';
import { notFound } from 'next/navigation';
import AddCartButton from '../../AddButtonComponent';
import { pastries } from '../../database/pastries';
import styles from './page.module.scss';

export default function pastryPage(props) {
  const singlePastry = pastries.find((pastry) => {
    return pastry.name.toLowerCase() === props.params.pastryName;
  });
  console.log('props', props);
  console.log(pastries);
  if (!singlePastry) {
    notFound();
  }
  //    export const metadata = {
  //   title: {singlePastry.name},
  //   description: {`This is my ${singlePastry.name} page'},
  //  };

  return (
    <div className={styles.pastry}>
      <h1>{singlePastry.name}</h1>
      <Image
        data-test-id={`${singlePastry.name} image`}
        src={`/${singlePastry.name}.jpg`}
        alt={`${singlePastry.name} image`}
        width="200"
        height="200"
      />
      <div
        data-test-id={`${singlePastry.name} product-price`}
      >{`Price: $ ${singlePastry.price} `}</div>
      ;<div>{singlePastry.description}</div>
      <AddCartButton />
    </div>
  );
}
