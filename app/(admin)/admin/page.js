
export const dynamic = "force-dynamic";

import { Suspense } from "react";import Form from "@/components/form";
const Main1=()=>{
    return(
        <div className="aaaa">
        <Suspense fallback={<div>Loading...</div>}>
              <Form />
      </Suspense>
        </div>
    );
}

export default Main1;