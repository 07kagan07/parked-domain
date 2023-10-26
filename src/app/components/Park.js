"use client";

import React from "react";
import { useEffect, useState } from "react";

const Park = () => {
  const [content, setContent] = useState({
    domain: "",
    name: "",
    phone: "",
    offer: "",
  });

  const handleChange = (e) => {
    setContent({
      ...content,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(content);
  };

  useEffect(() => {
    const domain = window.location.host;
    setContent({
      ...content,
      domain: domain,
    });
  }, []);

  const values = Object.values(content);

  return (
    <main className="main">
      <div className="bg-domain flex justify-center items-center">
        <h4 className="bg-[#82b37a] py-2 px-5 rounded-md text-white shadow-form text-center text-xl">
          {content.domain}
          <hr />
          <p className="text-lg">Bu Domain Satılıktır ! <br/> 05455206512</p>
        </h4>
      </div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-2xl bg-form  gap-3 justify-center items-center py-5 px-10 rounded-md "
        >
          <input
            type="hidden"
            name="domain"
            value={content.domain ? content.domain : ""}
          />
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Adınız</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              className="py-2 px-4 rounded border-2 border-[#82b37a]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="tel">Telefon</label>
            <input
              type="text"
              id="tel"
              name="phone"
              onChange={handleChange}
              className="py-2 px-4 rounded border-2 border-[#82b37a]"
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <label htmlFor="offer">Teklifiniz</label>
            <div className="relative">
              <input
                type="number"
                id="offer"
                name="offer"
                onChange={handleChange}
                className="py-2 px-4 rounded border-2 border-[#82b37a]"
              />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 px-3">
                TL
              </div>
            </div>
          </div>
          <button
            // disabled={values.includes("")}
            disabled
            className="px-5 py-2 border-2 rounded-lg border-[#82b37a] hover:bg-[#82b37a] hover:text-white disabled:bg-[#686A6C] disabled:text-[#b3b7bb] disabled:border-[#686A6C]"
            type="submit"
          >
            Teklifi Gönder
          </button>
        </form>
      </div>
    </main>
  );
};

export default Park;
