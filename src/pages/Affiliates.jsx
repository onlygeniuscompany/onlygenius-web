import AffiliateBenefits from "../components/Affiliates/Benefits"
import AffiliateDashboardPreview from "../components/Affiliates/DashboardPreview"
import AffiliateForm from "../components/Affiliates/From"
import AffiliateProgram from "../components/Affiliates/Program"


export default function Affiliates(){
    return(
        <div className="bg-[#09090B] text-[#FAFAFA] font-inter w-full overflow-x-hidden min-h-screen">
            <div className="max-w-[1280px] mx-auto px-4 w-[90%]">
                <AffiliateProgram/>
                <AffiliateBenefits/>
                <AffiliateDashboardPreview/>
                <AffiliateForm/>
            </div>
        </div>
   
    )
}