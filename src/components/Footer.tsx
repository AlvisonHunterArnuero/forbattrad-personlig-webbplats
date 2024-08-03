export default function Footer() {
    return (
        <footer className="sticky bottom-0 footer footer-center bg-base-300 text-base-content p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by CodeCrafters Labs.</p>
            </aside>
        </footer>
    );
}