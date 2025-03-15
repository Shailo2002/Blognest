import { SigninInput } from "@shailo2002/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../pages/config";
import axios from "axios";



export const Authlogin = () => {
    const navigate = useNavigate();
 const [postInputs, setPostInputs] = useState<SigninInput>({
        username: "",
        password: ""
    });

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);
            navigate("/blogs");
        } catch (e) {
            alert("incorrect input");
        }
    }



    return <div className="h-screen flex flex-col  items-center justify-center">
        <div className="">
            <div className="flex flex-col items-center justify-center p-10">
                <div className=" font-bold text-4xl mb-1">Create an account</div>
                <div className="flex text-l  text-slate-400">
                    <div>Don't have and account?
                        <Link className=" pl-2 underline" to="/signup">SignUp</Link></div>
                </div>
            </div>
            <LabelledInput label="Username" placeholder="exampl@email.com" onChange={(e) => {
                setPostInputs({
                    ...postInputs,
                    username: e.target.value
                })
            }} />

            <LabelledInput label="Password" type={"password"} placeholder="1234" onChange={(e) => {
                setPostInputs({
                    ...postInputs,
                    password: e.target.value
                })
            }} />

            <button onClick={sendRequest} type="button" className="w-full mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign In</button>
        </div>


    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <><div>
        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-black">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
    </div></>
}




