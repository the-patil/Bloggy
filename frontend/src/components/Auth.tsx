import { Link } from "react-router-dom"

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
    </div>
}