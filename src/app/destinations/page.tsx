import Destinationdata from '@/components/Destinationdata';
import React, { Suspense } from 'react';



const page = async () => {
    const res = await fetch(`http://localhost:5000/destinations`)
    const data = await res.json()
    // console.log(data)
    return (
        <Suspense fallback={<li>Loading...</li>}>
            <Destinationdata data={data}></Destinationdata>
        </Suspense>
    );
};

export default page;