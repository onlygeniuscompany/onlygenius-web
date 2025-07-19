import Conversion from "../components/Conversion"
import CustomBotDevelopment from "../components/Services/CustomBot"
import Hero from "../components/Services/Hero"
import RealAccountManagement from "../components/Services/RealAccountMgm"
import SolicitarModal from "../components/Services/SolicitarModal";
import { VPSSection } from "../components/Landing/VpsService";

export default function Services(){
        const redirectToDashboard = () => {
                window.location.href = "https://dashboard.onlygenius.es/trading-accounts";
        };
        return(
                <div>
                <Hero Modal={(props) => <SolicitarModal {...props} redirect={redirectToDashboard}/>} />
                <RealAccountManagement/>
                <CustomBotDevelopment/>
                <VPSSection/>
                <Conversion/>
        </div>
        )
}