import { notFound } from 'next/navigation';
import { getPastry } from '../../../database/pastries';
import Pastry from './Pastry';

export const dynamic = 'force-dynamic';

export async function generateMetadata(props) {
  const singlePastry = await getPastry(props.params.pastryId);
  console.log(props.params.pastryId);

  return {
    title: `${singlePastry.name} page`,
    description: ` A single page dedicated to ${singlePastry.name}`,
  };
}
// export const metadata = {
//   title: 'Pastry',
//   description: 'This is my Pastry page',
// };

export default async function PastryPage({ params }) {
  const singlePastry = await getPastry(params.pastryId);

  // const singlePastry = pastries.find((pastry) => {
  //   return pastry.name.toLowerCase() === params.pastryName.toLowerCase();
  // });

  if (!singlePastry) {
    notFound();
  }
  return <Pastry pastry={singlePastry} />;
}
