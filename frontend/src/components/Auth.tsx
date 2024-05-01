import { ChangeEvent } from "react";
import { Link } from "react-router-dom";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
        </div>
        <div className="text-xl font-extrabold">
            create an account
        </div>
        <div className="text-slate-400">
            <Link to={"/signin"} className="pl-2 underline" >Already have an account?</Link>
        </div>
        <LabelledInput label="Username" placeholder="JonDoe@gmail.com" onChange={(e) => {

        }}></LabelledInput>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}