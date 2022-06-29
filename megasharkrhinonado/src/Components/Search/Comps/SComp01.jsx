import React from 'react';
import { Link } from 'react-router-dom'

export default function SComp01(props) {

    return (
        <>
           
                <form action='/' method='get'>
                    <label htmlFor='header-search'>
                        <span className='visually-hidden'>Search Cinema Titles</span>
                    </label>
                    <input
                        className=''
                        type='text'
                        id='header-search'
                        placeholder='Search Cinema Titles'
                        name='Search Bar for Cinema Titles'
                        onChange={""}
                    />
                    <Link to="/Search"><button style={{width:"1%"}} type='button'></button></Link>
                </form>
            
        </>
    );
};