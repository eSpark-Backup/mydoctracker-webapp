export default function AuthLayout({
    children,
  }) {
    return (
      <html lang="en">   
        <body>   
            <div className="h-screen bg-slate-200 flex justify-center items-center">
            {children}
            </div>
            </body>
      </html>
    )
  }