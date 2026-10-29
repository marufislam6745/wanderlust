import React, { Suspense } from 'react';
import Fetchbook from '@/components/Fetchbook';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

interface Tour {
    _id: string,
    name: string,
    country: string,
    category: string,
    price: string,
    duration: string,
    departuredate: string,
    image: string,
    description: string,
}


const Detailspage = async ({ params }: { params: Promise<{ bookId: string }> }) => {
    const { bookId } = await params

    const jwtToken=await auth.api.getToken({
        headers:await headers()
    })
    //console.log(jwtToken?.token)
    const res = await fetch(`http://localhost:5000/destinations/${bookId}`,{
        headers:{
            authorization: `Bearer ${jwtToken?.token}`,
        }
    })
    const data: Tour = await res.json()

    return (
        <Suspense fallback={<li>Loading...</li>}>
            <Fetchbook data={data}></Fetchbook>
        </Suspense>
    );
}
/* Highlight Component */


export default Detailspage;