export default function Footer() {
  return (
      <footer className='bg-primary-cream w-full'>
          <div className="px-4 text-center sm:text-left max-w-7xl mx-auto flex flex-col gap-4 border-t border-black/10 font-serif text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between py-6">
             <p>© 2026 Emulsion Financial Solutions</p>
             {/*<p className="flex items-center text-cyan-600">*/}
             {/*  ALL SYSTEMS, ONE LEDGER*/}
             {/*</p>*/}
              <div className='flex items-center sm:flex-row gap-6 mx-auto sm:mx-0'>
                  <p>Privacy</p>
                  <p>Security</p>
                  <p>Terms</p>
              </div>
          </div>
      </footer>
  );
}