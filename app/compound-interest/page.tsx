"use client";

import { useState } from "react";
import AdBanner from "../../components/AdBanner";

export default function CompoundInterest() {
  const [initial, setInitial] = useState(1000);
  const [monthly, setMonthly] = useState(100);
  const [rate, setRate] = useState(10);
  const [years, setYears] = useState(10);

  const monthlyRate = rate / 100 / 12;
  const months = years * 12;

  let total = initial;

  for (let i = 0; i < months; i++) {
    total += monthly;
    total *= 1 + monthlyRate;
  }

  const invested = initial + monthly * months;
  const interest = total - invested;

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-2">
          Compound Interest Calculator
        </h1>

        <p className="text-slate-600 mb-10">
          Calculate investment growth with compound interest and monthly contributions.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl p-6 shadow-sm border">

            <div className="mb-4">
              <label className="font-medium">
                Initial Investment
              </label>

              <input
                type="number"
                value={initial}
                onChange={(e) =>
                  setInitial(Number(e.target.value))
                }
                className="w-full border rounded-xl p-3 mt-2"
              />
            </div>

            <div className="mb-4">
              <label className="font-medium">
                Monthly Contribution
              </label>

              <input
                type="number"
                value={monthly}
                onChange={(e) =>
                  setMonthly(Number(e.target.value))
                }
                className="w-full border rounded-xl p-3 mt-2"
              />
            </div>

            <div className="mb-4">
              <label className="font-medium">
                Annual Interest Rate (%)
              </label>

              <input
                type="number"
                value={rate}
                onChange={(e) =>
                  setRate(Number(e.target.value))
                }
                className="w-full border rounded-xl p-3 mt-2"
              />
            </div>

            <div>
              <label className="font-medium">
                Years
              </label>

              <input
                type="number"
                value={years}
                onChange={(e) =>
                  setYears(Number(e.target.value))
                }
                className="w-full border rounded-xl p-3 mt-2"
              />
            </div>

          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border">

            <h2 className="text-2xl font-bold mb-6">
              Results
            </h2>

            <div className="space-y-4">

              <div className="p-4 rounded-xl bg-slate-100">
                <p className="text-sm text-slate-500">
                  Final Amount
                </p>

                <p className="text-3xl font-bold text-blue-600">
                  ${total.toFixed(2)}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-100">
                <p className="text-sm text-slate-500">
                  Total Invested
                </p>

                <p className="text-2xl font-bold">
                  ${invested.toFixed(2)}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-100">
                <p className="text-sm text-slate-500">
                  Interest Earned
                </p>

                <p className="text-2xl font-bold text-green-600">
                  ${interest.toFixed(2)}
                </p>
              </div>

            </div>

          </div>

        </div>

        <AdBanner />

        <section className="bg-white rounded-3xl p-8 border shadow-sm mt-8">

          <h2 className="text-3xl font-bold mb-6">
            What Is Compound Interest?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            Compound interest is the process of earning interest not only on your original investment, but also on the interest accumulated over time.
          </p>

          <p className="text-slate-600 leading-relaxed mb-4">
            The longer your money remains invested, the greater the effect of compounding can become.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Regular monthly contributions can significantly increase your final investment value over the years.
          </p>

        </section>

      </div>

    </main>
  );
}