import Destinationdata from '@/components/Destinationdata';
import React, { Suspense } from 'react';



const page = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/destinations`)
    const data = await res.json()
    // console.log(data)
    return (
        <Suspense fallback={<li>Loading...</li>}>
            <Destinationdata data={data}></Destinationdata>
        </Suspense>
    );
};

export default page;