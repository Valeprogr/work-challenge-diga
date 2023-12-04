import useFetch from "./hooks/useFetch";
import React, { useCallback, useEffect, useState, useRef, MouseEventHandler } from "react";
import { IDoctor } from "./types/doctor";




const Doctors = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const { doctors, hasMore, loading, error } = useFetch(pageNumber)
    console.log(doctors)
    const observer = useRef<IntersectionObserver | null>(null);
    const lastDoctorElemtRef = useCallback((node: any) => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNum => prevPageNum + 1)
            }
        })
        if (node) observer.current.observe(node)
        console.log(node)
    }, [loading, hasMore])
    const scrollDownHandler = (e: any) => {
        setPageNumber(1)
    }

    const deleteDoctorHandeler  = async (id: number) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/doctors/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                mode: 'cors'
            });
            if (res.ok) {
                const responseData = await res.json();
                console.log(responseData);
            } else {
                console.log(`Request failed with status: ${res.status}`);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="v-full">
            <h1 onChange={scrollDownHandler} className="text-2xl font-medium flex justify-center my-8"> List of Doctors</h1>
            <div className="relative overflow-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone Number
                            </th>
                            <th scope="col" className="px-6 py-3">

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((ele, index) => {
                            if (doctors.length === index + 1) {
                                return <tr ref={lastDoctorElemtRef} key={ele.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {ele.id}
                                    </th>
                                    <td className="px-6 py-4">
                                        {ele.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {ele.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {ele.phone}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => deleteDoctorHandeler(Number(ele.id))}>DELETE</button>
                                    </td>
                                </tr>
                            } else {
                                return <tr key={ele.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {ele.id}
                                    </th>
                                    <td className="px-6 py-4">
                                        {ele.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {ele.email}
                                    </td>
                                    <td className="px-6 py-4">
                                        {ele.phone}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick ={() => deleteDoctorHandeler(Number(ele.id))}>DELETE</button>
                                    </td>
                                </tr>
                            }
                        })
                        }


                    </tbody>
                </table>
            </div>



            <div>{loading && 'Loading ...'}</div>
            <div>{error && 'Error'}</div>
        </div>

    )
}

export default Doctors