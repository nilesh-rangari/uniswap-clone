function Navbar() {
    return(
        <header className="w-full px-0 py-6 h-[72px] bg-[#191b1fe6] backdrop-blur-sm border-b border-[#191b1f] sticky">
          <div>
            <nav>
              <a className="px-4 py-4 text-[#a3a3a3] hover:text-white cursor-pointer" href="/ecosystem">Ecosystem</a>
              <a className="px-4 py-4 text-[#a3a3a3] hover:text-white cursor-pointer" href="/community">Community</a>
              <a className="px-4 py-4 text-[#a3a3a3] hover:text-white cursor-pointer" href="/governance">Governance</a>
              <a className="px-4 py-4 text-[#a3a3a3] hover:text-white cursor-pointer" href="/developers">Developers</a>
              <a className="px-4 py-4 text-[#a3a3a3] hover:text-white cursor-pointer" href="https://blog.uniswap.org">Blog</a>
              <a className="px-4 py-4 text-[#a3a3a3] hover:text-white cursor-pointer" href="/faq">FAQ</a>
              <a className="px-4 py-4 text-[#a3a3a3] hover:text-white cursor-pointer" href="https://boards.greenhouse.io/uniswaplabs" target="_blank">Jobs</a>
              <a target="_blank" href="https://app.uniswap.org" className="px-2 py-3 ml-4 rounded-lg cursor-pointer text-white bg-[#ff007a]">Launch App</a>
            </nav>
            <div className="">
              <button className="">Menu</button>
            </div>
          </div>
        </header>
    )
}

export default Navbar