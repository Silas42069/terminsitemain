"use client";
import { FrontComp1, FrontComp2, FrontComp3 } from "@/components/frontpagecomps";
import Wrapper from "@/components/wrapper";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative pb-[15px] flex">
        <img src="/Images/Banner.jpg" width={"100%"} alt="big house" />
        <div className='absolute flex flex-col pt-[70px]'>
          <Wrapper>
            <h2>Foreningen for Dyrevelfærd</h2>
            <h3>Vi specialisere os i dyrevelfærd</h3>
          </Wrapper>

        </div>
      </div>
<FrontComp1/>
<FrontComp2/>

<div className="relative pb-[15px] flex">
        <img src="/Images/Banner2.jpg" width={"100%"} alt="big house" />
        <div className='absolute flex flex-col pt-[70px]'>
          <Wrapper>
            <h2>STÅR DU MED ET DYR I NØD?</h2>
            <h3>Ring til Dyrenes Vagtcentral på 1812 og få råd til hjælp og håndtering af dyr</h3>
          </Wrapper>

        </div>
      </div>

    </>
  );
}
