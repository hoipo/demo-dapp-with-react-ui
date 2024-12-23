import './App.scss'
import {THEME, TonConnectUIProvider} from "@tonconnect/ui-react";
import {Header} from "./components/Header/Header";
import {TxForm} from "./components/TxForm/TxForm";
import {Footer} from "./components/Footer/Footer";
import {TonProofDemo} from "./components/TonProofDemo/TonProofDemo";
import {CreateJettonDemo} from "./components/CreateJettonDemo/CreateJettonDemo";

function App() {
  // 获取url中的env参数
  const search = new URLSearchParams(window.location.search)
  const universalLink = search.get('universalLink')
  const enableTonProof = search.get('enableTonProof')
  const walletInfo: any = {
    appName: "bybitMiniWallet",
    name: "Bybit Mini Wallet",
    imageUrl: "https://raw.githubusercontent.com/bybit-web3/bybit-web3.github.io/main/docs/images/bybit-logo.png",
    aboutUrl: "https://www.bybit.com/web3",
    universalLink: "https://t.me/unamed001_bot/wallet_dev?attach=wallet",
    bridgeUrl: "https://api-node.bybit.com/spot/api/web3/bridge/ton/bridge",
    // bridgeUrl: "https://www.okx.com/tonbridge/discover/rpc/bridge",
    platforms: ["ios", "android", "macos", "windows", "linux"]
  };

  console.log('universalLink', universalLink);
  if ( universalLink ) {
    walletInfo.universalLink = universalLink
  }

  console.log('walletInfo', walletInfo);
    
  return (
      <TonConnectUIProvider
          manifestUrl="https://hoipo.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json"
          uiPreferences={{ theme: THEME.DARK }}
          walletsListConfiguration={{
            includeWallets: [
              {...walletInfo},
              {
                appName: "bybitTestnetTonWallet",
                name: "Testnet Bybit Wallet",
                imageUrl: "https://raw.githubusercontent.com/bybit-web3/bybit-web3.github.io/main/docs/images/bybit-logo.png",
                aboutUrl: "https://www.bybit.com/web3/",
                universalLink: "https://app.bybit.com/ton-connect/",
                deepLink: "bybitapp://",
                bridgeUrl: "https://api-testnet.bybit.com/spot/api/web3/bridge/ton/bridge",
                platforms: ["ios", "android"]
              }
            ]
          }}
          actionsConfiguration={{
              twaReturnUrl: 'https://t.me/DemoDappWithTonConnectBot/demo'
          }}
      >
        <div className="app">
            <Header initValueTonProof={!!enableTonProof} />
            <TxForm />
            <CreateJettonDemo />
            {!!enableTonProof && <TonProofDemo /> }
            <Footer />
        </div>
      </TonConnectUIProvider>
  )
}

export default App
