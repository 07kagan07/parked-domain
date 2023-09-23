"use client"

import { useEffect, useState } from "react";

export default function Home() {
const [domainName,setDomainName]= useState(null);

  useEffect(()=>{
    setDomainName(window.location.host);
  },[])

  return (
    <main className="main">
      <div className="bg-domain flex justify-center items-center">
        <h4 className="bg-[#82b37a] py-2 px-5 rounded-md text-white shadow-form">{domainName}</h4>
      </div>
      <div>
        <form className="flex flex-col text-2xl bg-form  gap-3 justify-center items-center py-5 px-10 rounded-md ">
          <input type="hidden" name="domain" value={domainName?domainName:""} />
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Adınız</label>
            <input
              type="text"
              id="name"
              className="rounded border-2 border-[#82b37a]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="tel">Telefon</label>
            <input
              type="text"
              id="tel"
              className="rounded border-2 border-[#82b37a]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="offer">Teklifiniz</label>
            <input
              type="text"
              id="offer"
              className="rounded border-2 border-[#82b37a]"
            />
          </div>
          <button
            className="px-5 py-2 border-2 rounded-lg border-[#82b37a] hover:bg-[#82b37a] hover:text-white"
            type="submit"
          >
            Teklifi Gönder
          </button>
        </form>
      </div>
    </main>
  );
}
