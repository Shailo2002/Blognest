import { Authlogin } from "../components/Authlogin"
import { Quote } from "../components/Quote"

export const Signin = () => {
    return <div className="grid grid-cols-1 lg:grid-cols-2">
        <div >
            <Authlogin/>

        </div>
        <div className=" hidden lg:block">
            <Quote />
        </div>
    </div>
}