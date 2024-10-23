# Dragon Swap Assets Repo
> Repository for the Dragon Swap token assets.

This repository contains the assets for the Dragon Swap tokens list. The assets include the list itself, as well as the token logos.

# Token Listing Policy
The following criteria will be reviewed before a token is accepted for listing on DragonSwap:

- **Contract Verification**: Token contract must be verified on SeiTrace.
- **Liquidity**: The token must maintain a minimum liquidity of $10,000 for 7 days post TGE.
- **Social Media Presence**: The token must have an active presence on platforms like X (formerly Twitter), Medium, Telegram, or Discord.
- **Detailed Token Information**: The token must provide a document with detailed project information, including tokenomics.
- **Holders**: The token must have a minimum of 500 holders.

Please note that meeting these requirements does not guarantee approval, as DragonSwap reserves the right to reject any projects deemed spam, fraudulent, or offensive.

## Contributing

1. Fork it (<https://github.com/dragonswap-app/assets/fork>)
2. Create your feature branch (`git checkout -b new-token/[token_symbol]`)
3. Add your token to the `tokenlist-sei-mainnet.json` file
4. (optional) Add your token logo to the `logos` directory following the convention `[token_address]/logo.png`
5. Stage your changes (`git add .`)
6. Commit your changes (`git commit -m 'Add token'`)
7. Push to the branch (`git push origin new-token/[token_symbol]`)
8. Create a new Pull Request

Keep in mind that `tokenlist-sei-mainnet.json` is the only file, and `logos` the only directory that should be modified. Please do not modify or add any other file or directory.
