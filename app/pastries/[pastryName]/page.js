import Image from 'next/image';
import { NotFound } from 'next/navigation';
import { pastries } from '../../database/pastries';

export default function pastryPage(props) {
  const singlePastry = pastries.find((pastry) => {
    return pastry.firstName.toLowerCase === props.params.pastryName;
  });

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
    </div>
  );
}
