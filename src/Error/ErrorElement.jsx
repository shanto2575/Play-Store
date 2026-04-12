import React from "react";
import { Link, useRouteError } from "react-router";

const ErrorElement = () => {
    const error = useRouteError();

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="text-center max-w-xl">

                {/* Error Code */}
                <h1 className="text-8xl font-extrabold text-error">Oops!</h1>

                {/* Title */}
                <h2 className="text-3xl font-bold mt-4">
                    Something went wrong
                </h2>

                {/* Error Message */}
                <p className="text-gray-500 mt-3">
                    {error?.statusText || error?.message || "Unexpected error occurred"}
                </p>

                {/* Illustration */}
                <div className="text-7xl mt-6">🚧</div>

                {/* Buttons */}
                <div className="mt-8 flex gap-4 justify-center">
                    <Link to="/" className="btn btn-primary">
                        Go Home
                    </Link>

                    <button
                        onClick={() => window.location.reload()}
                        className="btn btn-outline"
                    >
                        Reload Page
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorElement;