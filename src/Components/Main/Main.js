import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getItems } from '../../store/actions/ads';
import { useDispatch } from 'react-redux';

function Main(props) {
    const items = useSelector((state) => state.items.items)

    const dispatch = useDispatch();

    
    // const [items, setItems] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:3000/data')
    //     .then(res => {
    //         setItems(res.data)
    //         console.log(res.data);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
        
    // }, [])
    
    return (
        <div>
            {items && items.map(item =>
                <Link to={`/details/${item.id}`} key={item.id}>
                    <div key={item.id}>
                        <div> {item.name} </div>
                        <div> {item.count} </div>
                    </div>
                </Link>
            )}
        </div>
    )
}

export default Main
