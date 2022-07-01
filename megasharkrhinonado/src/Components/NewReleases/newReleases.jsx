import NRC01 from "./NewReleasesComp/NRC01";
import axios from 'axios';
import React, { useEffect, useState } from "react";

const NewReleases = () => {

    const [newReleases, setNewReleases] = useState([]);

    const getReleases = () => {
        axios.get("http://localhost:3000/movies/getAll")
            .then(response => {
                setNewReleases(response.data)
            }).catch((exception) => {
                console.log(exception);
            });
    }

    useEffect(() => {
        getReleases();
    }, []);

    return (
        <>
            <div className="content">
                {
                    newReleases.map(newRelease =>
                        <NRC01 data={newRelease} key={newRelease.id} />
                    )
                }
            </div>
        </>
    );
}

export default NewReleases;