"use strict";
exports.__esModule = true;
var Cardano = require("cardano-wallet");
var MNEMONICS = "crowd captain hungry tray powder motor coast oppose month shed parent mystery torch resemble index";
var PASSWORD = "chicken on the rocks";
// mainnet connect
var settings = Cardano.BlockchainSettings.mainnet();
// entropy recovery
var entropy = Cardano.Entropy.from_english_mnemonics(MNEMONICS);
// wallet recovery
var wallet = Cardano.Bip44RootPrivateKey.recover(entropy, PASSWORD);
// wallet creation
var account = wallet.bip44_account(Cardano.AccountIndex["new"](0 | 0x80000000));
var account_public = account.public();
// adress creation
var chain_pub = account_public.bip44_chain(false);
var key_pub = chain_pub.address_key(Cardano.AddressKeyIndex["new"](0));
var adress = key_pub.bootstrap_era_address(settings);
console.log("Adress m/bip44/ada/'0/0/0", adress.to_base58());
