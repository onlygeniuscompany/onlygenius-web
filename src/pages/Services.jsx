import Conversion from "../components/Conversion"
import CustomBotDevelopment from "../components/Services/CustomBot"
import Hero from "../components/Services/Hero"
import RealAccountManagement from "../components/Services/RealAccountMgm"
import PerformanceAccessModal from "../components/Services/InfoModal";


export default function Services(){
    return(
        <div>
                <Hero Modal={PerformanceAccessModal}/>
                <RealAccountManagement/>
                <CustomBotDevelopment/>
                <Conversion/>
        </div>
        )
}