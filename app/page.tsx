import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "More Info"
    }
  ],
  // choosing the inital image
  image: `${process.env.NEXT_PUBLIC_BASE_URL}/launch1.png`,
  // post_url tells the frame where to send the metadata, and in this case, what the id is
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/run?id=1`,
});

// Description of the frame, not on the frame
export const metadata: Metadata = {
  title: 'Oku Has the Best Rates Onchain',
  description: 'A frame displaying the announcement',
  openGraph: {
    title: 'Oku Has the Best Rates Onchain',
    description: 'A frame displaying the announcement',
    images: [`${process.env.NEXT_PUBLIC_BASE_URL}/launch.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <a href= "https://www.oku.trade/app"> Trade Now</a>
    </>
  );
}