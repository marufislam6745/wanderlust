'use client'
import React from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {Button} from "@/components/ui/button"
import { RiDeleteBin6Line } from "react-icons/ri";
import { Tour } from '@/type';
import toast from 'react-hot-toast';
import { redirect } from 'next/navigation';



const DeleteDestination = ({data}:{data:Tour}) => {

    const handleDelete=async ()=>{
        const res= await fetch(`http://localhost:5000/destinations/${data._id}`,{
            method:'DELETE'
        });
        const deletData=res.json()
        console.log(deletData)
        toast.success('Data delete successfully')
        redirect('/destinations')
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger render={<Button variant="outline" className='text-red-500 hover:text-white hover:bg-red-500 border-red-500' />}>
              <RiDeleteBin6Line />  Delete
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete} className='bg-white hover:bg-white text-red-500 border-red-500'><RiDeleteBin6Line /> Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeleteDestination;