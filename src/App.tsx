import { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Watch } from "./components/Watch";

const App: React.FC = () => {
  const [isWalletInstalled, setIsWalletInstalled] = useState<boolean>(false);
  const [account, setAccount] = useState<string | null>(null);

  useEffect(() => {
    if((window as any).ethereum){
      //check if Metamask wallet is installed
      setIsWalletInstalled(true);
    }
    //else
  },[]);

  async function connectWallet(): Promise<void> {
    //to get around type checking
    (window as any).ethereum
      .request({
          method: "eth_requestAccounts",
      })
      .then((accounts : any) => {
          setAccount(accounts[0]);
      })
      .catch((error: any) => {
          alert(`Something went wrong: ${error}`);
      });
  }

  if (account === null) {
    return (
      <div className="App App-header">
        { 
          isWalletInstalled ? (
            <section>
              <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
                <div className="flex flex-wrap items-center mx-auto max-w-7xl">
                  <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                    <div>
                      <div className="relative w-full max-w-lg">
                        <div className="relative">
                          <img className="object-cover object-center mx-auto rounded-lg " alt="hero" src="https://www.devoreapp.com/images/menu.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="
                    flex flex-col
                    items-start 
                    mt-12
                    mb-16
                    text-left
                    lg:flex-grow lg:w-1/2 lg:pl-6
                    xl:pl-24
                    md:mb-0
                    xl:mt-0
                  ">
                    <span className="mb-4 text-xs font-bold tracking-widest text-green-600 uppercase"> WELCOME TO DEVORE</span>
                    <h1 className="
                      mb-8
                      text-4xl
                      font-bold
                      leading-none
                      tracking-tighter
                      text-white
                      md:text-7xl
                      lg:text-5xl
                     ">A Mobile-First web3 Educational Adventure </h1>
                    <p className="mb-8 text-base leading-relaxed text-left text-gray-300"> 
                      Participants who complete the 5 stages get a cool gift at the end. Connect your Metamask wallet to get started.</p>
                    <button type="submit" onClick={connectWallet} className="
                      block
                      px-5
                      py-3
                      text-base
                      font-bold
                      text-white
                      bg-green-600
                      border border-transparent
                      rounded-lg
                      shadow
                      hover:bg-green-700
                      focus:outline-none
                      focus:ring-2
                      focus:ring-white
                      focus:ring-offset-2
                      focus:ring-offset-gray-300
                      sm:px-10
                    "> Connect Your Metamask Wallet
                    </button>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <p>Install Your Metamask wallet</p>
          )
        }

      </div>
    );
  }


  return (
    <div className="App">
      <Watch account={account} />
    </div>
  );
}

export default App;
