import { NextRequest, NextResponse } from 'next/server';

//this is for reading the string
//Processes the ID from the query string
async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams
  const id:any = searchParams.get("id")
  const idAsNumber = parseInt(id)

  const nextid = idAsNumber + 1;

//this is for reading the button clicked
/*async function getResponse(req: NextRequest): Promise<NextResponse> {
const data = await req.json();
const id = data.untrustedData.buttonIndex;*/



// have my two cases, route to the right one
  if(idAsNumber === 1){
      return new NextResponse(`<!DOCTYPE html><html><head>
    <title>Multichain Volume</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_BASE_URL}/chains.png" />
    <meta property="fc:frame:button:1" content="More Info" />
    <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/run?id=${nextid}" />
  </head></html>`);
  } else if(idAsNumber === 2) {
  return new NextResponse(`<!DOCTYPE html><html><head>
    <title>Layer1 Layer2</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_BASE_URL}/edit.png" />
    <meta property="fc:frame:button:1" content="Check it out" />
    <meta property="fc:frame:link" content="https://oku.trade/app" />
  </head></html>`);
  } 
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';