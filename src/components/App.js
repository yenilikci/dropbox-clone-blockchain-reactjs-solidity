//import DStorage from '../abis/DStorage.json'
import React, {Component} from 'react';
import Navbar from './Navbar'
import Main from './Main'
import Web3 from 'web3';
import './App.css';

//Declare IPFS

class App extends Component {

    async componentWillMount() {
        await this.loadWeb3()
        await this.loadBlockchainData()
    }

    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        } else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }

    async loadBlockchainData() {
        //Declare Web3
        const web3 = window.web3;
        console.log(web3);

        //Load account

        //Network ID

        //IF got connection, get data from contracts
        //Assign contract

        //Get files amount

        //Load files&sort by the newest

        //Else
        //alert Error

    }

    // Get file from user
    captureFile = event => {
    }


    //Upload File
    uploadFile = description => {

        //Add file to the IPFS

        //Check If error
        //Return error

        //Set state to loading

        //Assign value for the file without extension

        //Call smart contract uploadFile function

    }

    //Set states
    constructor(props) {
        super(props)
        this.state = {}

        //Bind functions
    }

    render() {
        return (
            <div>
                <Navbar account={this.state.account}/>
                {this.state.loading
                    ? <div id="loader" className="text-center mt-5"><p>Loading...</p></div>
                    : <Main
                        files={this.state.files}
                        captureFile={this.captureFile}
                        uploadFile={this.uploadFile}
                    />
                }
            </div>
        );
    }
}

export default App;
