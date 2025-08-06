export default function NavBar() {
    return (
        <nav className="w-1/2 flex gap-4 items-center justify-between p-2 rounded-full text-white backdrop-blur-sm bg-white/5 border border-gray-600">
            <div className="flex items-center">
                <img className="w-10 h-10" src="../public/logo.png" alt="Logo" />
            </div>
            <div className="flex space-x-4">
                <ul>Home</ul>
                <ul>About</ul>
                <ul>Projects</ul>
                <ul>Contact</ul>
            </div>

        </nav>
    )
}