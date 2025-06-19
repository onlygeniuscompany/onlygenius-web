import { VPSSection } from "../components/vps/VpsService";
import Conversion from "../components/Conversion"
import { Hero } from "../components/vps/Hero";
export default function Vps(){
    return(
        <div>
            <Hero/>
            <VPSSection/>
            <Conversion/>
        </div>
    )
}
