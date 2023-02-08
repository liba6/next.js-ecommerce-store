import Image from 'next/image';
import { NotFound } from 'next/navigation';
import AddCartButton from '../../AddButtonComponent';
import { pastries } from '../../database/pastries';

export default function pastryPage(props) {
  const singlePastry = pastries.find((pastry) => {
    return pastry.name.toLowerCase === props.params.pastryName;
  });
  console.log(props);
  if (!singlePastry) {
    NotFound();
  }
  return (
    <div>
      <h1>{singlePastry.name}</h1>
      <Image
        src={`${singlePastry.name}.jpg`}
        alt={`${singlePastry.name} image`}
        width="200"
        height="200"
      />
      <div>{singlePastry.price}</div>;
      <AddCartButton />
    </div>
  );
}
