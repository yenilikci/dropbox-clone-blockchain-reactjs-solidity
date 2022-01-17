import React, {Component} from 'react';
import Identicon from 'identicon.js';
import box from '../box.png'

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-light bg-light p-1 text-monospace">
                <a
                    className="navbar-brand col-sm-3 col-md-2 mr-0"
                    href="/"
                    rel="noopener noreferrer"
                >
                    <img src={box} width="30" height="30" className="align-top mr-2" alt=""/>
                    DROPCHAIN
                </a>
                <ul className="navbar-nav px-3">
                    <li>
                        <small id="account">
                            <a target="_blank"
                               alt=""
                               className="text-dark"
                               rel="noopener noreferrer"
                               href={"https://etherscan.io/address/" + this.props.account}>
                                {this.props.account?.substring(0, 6)}...{this.props.account?.substring(38, 41)}
                            </a>
                        </small>
                        {this.props.account
                            ? <img
                                alt=""
                                className='ml-2 border border-dark'
                                width='30'
                                height='30'
                                src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                            />
                            : <span></span>
                        }
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
