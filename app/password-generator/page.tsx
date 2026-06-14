"use client";

import { useState } from "react";
import AdBanner from "../../components/AdBanner";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);

  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);

  function generatePassword() {
    let chars = "abcdefghijklmnopqrstuvwxyz";

    if (includeUppercase) {
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (includeNumbers) {
      chars += "0123456789";
    }

    if (includeSymbols) {
      chars += "!@#$%^&*()_+-=[]{}";
    }

    let result = "";

    for (let i = 0; i < length; i++) {
      result += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setPassword(result);
  }

  function copyPassword() {
    navigator.clipboard.writeText(password);
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-2">
          Password Generator
        </h1>

        <p className="text-slate-600 mb-10">
          Generate strong, secure and random passwords instantly.
        </p>

        <div className="bg-white rounded-3xl p-8 border shadow-sm">

          <label className="font-medium">
            Password Length
          </label>

          <input
            type="range"
            min="8"
            max="64"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full mt-3"
          />

          <div className="text-center text-2xl font-bold text-blue-600 mb-8">
            {length} Characters
          </div>

          <div className="space-y-4">

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={() =>
                  setIncludeUppercase(!includeUppercase)
                }
              />
              Uppercase Letters (A-Z)
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() =>
                  setIncludeNumbers(!includeNumbers)
                }
              />
              Numbers (0-9)
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() =>
                  setIncludeSymbols(!includeSymbols)
                }
              />
              Special Symbols (!@#$)
            </label>

          </div>

          <button
            onClick={generatePassword}
            className="
              mt-8
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
            Generate Password
          </button>

        </div>

        {password && (
          <div className="bg-white rounded-3xl p-8 border shadow-sm mt-8">

            <h2 className="text-2xl font-bold mb-4">
              Generated Password
            </h2>

            <div className="
              bg-slate-100
              p-5
              rounded-xl
              break-all
              text-lg
              font-mono
            ">
              {password}
            </div>

            <button
              onClick={copyPassword}
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
              Copy Password
            </button>

          </div>
        )}

        <AdBanner />

        <section className="bg-white rounded-3xl p-8 border shadow-sm mt-8">

          <h2 className="text-3xl font-bold mb-6">
            Why Use Strong Passwords?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            Strong passwords help protect your accounts from hackers,
            data breaches and unauthorized access.
          </p>

          <p className="text-slate-600 leading-relaxed mb-4">
            A secure password should contain a combination of uppercase
            letters, lowercase letters, numbers and special symbols.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Using a unique password for every account is one of the
            best security practices you can follow online.
          </p>

        </section>

      </div>

    </main>
  );
}