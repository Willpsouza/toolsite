"use client";

import { useState } from "react";
import AdBanner from "../../components/AdBanner";

export default function UnitConverter() {
  const [value, setValue] = useState(1);
  const [conversion, setConversion] = useState("km-miles");

  function convert() {
    switch (conversion) {
      case "km-miles":
        return `${(value * 0.621371).toFixed(4)} Miles`;

      case "miles-km":
        return `${(value * 1.60934).toFixed(4)} Kilometers`;

      case "kg-lbs":
        return `${(value * 2.20462).toFixed(4)} Pounds`;

      case "lbs-kg":
        return `${(value * 0.453592).toFixed(4)} Kilograms`;

      case "cm-inch":
        return `${(value * 0.393701).toFixed(4)} Inches`;

      case "inch-cm":
        return `${(value * 2.54).toFixed(4)} Centimeters`;

      case "c-f":
        return `${((value * 9) / 5 + 32).toFixed(2)} °F`;

      case "f-c":
        return `${(((value - 32) * 5) / 9).toFixed(2)} °C`;

      default:
        return "";
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-2">
          Unit Converter
        </h1>

        <p className="text-slate-600 mb-10">
          Convert common units instantly and accurately.
        </p>

        <div className="bg-white rounded-3xl border shadow-sm p-8">

          <label className="font-medium">
            Conversion Type
          </label>

          <select
            value={conversion}
            onChange={(e) => setConversion(e.target.value)}
            className="w-full border rounded-xl p-3 mt-2 mb-6"
          >
            <option value="km-miles">
              Kilometers → Miles
            </option>

            <option value="miles-km">
              Miles → Kilometers
            </option>

            <option value="kg-lbs">
              Kilograms → Pounds
            </option>

            <option value="lbs-kg">
              Pounds → Kilograms
            </option>

            <option value="cm-inch">
              Centimeters → Inches
            </option>

            <option value="inch-cm">
              Inches → Centimeters
            </option>

            <option value="c-f">
              Celsius → Fahrenheit
            </option>

            <option value="f-c">
              Fahrenheit → Celsius
            </option>
          </select>

          <label className="font-medium">
            Value
          </label>

          <input
            type="number"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-full border rounded-xl p-3 mt-2"
          />

          <div className="mt-8 bg-slate-100 rounded-2xl p-5">

            <p className="text-sm text-slate-500">
              Result
            </p>

            <p className="text-3xl font-bold text-blue-600 mt-2">
              {convert()}
            </p>

          </div>

        </div>

        <AdBanner />

        <section className="bg-white rounded-3xl p-8 border shadow-sm mt-8">

          <h2 className="text-3xl font-bold mb-6">
            Common Unit Conversions
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            Unit conversion is essential for travel, science,
            engineering, cooking, education and daily life.
          </p>

          <p className="text-slate-600 leading-relaxed mb-4">
            This converter allows you to quickly switch between
            metric and imperial measurement systems.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Popular conversions include kilometers to miles,
            kilograms to pounds, Celsius to Fahrenheit and many others.
          </p>

        </section>

      </div>

    </main>
  );
}