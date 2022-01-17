import React, {Component} from 'react';
import {convertBytes} from './helpers';
import moment from 'moment'

class Main extends Component {

    render() {
        return (
            <div className="container-fluid mt-5 text-center">
                <div className="row justify-content-center">
                    <div className="container">
                        <div className="card p-3 bg-dark">
                            <h2 className="text-white bg-dark font-italic text-light">
                                Share File
                            </h2>
                            <form
                                className="mb-3"
                                onSubmit={(event) => {
                                    event.preventDefault()
                                    const description = this.fileDescription.value
                                    this.props.uploadFile(description)
                                }}>
                                <div className="form-group">
                                    <input
                                        id="fileDescription"
                                        type="text"
                                        ref={(input) => {
                                            this.fileDescription = input
                                        }}
                                        className="form-control p-4"
                                        placeholder="Description..."
                                        required/>
                                </div>
                                <input type="file" onChange={this.props.captureFile}
                                       className="bg-dark border-0 form-control form-control-lg p-0 text-white"/>
                                <button type="submit" className="btn btn-lg btn-success"><b>Upload!</b></button>
                            </form>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-light shadow-lg table-striped">
                                <thead className="thead-dark shadow-lg">
                                <tr className="text-white">
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Size</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Uploader/View</th>
                                    <th scope="col">Hash/View/Get</th>
                                </tr>
                                </thead>
                                {this.props.files.map((file, key) => {
                                    return (
                                        <thead key={key}>
                                        <tr className="shadow-sm">
                                            <td>{file.fileId}</td>
                                            <td>{file.fileName}</td>
                                            <td>{file.fileDescription}</td>
                                            <td>{file.fileType}</td>
                                            <td>{convertBytes(file.fileSize)}</td>
                                            <td>{moment.unix(file.uploadTime).format('h:mm:ss A M/D/Y')}</td>
                                            <td>
                                                <a
                                                    href={"https://etherscan.io/address/" + file.uploader}
                                                    rel="noopener noreferrer"
                                                    target="_blank">
                                                    {file.uploader.substring(0, 10)}...
                                                </a>
                                            </td>
                                            <td>
                                                <a
                                                    href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                                                    rel="noopener noreferrer"
                                                    target="_blank">
                                                    {file.fileHash.substring(0, 10)}...
                                                </a>
                                            </td>
                                        </tr>
                                        </thead>
                                    )
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
