"use client";

import { useState } from "react";
import AdBanner from "../../components/AdBanner";

export default function PercentageCalculator() {
  const [value1, setValue1] = useState(100);
  const [percent1, setPercent1] = useState(10);

  const [value2, setValue2] = useState(100);
  const [value3, setValue3] = useState(200);

  const [value4, setValue4] = useState(100);
  const [percent2, setPercent2] = useState(10);

  const result1 = (value1 * percent1) / 100;
  const result2 = value3 !== 0 ? (value2 / value3) * 100 : 0;
  const result3 = value4 * (1 + percent2 / 100);

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-2">
          Percentage Calculator
        </h1>

        <p className="text-slate-600 mb-10">
          Calculate percentages, increases, decreases and percentage ratios instantly.
        </p>

        <div className="space-y-8">

          {/* CARD 1 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border">

            <h2 className="text-2xl font-bold mb-6">
              What is X% of Y?
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <input
                type="number"
                value={percent1}
                onChange={(e) => setPercent1(Number(e.target.value))}
                className="border rounded-xl p-3"
              />

              <input
                type="number"
                value={value1}
                onChange={(e) => setValue1(Number(e.target.value))}
                className="border rounded-xl p-3"
              />

            </div>

            <div className="mt-6 p-4 rounded-xl bg-slate-100">

              <p className="text-sm text-slate-500">
                Result
              </p>

              <p className="text-3xl font-bold text-blue-600">
                {result1.toFixed(2)}
              </p>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border">

            <h2 className="text-2xl font-bold mb-6">
              X is what % of Y?
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <input
                type="number"
                value={value2}
                onChange={(e) => setValue2(Number(e.target.value))}
                className="border rounded-xl p-3"
              />

              <input
                type="number"
                value={value3}
                onChange={(e) => setValue3(Number(e.target.value))}
                className="border rounded-xl p-3"
              />

            </div>

            <div className="mt-6 p-4 rounded-xl bg-slate-100">

              <p className="text-sm text-slate-500">
                Result
              </p>

              <p className="text-3xl font-bold text-blue-600">
                {result2.toFixed(2)}%
              </p>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border">

            <h2 className="text-2xl font-bold mb-6">
              Increase by Percentage
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <input
                type="number"
                value={value4}
                onChange={(e) => setValue4(Number(e.target.value))}
                className="border rounded-xl p-3"
              />

              <input
                type="number"
                value={percent2}
                onChange={(e) => setPercent2(Number(e.target.value))}
                className="border rounded-xl p-3"
              />

            </div>

            <div className="mt-6 p-4 rounded-xl bg-slate-100">

              <p className="text-sm text-slate-500">
                Result
              </p>

              <p className="text-3xl font-bold text-green-600">
                {result3.toFixed(2)}
              </p>

            </div>

          </div>

        </div>

        <AdBanner />

        <section className="bg-white rounded-3xl p-8 border shadow-sm mt-8">

          <h2 className="text-3xl font-bold mb-6">
            How To Calculate Percentages
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            Percentages are used every day in finance, shopping,
            discounts, taxes, investments and statistics.
          </p>

          <p className="text-slate-600 leading-relaxed mb-4">
            To find a percentage of a value, multiply the value by
            the percentage and divide by 100.
          </p>

          <p className="text-slate-600 leading-relaxed">
            This calculator helps you quickly solve the most common
            percentage calculations without doing the math manually.
          </p>

        </section>

      </div>

    </main>
  );
}