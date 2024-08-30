
function Footer() {
    return (
        <footer className="footer footer-center bg-slate-950 shadow-2xl shadow-yellow-500 text-base-content rounded p-8">
            <h2 className="bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent 
            text-3xl font-extrabold font-mono text-center">
                JeyZ.dev
            </h2>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - JeyZ</p>
            </aside>
            </footer>
    );
}

export default Footer;