import { notFound } from 'next/navigation';
import { pastries } from '../../database/pastries';
import Pastry from './Pastry';

export const dynamic = 'force-dynamic';

export default function PastryPage({ params }) {
  const singlePastry = pastries.find((pastry) => {
    return pastry.name.toLowerCase() === params.pastryName.toLowerCase();
  });

  if (!singlePastry) {
    notFound();
  }
  //    export const metadata = {
  //   title: singlePastry.name,
  //   description: `This is my ${singlePastry.name} page',}
  // ;
  return <Pastry pastry={singlePastry} />;
}
