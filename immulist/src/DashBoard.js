
import React from "react";
import './DashBoard.css';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

const GETURL = "https://ckoo.api.stdlib.com/nwhacks2020@dev/immulist/get_all_records/?db";
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
        records: []
    }
    renderVaccines = () => {

    }

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
    render(){
        return (
            <div className="body">
                {localStorage.getItem("usertype") === "clinic"
                    ?
                    <Button variant="contained" size="large" color="secondary" style={styles.button} onClick={() => {
                        this.userTypeHandler("client")
                    }}>
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
            </div>
        );
    }
}

export default DashBoard;