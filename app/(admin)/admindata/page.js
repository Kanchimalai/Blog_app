export const dynamic = "force-dynamic";

import { Suspense } from "react";
import Datasee from "@/components/data";
const data=()=>{
    return(
    <div>
         <Suspense fallback={<div>Loading...</div>}>
        <Datasee />
      </Suspense>
    </div>
    )
}
export default data;