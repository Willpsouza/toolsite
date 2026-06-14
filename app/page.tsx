"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ToolCard from "../components/ToolCard";
import AdBanner from "../components/AdBanner";
import { tools } from "../data/tools";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredTools = tools.filter((tool) =>
    tool.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />

      <main className="min-h-screen bg-slate-50">

        {/* HERO */}

        <section className="relative overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />

          <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">

            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium mb-8">
              🚀 100% Free Online Tools
            </div>

            <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 leading-tight">
              Calculate.
              <br />
              Convert.
              <br />
              Generate.
            </h1>

            <p className="mt-8 text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
              Everything you need in one place.
              Fast, free and beautifully designed online tools.
            </p>

            <div className="max-w-2xl mx-auto mt-12">

              <input
                type="text"
                placeholder="Search a tool..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  w-full
                  px-6
                  py-5
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  shadow-lg
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                  text-lg
                "
              />

            </div>

          </div>

        </section>

        {/* STATS */}

        <section className="max-w-7xl mx-auto px-6 -mt-10">

          <div
            className="
            bg-white
            rounded-3xl
            shadow-lg
            border
            p-8
            grid
            grid-cols-2
            md:grid-cols-4
            gap-6
          "
          >

            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600">
                5+
              </h3>
              <p className="text-slate-500">
                Free Tools
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600">
                0
              </h3>
              <p className="text-slate-500">
                Registration
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600">
                24/7
              </h3>
              <p className="text-slate-500">
                Available
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-blue-600">
                Instant
              </h3>
              <p className="text-slate-500">
                Results
              </p>
            </div>

          </div>

        </section>

        {/* AD #1 */}

        <section className="max-w-7xl mx-auto px-6 py-10">
          <AdBanner />
        </section>

        {/* TOOLS */}

        <section
          id="tools"
          className="max-w-7xl mx-auto px-6 py-14"
        >

          <div className="text-center mb-14">

            <h2 className="text-5xl font-bold text-slate-900 mb-4">
              Popular Tools
            </h2>

            <p className="text-slate-600 text-lg">
              Professional tools designed to save time.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {filteredTools.map((tool) => (
              <ToolCard
                key={tool.link}
                icon={tool.icon}
                title={tool.title}
                description={tool.description}
                link={tool.link}
              />
            ))}

          </div>

        </section>

        {/* AD #2 */}

        <section className="max-w-7xl mx-auto px-6 pb-20">
          <AdBanner />
        </section>

        {/* BENEFITS */}

        <section className="bg-white border-y">

          <div className="max-w-7xl mx-auto px-6 py-24">

            <div className="text-center mb-16">

              <h2 className="text-5xl font-bold mb-4">
                Why ToolNest?
              </h2>

              <p className="text-slate-600 text-lg">
                Built for speed, simplicity and reliability.
              </p>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-slate-50 rounded-3xl p-8">

                <div className="text-5xl mb-4">
                  ⚡
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  Lightning Fast
                </h3>

                <p className="text-slate-600">
                  Get instant results without waiting.
                </p>

              </div>

              <div className="bg-slate-50 rounded-3xl p-8">

                <div className="text-5xl mb-4">
                  🔒
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  Secure
                </h3>

                <p className="text-slate-600">
                  Everything runs directly in your browser.
                </p>

              </div>

              <div className="bg-slate-50 rounded-3xl p-8">

                <div className="text-5xl mb-4">
                  🌎
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  Global Access
                </h3>

                <p className="text-slate-600">
                  Available anytime from anywhere.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="max-w-7xl mx-auto px-6 py-24">

          <div
            className="
            rounded-[40px]
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            text-white
            text-center
            p-16
          "
          >

            <h2 className="text-5xl font-bold mb-6">
              More Tools Coming Soon
            </h2>

            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              We're constantly adding new calculators,
              generators and productivity tools.
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}