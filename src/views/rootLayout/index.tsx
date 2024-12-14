import { useShallow } from 'zustand/react/shallow';
import { Toaster } from '../../components/ui/toaster.js';
import { useStore } from '../../state/store/index.js';
import { CartView } from '../cart/index.js';
import { ConnectWallet } from '../connectWallet/index.js';
import { Search } from '../search/index.js';

const RootLayout = () => {
  const appSettings = useStore(useShallow((state) => state.appSettings));
  return (
    <div
      className={
        'flex flex-col w-screen h-dvh max-h-[90svh] max-w-screen bg-primary-foreground rounded-lg overflow-auto shadow-xl'
      }
    >
      <ConnectWallet />
      {appSettings.isCartViewOpen ? <CartView /> : <Search />}
      <Toaster />
    </div>
  );
};

export default RootLayout;
