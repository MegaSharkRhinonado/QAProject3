
const BC21 = ({ seatNum, value, onChange }) => {
    return ( 
        <>
        <input type="checkbox" seatNum={seatNum} checked={value} onChange={onChange} />
       </>
     );
}

export default BC21;