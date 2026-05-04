import "./global.css";

export const metadata ={
    title: "A Simple Next.js task",
    description: "A simple Next.js 13.4 app router example",
}

export default function RootLayout({ children}) {
    return (
        <html lang = "en">
            <body>{children}</body>
        </html>
    );
}