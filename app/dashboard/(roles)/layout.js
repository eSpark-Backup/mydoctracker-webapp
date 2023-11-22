export default function RootLayout({
    children,
  }) {
    return (
      <html lang="en">   
        <body>
            <h1>we are in dashboard</h1>
            {children}
            </body>
      </html>
    )
  }