import React from 'react';


export default function SComp01(props) {

    return (
        <>
            <div>
                <form action='/' method='get'>
                    <label htmlFor='header-search'>
                        <span className='visually-hidden'>Search Manga Titles</span>
                    </label>
                    <input
                        className=''
                        type='text'
                        id='header-search'
                        placeholder='Search Cinema Titles'
                        name='Search Bar for Cinema Titles'
                        onChange={""}
                    />
                    <button className="SearchButton" type='button'></button>
                </form>
            </div>
        </>
    );
};