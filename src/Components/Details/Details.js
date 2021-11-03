import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Item from '../Item/Item'
import { getItemById } from '../../store/actions'
// import classes from './Details.module.css';


function Details(props) {
    const {item, items} = useSelector((state) => ({
        item: state.items.item,
        items: state.items.items
    }))

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItemById(Number(props?.match?.params?.id)))
    }, [props?.match?.params?.id, dispatch])
    return (
        <div>
            {
                items.map(i => {
                    return (
                        <Item key={i.id} item={i} withoutButtons/>
                    )
                })
            }
        </div>
    )
}

export default Details
