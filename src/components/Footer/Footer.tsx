import React from 'react'

const Footer: React.FC  = () => {
  return (
  <div className="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8">
    <div className="border-t border-slate-900/5 py-10">
      <p className="mt-5 text-center text-sm leading-6 text-slate-500">© 2023 Creator Inc. All rights reserved.</p>
      <div className="mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
        <a href="/">Privacy policy</a><div className="h-4 w-px bg-slate-500/20">
          </div>
          <a href="/">Changelog</a>
          </div>
        </div>
      </div>

  )
}

export default Footer