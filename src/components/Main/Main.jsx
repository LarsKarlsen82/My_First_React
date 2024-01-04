import { PageTitle } from "../PageTitle/PageTitle";
import { Greeting } from "../Greeting/Greeting";

export const Main = () => {

    return (

        <main>
<PageTitle pagetitle="Velkommen til min side som er styret af props" />
<Greeting name="Heinz" />
<Greeting name="Anders" />
<Greeting name="Tanja" />
<Greeting name="Indo" />
<Greeting name="Patrick" />

        </main>
    
    )
    } 