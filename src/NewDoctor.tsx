"use client";
import { IDoctor } from "./types/doctor";
import axios from "axios";
import { useState } from "react";

const NewDoctor = () => {
    //Fai POST request 
    const [data, setData] = useState({
        id: 0,
        name: "",
        email: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        zip: ""
    })



    const onchangeHandler = (e: any) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    }

    const handleSubmit  = async (e: any) => {
        e.preventDefault();

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/doctors`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                mode: 'cors',
                body: JSON.stringify(data),
            });

            // Check if the request was successful (status code 2xx)
            if (res.ok) {
                const responseData = await res.json();
                console.log(responseData);
            } else {
                // Handle error responses (status code other than 2xx)
                console.log(`Request failed with status: ${res.status}`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-gray-100 w-auto h-screen  flex flex-col justify-center items-center align-middle">
            <div className="text-center">
                <form className="flex flex-col bg-white shadow-md rounded-lg  px-20 pt-6 pb-8 mb-4" onSubmit={(e:any) =>handleSubmit(e)}>
                    <h1 className="text-2xl font-medium my-4">Add New Doctor : </h1>
                    <div className="flex mb-4 items-end  justify-between">
                        <label className=" text-gray-700 text-sm font-bold mb-2 " htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={data.email}
                            onChange={onchangeHandler}
                        />
                    </div>
                    <div className="flex mb-4 items-end justify-between">
                        <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name :
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={data.name}
                            onChange={onchangeHandler}
                        />
                    </div>
                    <div className="flex mb-4 items-end justify-between">
                        <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Phone :
                        </label>
                        <input
                            type="text"
                            name="phone"
                            className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={data.phone}
                            onChange={onchangeHandler}
                        />
                    </div>
                    <div className="flex mb-4 items-end justify-between">
                        <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="street">
                            Street :
                        </label>
                        <input
                            type="text"
                            name="street"
                            className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={data.street}
                            onChange={onchangeHandler}
                        />
                    </div>
                    <div className="flex mb-4 items-end justify-between">
                        <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                            City :
                        </label>
                        <input
                            type="text"
                            name="city"
                            className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={data.city}
                            onChange={onchangeHandler}
                        />
                    </div>
                    <div className="flex mb-4 items-end justify-between">
                        <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="state">
                            State :
                        </label>
                        <input
                            type="text"
                            name="state"
                            className="shadow appearance-none border rounded w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={data.state}
                            onChange={onchangeHandler}
                        />
                    </div>
                    <div className="flex mb-4 items-end justify-between">
                        <label className=" text-gray-700 text-sm font-bold mb-2 " htmlFor="zip">
                            Zip :
                        </label>
                        <input
                            type="text"
                            name="zip"
                            className=" shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={data.zip}
                            onChange={onchangeHandler}
                        />
                    </div>
                    <button className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Create</button>
                </form>
            </div>
        </div>
    )
}

export default NewDoctor