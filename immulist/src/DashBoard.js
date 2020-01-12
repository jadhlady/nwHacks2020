
import React from "react";
import './DashBoard.css';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from '@material-ui/core/Select';

const GETURL = "https://ckoo.api.stdlib.com/nwhacks2020@dev/immulist/get_all_records/?db";
const POSTURL = "https://ckoo.api.stdlib.com/nwhacks2020@dev/immulist/add_immunization/"
const styles = {
    button: {
        // padding: "10px",
        margin: "10px",
        position: "absolute",
        right: 0
    },
    input: {
        display: 'none',
    },
    card: {
        margin: "20px",
        width: "70%",
        textAlign: "centre",
    }
};

class DashBoard extends React.Component{
    state = {
        recordsData: undefined,
        vaccinesData: undefined,
        records: [],
        dialogOpen: false,
        clients: [],
        clinics: [],
        vaccines: [],
        selectedClient: "",
        selectedVaccine: "",
        selectedDate: ""
    }
    renderVaccines = () => {

    }

    handleDateChange = date => {
        this.setState({selectedDate: date})
    };

    addIDInfo = async (data) => {
        let clients = await axios.get(`${GETURL}=clients`)
        clients = clients.data.result
        console.log(clients)

        let clinics = await axios.get(`${GETURL}=clinics`)
        clinics = clinics.data.result

        let vaccines = await axios.get(`${GETURL}=vaccines`)
        vaccines = vaccines.data.result

        for (let d of data) {
            d["clinic_name"] = clinics.filter(c => c["_id"] === d["clinic_id"])[0]["name"]
            d["client_name"] = clients.filter(c => c["_id"] === d["user_id"])[0]["name"]
            d["vaccine_name"] = vaccines.filter(c => c["_id"] === d["immu_id"])[0]["name"]
            d["date"] = new Date(d["date"]).toDateString()
        }

        this.setState({
            clients: clients,
            clinics: clinics,
            vaccines: vaccines,
        })

        return data
    }

    getDataTableAsArray = async (tableName) => {
        const response = await axios.get(`${GETURL}=${tableName}`);
        console.log(response.data);
        let res = await this.addIDInfo(response.data.result)
        return res
    }

    getData = async () => {
        let records = await this.getDataTableAsArray("records");
        this.setState({records: records});

    }

    componentDidMount() {
        this.getData()
    }

    renderRecords = () => {
            return this.state.records.map((va) => {
                const { _id, clinic_name, client_name, vaccine_name, date} = va //destructuring
                return (
                   <tr key={_id}>
                      <td>{clinic_name}</td>
                       <td>{client_name}</td>
                       <td>{vaccine_name}</td>
                       <td>{date}</td>
                   </tr>
                )
             })
        
    }
    handleClickOpen = () => {
        this.setState({dialogOpen: true})
        console.log(this.state)
    };

    handleClose = () => {
        this.setState({dialogOpen: false})
    };

    handleSubmit = async () => {
        await axios.post(POSTURL, {
            "clinic_id": 2,
            "immu_id": this.state.selectedVaccine,
            "user_id": 1,
            "date": new Date()
        })
        this.getDataTableAsArray();
        this.handleClose()
        window.location.reload()
    }


    render(){
        return (
            <div className="body">
                {localStorage.getItem("usertype") === "clinic"
                    ?
                    <Button variant="contained" size="large" color="secondary" style={styles.button} onClick={this.handleClickOpen}>
                        Add a Record
                    </Button>
                    :
                    <div></div>
                }

                <div className="records">
                <h1>Records</h1>
                    <table id="records">
                        <tbody>
                            <tr>
                                <th>Clinic Name</th>
                                <th>Client Name</th>
                                <th>Vaccine Name</th>
                                <th>Date Immunized</th>
                            </tr>
                            {this.renderRecords()}
                        </tbody>
                    </table>
                </div>

                <div>
                    <Dialog open={this.state.dialogOpen} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Add a Record for a Patient</DialogTitle>
                        <DialogContent>

                            <div>Vaccine</div>

                            <Select
                                native
                                value={this.state.selectedVaccine}
                                onChange={(e) => this.setState({selectedVaccine: e.target.value})}

                            >
                                <option disabled selected value> -- select an option -- </option>
                                {this.state.vaccines.map((v) => <option key={v._id} value={v._id}>{v.name}</option>)}
                            </Select>

                            <div>Client</div>

                            <Select
                                native
                                value={this.state.selectedClient}
                                onChange={(e) => this.setState({selectedClient: 1})}

                            >
                                <option disabled selected value> -- select an option -- </option>
                                {this.state.clients.map((v) => <option key={v._id} value={v._id}>{v.name}</option>)}
                            </Select>


                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.handleSubmit} color="primary">
                                Submit
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>

            </div>
        );
    }
}

export default DashBoard;