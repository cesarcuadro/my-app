'use client'; // error components must be CLIENT components

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    // TODO research what reset and void does
    reset: () => void;
}) {
    useEffect(() => {
        console.log(error)
    }, [error])
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button
                onClick={
                    () => reset
                }
            >
                Try again!
            </button>
        </div>
    )
}