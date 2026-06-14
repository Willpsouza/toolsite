export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          <div>

            <h3 className="text-3xl font-extrabold mb-4">
              ToolNest
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Fast, free and reliable online tools for everyday use.
            </p>

          </div>

          <div>

            <h4 className="font-bold text-lg mb-4">
              Popular Tools
            </h4>

            <div className="flex flex-col gap-3 text-slate-400">

              <a href="/compound-interest">
                Compound Interest
              </a>

              <a href="/percentage-calculator">
                Percentage Calculator
              </a>

              <a href="/password-generator">
                Password Generator
              </a>

              <a href="/unit-converter">
                Unit Converter
              </a>

              <a href="/qr-generator">
                QR Generator
              </a>

            </div>

          </div>

          <div>

            <h4 className="font-bold text-lg mb-4">
              Legal
            </h4>

            <div className="flex flex-col gap-3 text-slate-400">

              <a href="/about">
                About
              </a>

              <a href="/privacy-policy">
                Privacy Policy
              </a>

              <a href="/terms">
                Terms of Service
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">

          © 2026 ToolNest. All rights reserved.

        </div>

      </div>

    </footer>
  );
}