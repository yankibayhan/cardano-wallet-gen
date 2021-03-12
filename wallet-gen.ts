import * as Cardano from "cardano-wallet";


const MNEMONICS = "crowd captain hungry tray powder motor coast oppose month shed parent mystery torch resemble index"
const PASSWORD = "chicken on the rocks"

// mainnet connect

let settings = Cardano.BlockchainSettings.mainnet();

// entropy recovery

let entropy = Cardano.Entropy.from_english_mnemonics(MNEMONICS)

// wallet recovery

let wallet = Cardano.Bip44RootPrivateKey.recover(entropy, PASSWORD)

// wallet creation

let account = wallet.bip44_account(Cardano.AccountIndex.new(0 | 0x80000000))
let account_public = account.public();

// adress creation

let chain_pub = account_public.bip44_chain(false)
let key_pub = chain_pub.address_key(Cardano.AddressKeyIndex.new(0))
let adress = key_pub.bootstrap_era_address(settings);

console.log("Adress m/bip44/ada/'0/0/0", adress.to_base58())






