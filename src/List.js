import axios from "axios"
import { useEffect, useState } from "react";


function List() {
    const [states, setState] = useState([])
    console.log(states)
    //get API
    var axios = require('axios');
    var config = {
        method: 'get',
        url: 'https://api.dev.kol.eco/api/v2/end-user/get-highlight-stories-by-domain',
        headers: {
            'seller-hostname': 'nhung.dev.kol.eco'
        }
    };

    useEffect(() => {
        axios(config)
            .then(function (response) {
                setState(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])


    return (
        <div>
            <ul>

                {states.map((state) => (
                    <li key={state.id}>{state.title}</li>
                ))}
            </ul>
        </div>
    )
}
export default List