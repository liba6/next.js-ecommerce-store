import { notFound } from 'next/navigation';
import { getPastry } from '../../database/pastries';
import Pastry from './Pastry';

export const dynamic = 'force-dynamic';

export default async function PastryPage({ params }) {
  // const singlePastry = pastries.find((pastry) => {
  //   return pastry.name.toLowerCase() === params.pastryName.toLowerCase();
  // });

  const singlePastry = await getPastry(params.pastryId);

  if (!singlePastry) {
    notFound();
  }
  return <Pastry pastry={singlePastry} />;
}
