"use client";
import React, { useState } from "react";
import { Meteors } from "@/components/ui/meteors";
import Link from "next/link";

function MusicSchoolContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submited:", { email, message });
  };

  return (
    <div className="min-h-screen text-white bg-zinc-800 py-12 pt-36 flex justify-center items-start">
      <div className="z-10 flex flex-col justify-center items-center w-[50%]">
        <h1 className="text-6xl text-zinc-200 font-bold mb-7 text-center">
          Contact Us
        </h1>
        <p className="w-[80%] text-center text-zinc-400">
          We're here to help with questions about our courses, programs, or
          events.Reach out and let us know how we can assist you in your musical
          journey.
        </p>
        <form onSubmit={handleSubmit} className="w-full flex justify-center items-center flex-col">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email Address"
            className="border-none bg-black/[0.8] mt-5 w-[90%] rounded p-3"
          />
          <textarea
            name="textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Messages"
            className="border-none bg-black/[0.8] mt-5 w-[90%] rounded p-3 h-[40vh]"
          ></textarea>
          <button
            type="submit"
            className="bg-transparent border rounded-lg p-2 text-zinc-200 font-semibold border-zinc-950 flex justify-start mt-4"
          >
            Send Message
          </button>
        </form>
      </div>
      <Meteors number={30} />
    </div>
  );
}

export default MusicSchoolContactUs;
