import React, { useState } from "react";

const Navbar = () => {

    const links = [
        {
            id: 1,
            path: "/",
            link: "Home",
        },
        {
            id: 2,
            path: "doctors",
            link: "doctors",
        },
        {
            id: 3,
            path: "/new",
            link: "Add new doctor"
        }
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-purple-500  ">
            <div>
                <h1 className="text-5xl font-signature ml-2">
                    <a
                        className="link-underline link-underline-black"
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Digi P.Hilfe
                    </a>
                </h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link, path }) => (
                    <li
                        key={id}
                        className="nav-links px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-white duration-200 link-underline"
                    >
                        <a href={path}>{link}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;