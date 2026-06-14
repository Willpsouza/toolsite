import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/80">

      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          <a
            href="/"
            className="flex items-center"
          >
            <Logo />
          </a>

          <nav className="hidden xl:flex items-center gap-8 text-slate-700 font-medium">

            <a
              href="/"
              className="hover:text-blue-600 transition-colors"
            >
              Home
            </a>

            <a
              href="/compound-interest"
              className="hover:text-blue-600 transition-colors"
            >
              Interest
            </a>

            <a
              href="/percentage-calculator"
              className="hover:text-blue-600 transition-colors"
            >
              Percentage
            </a>

            <a
              href="/password-generator"
              className="hover:text-blue-600 transition-colors"
            >
              Password
            </a>

            <a
              href="/unit-converter"
              className="hover:text-blue-600 transition-colors"
            >
              Converter
            </a>

            <a
              href="/qr-generator"
              className="hover:text-blue-600 transition-colors"
            >
              QR Generator
            </a>

          </nav>

          <div className="flex items-center gap-3">

            <a
              href="#tools"
              className="
                hidden
                md:flex
                items-center
                px-5
                py-3
                rounded-xl
                border
                border-slate-200
                bg-white
                hover:bg-slate-50
                font-semibold
                transition
              "
            >
              All Tools
            </a>

            <a
              href="/compound-interest"
              className="
                hidden
                md:flex
                items-center
                px-5
                py-3
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                text-white
                font-semibold
                shadow-lg
                shadow-blue-600/20
                transition
              "
            >
              Start Now
            </a>

          </div>

        </div>

      </div>

    </header>
  );
}