import "../styles/globals.css";

//INTRNAL IMPORT
import { NavBar, Footer } from "../components/componentsindex";
import { NFTMarketplaceProvider } from "../context/NFTMarketplaceContext";

const App = ({ Component, pageProps }) => (
  <div>
    <NFTMarketplaceProvider >
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </NFTMarketplaceProvider>
  </div>
);

export default App;
