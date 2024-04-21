import React, { useEffect, useState } from "react";
import * as helpers from "../utils/utils.js";
import ClientTile from "../components/clientTile/clientTile.js";
import { Link, Outlet } from 'react-router-dom';


function Clients() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        async function getClients() {
            const clientInfo = await helpers.get(`/clients`);
            let clientArray = [];
            clientInfo.forEach(client => {
                const companyName = client['companyName'];
                clientArray.push(companyName);
            });

            return clientArray;
        }

        getClients().then(clientArray => setClients(clientArray))
        
    }, [])


    return (
        <div className="Clients">
            {clients.map((client) => {
                console.log(client);
                return (
                    <>
                        <Link to={`/${client}`}>
                            {/* <ClientTile className="selectable-unit-tile" client={client}/> */}
                            {client}
                        </Link>
                        <hr></hr>
                    </>
                )
            })}
        </div>
    );
}

export default Clients;
