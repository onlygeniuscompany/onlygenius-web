import AffiliateBenefits from "../components/Affiliates/Benefits"
import AffiliateDashboardPreview from "../components/Affiliates/DashboardPreview"
import AffiliateForm from "../components/Affiliates/From"
import AffiliateProgram from "../components/Affiliates/Program"


export default function Affiliates(){
    return(
        <div>

                <AffiliateDashboardPreview/>
                <AffiliateProgram/>
                <AffiliateBenefits/>
                <AffiliateForm/>
        </div>
   
    )
}