import Conversion from "../components/Conversion"
import CustomBotDevelopment from "../components/Services/CustomBot"
import Hero from "../components/Services/Hero"
import RealAccountManagement from "../components/Services/RealAccountMgm"
import PerformanceAccessModal from "../components/Services/InfoModal";
import SolicitarModal from "../components/Services/SolicitarModal";
import { VPSSection } from "../components/Landing/VpsService";

export default function Services(){
        return(
                <div>
                <Hero Modal={SolicitarModal}/>
                <RealAccountManagement/>
                <CustomBotDevelopment/>
                <VPSSection/>
                <Conversion/>
        </div>
        )
}