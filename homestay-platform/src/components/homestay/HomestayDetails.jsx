import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../api/api';

const HomestayDetails = () => {
    const { id } = useParams();
    const [homestay, setHomestay] = useState(null);

    useEffect(() => {
        const fetchHomestayDetails = async () => {
            const response = await api.get(`/homestays/${id}`);
            setHomestay(response.data);
        };

        fetchHomestayDetails();
    }, [id]);

    return (
        homestay && (
            <div>
                <h2>{homestay.name}</h2>
                <p>{homestay.description}</p>
                <p>Price: ${homestay.pricePerNight}</p>
            </div>
        )
    );
};

export default HomestayDetails;
