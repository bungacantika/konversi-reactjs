import React, { Component } from "react";

class Decimal extends Component {
    constructor() {
        super();
        this.state = {
            desimal: 0,
            option: "biner",
            result: 0
        }
    }

    convert = () => {
        const desimal = +this.state.desimal
        if (this.state.option === "biner") {
            return this.setState({
                result: desimal.toString(2)
            })
        } else if (this.state.option === "oktal") {
            return this.setState({
                result: desimal.toString(8)
            })
        } else if (this.state.option === "hexadesimal") {
            return this.setState({
                result: desimal.toString(16)
            })
        }
    }

    changeDesimal = (event) => {
        this.setState({
            desimal: event.target.value
        })
    }

    changeOption = (event) => {
        this.setState({
            option: event.target.value
        })
    }

    render() {
        return (
            <div className="container col-md-6">
                <div className="card">
                    <div className="card-header bg-danger  text-center text-white">
                        <h3>Konversi Bilangan Desimal</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group mb-3">
                            <label>Desimal</label>
                            <input type="number" className="form-control" onChange={this.changeDesimal}></input>
                        </div>
                        <div className="form-group mb-3" onChange={this.changeOption}>
                            <label>Pilihan Konversi</label>
                            <select className="form-control">
                                <option value="biner">Biner</option>
                                <option value="oktal">Oktal</option>
                                <option value="hexadesimal">Hexadesimal</option>
                            </select>
                        </div>
                        <div className="form-group mb-3">
                            <button className="btn btn-danger  text-white form-control" onClick={this.convert}>Convert</button>
                        </div>
                        <h5 className="alert alert-secondary">{this.state.result}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Decimal;