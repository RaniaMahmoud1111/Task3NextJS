import NavBar from "@/components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Providers from "./providers";
import BootstrapClient from '@/components/BootstrapClient'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <BootstrapClient/>
          <NavBar />
          <div class="container">{children}</div>
        </Providers>
      </body>
    </html>
  );
}