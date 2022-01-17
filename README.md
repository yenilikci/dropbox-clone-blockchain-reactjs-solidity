# dropbox-blockchain

<img width="710" alt="1" src="https://user-images.githubusercontent.com/57464067/149687320-3fc604d9-32a9-4157-a7fa-2101d7337102.png">
<img width="780" alt="2" src="https://user-images.githubusercontent.com/57464067/149687337-fcf76a46-7490-4a73-93ba-ecffc764011a.png">

# requirements
- download nodejs [🔗](https://nodejs.org/en/download/ "🔗")
- install truffle 
`npm install --g truffle`
- download ganache [🔗](https://trufflesuite.com/ganache/ " 🔗")
- add metamask extension [🔗](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn "🔗")


# prepare the project

- `cd Desktop`

- `git clone git@github.com:yenilikci/dropbox-blockchain.git`

- `cd dropbox-blockchain`

- `npm i`

- `npm run start`

> start ganache

> set host and port in truffle config file (dropbox-blockchain > truffle-config.js)


    networks: {
            development: {
                host: "127.0.0.1",
                port: 7545,
                network_id: "*"
            }
        }

don't forget to add your network

Metamask > Settings > Networks > Add a network

enter the rpc server connection and client id information

connect to your account :)
