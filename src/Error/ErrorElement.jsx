import React from "react";
import { Link, useRouteError } from "react-router";

const ErrorElement = () => {
    const error = useRouteError();

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="text-center max-w-xl">

                <h1 className="text-8xl font-extrabold text-error">Oops!</h1>
                <h2 className="text-3xl font-bold mt-4">
                    Something went wrong
                </h2>
                <p className="text-gray-500 mt-3">
                    {error?.statusText || error?.message || "Unexpected error occurred"}
                </p>
                <div className="text-7xl mt-6">🚧</div>
                <div className="mt-8 flex gap-4 justify-center">
                    <Link to="/" className="btn btn-primary">
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorElement;