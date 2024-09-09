import Wrapper from "@/components/wrapper";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export const FrontComp1 = () => {
    return (
        <Wrapper>
            <article className="flex flex-row justify-between pb-[40px]">
                <div className="flex flex-col w-[450px]">
                    <h4>Om os</h4>
                    <span>
                        <p>Vi kæmper for at nedbringe antallet af dyr i nød og sikre, at alle nødstedte dyr får den rette hjælp. Vi arbejder med et landsdækkende netværk af frivillige, internater og plejestationer, der hver dag hjælper dyr.</p>
                    </span>
                </div>

                <div className="flex flex-col w-[450px]">
                    <h4>DYR & MENNESKER</h4>
                    <span className="flex flex-col gap-7">
                        <p>Vi arbejder for at øge respekten for dyr i samfundet og synliggøre deres unikke værdi for mennesker. Dyr skaber tryghed, styrker sociale relationer og sikrer en aktiv hverdag for deres ejere.</p>
                        <p>Med dyr følger ansvar, derfor arbejder vi proaktivt med oplysning om ansvarligt ejerskab, så hverken dyr eller mennesker kommer i klemme i en dyreværnssag. Bag hver femte sag står en ulykkelige menneskeskæbne, som med den rette hjælp vejledning måske kunne være undgået.</p>
                    </span>
                </div>

                <div className="flex flex-col w-[440px]">
                    <h4>MAD & FORBRUG</h4>
                    <span className="flex flex-col gap-7">
                        <p>Vi kæmper for en mere naturlig fødevareproduktion og en bæredygtig madkultur med fokus på kvalitet, omtanke og respekt for dyr og natur. Det er vores mål, at hele Danmarks fødevareproduktion bliver omlagt til enten friland eller økologi og at danskernes forbrug af kød, æg- og mejeriprodukter i DK falder.</p>
                        <p>Dansk fødevareproduktion er drevet af et ensidigt fokus på vækst, økonomi og lave omkostninger. I dag er 99% af landbrugene intensiv storproduktion med store
                            konsekvenser for dyrene til følge. De bliver behandlet som produktionsenheder - ikke levende væsner. Det betyder, at millioner af dyr i Danmark lever under stærkt kritisable forhold.</p>
                    </span>
                </div>
            </article>
        </Wrapper>
    );
}

export const FrontComp2 = () => {
    return (
            
            <div className="bg-[#e2edff] w-full h-[100%]">
            <Wrapper>
                <h6 className="py-[20px]">Bliv Frivillig</h6>

                <article className="flex flex-row justify-between h-[880px] pb-[30px]">

                    <div className="w-[440px] h-[100%] border-l border-r border-[#d7d7d7]  bg-white relative rounded">
                        <div className="bg-[#f7f7f7] w-full border-t border-b border-[#d7d7d7] p-[20px] rounded"><p>DYREREDDER</p></div>
                        <div className="p-[20px]">
                            <img src="/Images/front1.png" width={"100%"} alt="big house" className="rounded pb-[20px]" />
                            <p className="text-[#4d4d4d]">En central del af foreningens arbejde med dyreredning, udføres af dyreredningsbilen, som hovedsageligt køres af frivillige. Bilen assisterer med hjælp til nødstedte dyr og i sager, hvor henvender ikke selv har mulighed for at bringe dyret til nærmeste dyrlæge eller vildtplejestation.</p>
                        </div>
                        <div className="bg-[#f7f7f7] border border-[#d7d7d7] rounded absolute bottom-0 p-[20px]"><p className="text-[#8c92a1] italic">OBS: Vi har været så heldige at få rigtig mange ansøgning og har derfor lukket midlertidig for nye.</p></div>
                    </div>

                    <div className="w-[440px] h-[100%] border-l border-r border-[#d7d7d7]  bg-white relative rounded">
                        <div className="bg-[#f7f7f7] w-full border-t border-b border-[#d7d7d7] p-[20px] rounded"><p>KREDSFORMAND</p></div>
                        <div className="p-[20px]">
                            <img src="/Images/front2.png" width={"100%"} alt="big house" className="rounded pb-[20px]" />
                            <p className="text-[#4d4d4d]">For at være frivillig i Dyrenes Beskyttelse kræver det, at du har et stort engagement og viden om dyr og dyrevelfærd. Du skal have en god vurderingsevne og kunne indgå i dialog. Derudover skal du være klar til at afse en del af din fritid på at arbejde med lokale dyreværnssager. I oplæringstiden vil din titel være kredsassistent, hvor du vil blive støttet af nærmeste kredsformand i dit arbejde. Herefter får du mulighed for selv at blive kredsformand.</p>
                        </div>
                        <div className="bg-[#f7f7f7] border border-[#d7d7d7] rounded absolute bottom-0 p-[20px] w-[100%]"></div>
                    </div>

                    <div className="w-[440px] h-[100%] border-l border-r border-[#d7d7d7]  bg-white relative rounded">
                        <div className="bg-[#f7f7f7] w-full border-t border-b border-[#d7d7d7] p-[20px] rounded"><p>BLIV INTERNATFRIVILLIG</p></div>
                        <div className="p-[20px]">
                            <img src="/Images/front3.png" width={"100%"} alt="big house" className="rounded pb-[20px]" />
                            <p className="text-[#4d4d4d]">Hverdagen på vores otte internater er travl, og opgaverne står i kø. Derfor er vi taknemmelige for, at der er mennesker, som har lyst til at donere deres tid til at gøre en forskel for dyrene som frivillig eller plejefamilie. Vores internater har ofte brug for hjælp til at passe killinger, hunde eller andet. Ligesom der også kan være brug for hundeluftere og anden hjælp på internatet.</p>
                        </div>
                        <div className="bg-[#f7f7f7] border border-[#d7d7d7] rounded absolute bottom-0 p-[20px] w-[100%]"></div>
                    </div>

                </article>
            </Wrapper>
        </div>
    );
}

export const FrontComp3 = () => {
    return (
        <div className="w-full relative flex flex-col">
            <img className=" object-cover w-full h-full" src="/Images/phonebg.jpg" />
            <Wrapper>
                <div className="absolute flex pt-[100px] top-0 flex-col gap-6">
                    <h2 className="text-[38px] w-[350px]">Hold dig opdateret på salgsprocessen</h2>
                    <p className="w-[650px] text-white">Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den ansvarlige mægler eller butik med vores app. Her kan du også se statistik på interessen for din bolig i alle vores salgskanaler.</p>
                    <div className="flex flex-row gap-4">
                        <button className="bg-white flex justify-center items-center gap-1 text-[#162A41] w-[180px]"><FaGooglePlay className="text-[25px]" /><h3 className="text-[18px]">Google Play</h3></button>
                        <button className="bg-none border flex justify-center items-center border-white w-[180px]"><FaApple className="text-[25px]" /><h3 className="text-[18px] text-white">Apple Store</h3></button>
                    </div>


                </div>
            </Wrapper>
        </div>
    );
}