import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="error-page flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="error-content text-center bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-6xl font-bold text-red-500 mb-4">{error.status || "404"}</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Oops! {error.statusText || "Page Not Found"}
                </h2>
                <p className="text-gray-600 mb-6">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link
                    to="/"
                    className="home-button bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
                >
                    Go Back to Home
                </Link>
            </div>
        </div>
    );
};

export default Error;