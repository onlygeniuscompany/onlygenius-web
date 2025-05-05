import Conversion from "../components/Conversion"
import CustomBotDevelopment from "../components/Services/CustomBot"
import Hero from "../components/Services/Hero"
import RealAccountManagement from "../components/Services/RealAccountMgm"


export default function Services(){
    return(
        <div className="bg-[#09090B] text-[#FAFAFA] font-inter w-full overflow-x-hidden min-h-screen">
            <div className="max-w-[1280px] mx-auto px-4 w-[90%]">
                <Hero/>
                <RealAccountManagement/>
                <CustomBotDevelopment/>
                <Conversion/>
            </div>
        </div>
        )
}