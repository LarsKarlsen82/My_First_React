import { PageTitle } from "../PageTitle/PageTitle";
import { Greeting } from "../Greeting/Greeting";

export const Main = () => {
    const names = ["Heinz", "Anders", "Tanja", "Indo", "Patrick","Gunnar"];

    return (

        <main>
    <PageTitle pagetitle="Velkommen til min side som er styret af props" />
    {names.map((name, index) => (
        <Greeting key={index} name={name} />
      ))}

        </main>
    
    )
    } 