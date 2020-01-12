
import React from "react";
import './DashBoard.css';

class DashBoard extends React.Component{
    state = {
        recordsData: undefined,
        vaccinesData: undefined,
    }
    renderVaccines = () => {

    }
    renderRecords = () => {
        let data = {
            "result": [
                {
                "_id": 1,
                "name": "Tetanus, diphtheria (reduced toxoid), acellular pertussis (reduced toxoid) vaccine"
                },
                {
                "_id": 2,
                "name": "Tetanus and diphtheria (reduced toxoid) vaccine"
                },
                {
                "_id": 3,
                "name": "Influenza vaccine"
                },
                {
                "_id": 4,
                "name": "Pneumococcal polysaccharide (23-valent) vaccine"
                },
                {
                "_id": 5,
                "name": "Herpes Zoster (Shingles) vaccine"
                },
                {
                "_id": 6,
                "name": "Diphtheria, Tetanus, acellular Pertussis, Inactivated Polio Virus, Haemophilus Influenzae type B vaccine"
                },
                {
                "_id": 7,
                "name": "Diphtheria, Tetanus, acellular Pertussis, Hepatitis B, Inactivated Polio Virus, Haemophilus Influenzae type B vaccine"
                },
                {
                "_id": 8,
                "name": "Tetanus, diphtheria (reduced toxoid), acellular pertussis (reduced toxoid), Inactivated Polio Virus vaccine"
                },
                {
                "_id": 9,
                "name": "Tetanus, diphtheria (reduced toxoid), acellular pertussis (reduced toxoid) vaccine"
                },
                {
                "_id": 10,
                "name": "Tetanus, diphtheria (reduced toxoid)"
                },
                {
                "_id": 11,
                "name": "Bacille Calmette-Guérin (BCG) Vaccine"
                },
                {
                "_id": 12,
                "name": "Hepatitis A Vaccine, Hepatitis B vaccine"
                },
                {
                "_id": 13,
                "name": "Hepatitis B vaccine"
                },
                {
                "_id": 14,
                "name": "Measles, Mumps, Rubella vaccine"
                },
                {
                "_id": 15,
                "name": "Varicella vaccine"
                },
                {
                "_id": 16,
                "name": "Measles, Mumps, Rubella, Varicella vaccine"
                },
                {
                "_id": 17,
                "name": "Meningococcal conjugate (Strain C) vaccine"
                },
                {
                "_id": 18,
                "name": "Meningococcal conjugate (Strains A, C, Y, W135) vaccine"
                },
                {
                "_id": 19,
                "name": "Pneumococcal polysaccharide (23-valent) vaccine"
                },
                {
                "_id": 20,
                "name": "ears conjugate (13-valent) vaccine"
                },
                {
                "_id": 21,
                "name": "Pneumococcal conjugate (10-valent) vaccine"
                },
                {
                "_id": 22,
                "name": "Rotavirus vaccine"
                },
                {
                "_id": 23,
                "name": "Human Papillomavirus vaccine"
                }
                ]
            }
            return data.result.map((va) => {
                const { _id, name} = va //destructuring
                return (
                   <tr key={_id}>
                      <td>{_id}</td>
                      <td>{name}</td>
                   </tr>
                )
             })
        
    }
    render(){
        return (
            <div className="body">
                <div className="records">
                <h1>records</h1>
                    <table id="records">
                        <tbody>
                            {this.renderRecords()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default DashBoard;