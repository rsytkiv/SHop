import React, {  useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/actions';

function Add(props) {
    const [imageUrl, setImageUrl] = useState('');
    const [name, setName] = useState('');
    const [count, setCount] = useState('');
    const [width, setWidth] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');

    const dispatch = useDispatch();

    const submit = (e) => {
        const newItem = {
            id: Date.now(),
            imageUrl,
            name,
            count,
            size: {
                width,
                height
            },
            weight 
        };
        dispatch(addItem(newItem))
        setImageUrl('');
        setName('');
        setCount('');
        setWidth('');
        setHeight('');
        setWeight('');
    }

    return (
        <div>
            <input type='text' 
            value={imageUrl}
            onChange={(e) => {setImageUrl(e.target.value)}} />

            <input type='text' 
            value={name}
            onChange={(e) => {setName(e.target.value)}} />

            <input type='text' 
            value={count}
            onChange={(e) => {setCount(e.target.value)}} />

            <input type='text' 
            value={width}
            onChange={(e) => {setWidth(e.target.value)}} />

            <input type='text' 
            value={height}
            onChange={(e) => {setHeight(e.target.value)}} />

            <input type='text' 
            value={weight}
            onChange={(e) => {setWeight(e.target.value)}} />

            <button type='button' onClick={submit}>create</button>
        </div>
    )
}

export default Add
