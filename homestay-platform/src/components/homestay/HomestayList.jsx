import React, { useEffect, useState } from 'react';
import { fetchHomestays } from '../../api/api';

const HomestayList = ({ location }) => {
    const [homestays, setHomestays] = useState([]);

    useEffect(() => {
        const loadHomestays = async () => {
            const response = await fetchHomestays(location);
            setHomestays(response.data);
        };

        loadHomestays();
    }, [location]);

    return (
        <div>
            <h2>Available Homestays in {location}</h2>
            <ul>
                {homestays.map(homestay => (
                    <li key={homestay.id}>{homestay.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default HomestayList;
