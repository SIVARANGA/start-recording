import React from 'react';
import './App.css';
import Data from './data/data.json';

class Profile extends React.Component{
    render(){
        // {this.props.data.id}
        var indexValue=this.props.location.data.id;
        var specificProfile=Data.profiles[indexValue];
        return(
            <section className="parent">
                <div className="card">
                    <div className="card-top">
                        <h3> {specificProfile.basicInformation.name} </h3>
                        <em>{specificProfile.basicInformation.role}</em>
                    </div>
                    <div className="card-bottom">
                    <a href={"mailto:"+specificProfile.basicInformation.email}>{specificProfile.basicInformation.email}</a><br />
              <a href={"tel:"+specificProfile.basicInformation.mobile}>{specificProfile.basicInformation.mobile}</a>
                    </div>
                </div>
                <div className="card2">
                    <div className="card-bottom">
                        <h2>Educational Qualification </h2>
                    </div>
                    <div className="card-top">
                        {specificProfile.Education.map((i,j)=>(
                            <ul>
                            <li>{i.Degree}</li>
                        <p>{i.Instution}</p>
                        </ul>
                        ))}
                    </div>
                    <div className="card-bottom">
                        <h3>Certifications</h3>
                    </div>
                    <div className="card-top">
                        <ul>
                        <p>{specificProfile.Certifications.python}</p>
                        <p>{specificProfile.Certifications.datascience}</p>
                        <p>{specificProfile.Certifications.machine}</p>
                        </ul>
                    </div>
                    <div className="card-bottom">
                        <h3>Experience</h3>
                    </div>
                    <div className='card-top'>
                        <p>I have been working in APSSDC(Andhra Pradesh State Skill Development Corporation) 
                            since 2016 May.I have 4+ Experience in this Organisation</p>
                    </div>
                    <div className="card-bottom">
                        <h2>working Technologies</h2>
                    </div>
                    <div className="card-top">
                        <ol>
                        <p>{specificProfile.techinical.tech1}</p>
                        <p>{specificProfile.techinical.tech2}</p>
                        <p>{specificProfile.techinical.tech3}</p>
                        <p>{specificProfile.techinical.tech4}</p>
                        <p>{specificProfile.techinical.tech5}</p>
                        <p>{specificProfile.techinical.tech6}</p>
                        </ol>
                    </div>
                </div>
            </section>
        )
    }
}
export default Profile;