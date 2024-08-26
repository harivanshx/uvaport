import Image from "next/image";
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"


export default function Home() {
  return (<>
   <p  className="text-6xl text-green-500">Hello ASI saas</p>

   <Button> <Mail className="mr-2 h-4 w-4" /> Login with Email</Button>
   <Button variant="outline">Button</Button>
   <br/>
     <Button variant="doms">Button</Button>
     <Button variant="ghost">Button</Button>

  
  </>
  );
}
