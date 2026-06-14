"use client";

import { useState } from "react";
import * as QRCode from "qrcode";
import AdBanner from "../../components/AdBanner";

export default function QRGenerator() {
  const [text, setText] = useState("");
  const [qr, setQr] = useState("");

  async function generateQR() {
    if (!text.trim()) return;

    const url = await QRCode.toDataURL(text);
    setQr(url);
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-2">
          QR Code Generator
        </h1>

        <p className="text-slate-600 mb-10">
          Create and download QR codes for URLs, text, contacts and more.
        </p>

        <div className="bg-white rounded-3xl border shadow-sm p-8">

          <label className="font-medium">
            Enter Text or URL
          </label>

          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="https://example.com"
            className="w-full border rounded-xl p-4 mt-2"
          />

          <button
            onClick={generateQR}
            className="
              mt-6
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-8
              py-4
              rounded-xl
              transition
              font-semibold
            "
          >
            Generate QR Code
          </button>

        </div>

        {qr && (

          <div className="bg-white rounded-3xl border shadow-sm p-8 mt-8">

            <h2 className="text-2xl font-bold mb-6">
              Your QR Code
            </h2>

            <div className="flex justify-center">

              <img
                src={qr}
                alt="QR Code"
                className="bg-white p-6 rounded-2xl border"
              />

            </div>

            <div className="flex justify-center">

              <a
                href={qr}
                download="qrcode.png"
                className="
                  mt-6
                  bg-green-600
                  hover:bg-green-700
                  text-white
                  px-8
                  py-3
                  rounded-xl
                  transition
                  font-semibold
                "
              >
                Download QR Code
              </a>

            </div>

          </div>

        )}

        <AdBanner />

        <section className="bg-white rounded-3xl p-8 border shadow-sm mt-8">

          <h2 className="text-3xl font-bold mb-6">
            What Is a QR Code?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            QR Codes are two-dimensional barcodes that can store links,
            text, contact information, Wi-Fi credentials and much more.
          </p>

          <p className="text-slate-600 leading-relaxed mb-4">
            They can be scanned instantly using a smartphone camera,
            making them ideal for sharing information quickly.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Businesses, websites and marketers use QR Codes every day
            to connect users to digital content with a single scan.
          </p>

        </section>

      </div>

    </main>
  );
}