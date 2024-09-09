import Wrapper from "@/components/wrapper";
import { FaPaperPlane } from "react-icons/fa";
import { BsFillTelephoneFill, BsPersonFill } from "react-icons/bs";
import Link from "next/link";
import { IoLocationSharp } from "react-icons/io5";

export const Navigation = () => {
    return (
<nav>
        <div>
            <Wrapper>
                <ul className="flex h-[100px] justify-between items-center">
                    <Link href={"/"} className="flex flex-row items-center gap-4">
                        <img className="max-h-[50px]" src="/images/logo.png" alt="logo" />
                        <h1>Foreningen for Dyrevelfærd</h1>
                    </Link>

                    <span className="flex flex-row gap-[25px] text-[#333333]">
                        <li><Link href="/houses">Hjem</Link></li>
                        <li><Link href="/agents">Om os</Link></li>
                        <li><Link href="/favourites">Bliv Frivillig</Link></li>
                        <li><Link href="/woof">Dyr i nød?</Link></li>
                        <li><Link href="/miav">Adopter et dyr</Link></li>
                    </span>

                </ul>
            </Wrapper>
        </div>
    </nav>
    )
}

export const Footer = () => {
    return (
        <footer>
        <div className="bg-[#e2edff] relative">
            <Wrapper>
            <div className="flex flex-row gap-[26vw]">
                <div className="pt-[25px]">
                    <h5>KONTAKT</h5>
                    <span>
                        <p>Tornebuskvej 22, 1.</p>
                        <p>1131 København K</p>
                        <p>CVR: 22446187</p>
                        <p>Husk at du kan få fradrag for donationer på op til 16.600 kr.</p>
                    </span>
                </div>

                <div className="pt-[25px]">
                    <h5>PARTNERE</h5>
                    <span className="a2 flex flex-col">
                        <Link href="https://animaapp.com/">Anima</Link>
                        <Link href="https://www.worldanimalprotection.org/">World Animal Protection</Link>
                        <Link href="https://fødevarestyrelsen.dk/">Fødevarestyrelsen</Link>
                        <Link href="https://www.faktalink.dk/">Faktalink</Link>
                    </span>
                </div>
            </div>    
                <div className="flex h-[90px] justify-center items-center">
                    <p className="flex items-center">©2020 - Foreningen for Dyrevelfærd</p>
                </div>
            </Wrapper>
        </div>
    </footer>
    )
}