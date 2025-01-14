import React from "react";

export function Header(){
    return (
        <div className="flex justify-around">
            <div className="flex">
                <h1 className="text-2xl">Shortly</h1>
                <ul>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ul>
            </div>
            <div>
                <div>Login</div>
                <button>Sign Up</button>
            </div>
        </div>
    )
}