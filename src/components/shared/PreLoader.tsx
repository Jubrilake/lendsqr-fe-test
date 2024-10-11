import { Loader2 } from "lucide-react";

const Preloader = () => {
    return ( 
        <div className="w-full grid place-content-center h-[500px]">
          <div className="flex items-center">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <h1>Loading...</h1>
          </div>
        </div>
     );
}
 
export default Preloader;