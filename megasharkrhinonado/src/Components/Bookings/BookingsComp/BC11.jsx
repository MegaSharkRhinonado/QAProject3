import PayPal from "../../PayPal/PayPal";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Checkbox } from "./Checkbox";


const BC11 = ({ data }) => {

        const seats = [{ name: "A1", checked: false }, { name: "A2", checked: false }, { name: "A3", checked: false }, { name: "A4", checked: false }, { name: "A5", checked: false }]

        const [available, setAvailable] = useState([]);
        const [timeValue, setTimeValue] = useState("");
        const [dateValue, setDateValue] = useState("");
        const [isChecked, setIsChecked] = useState(seats)
        const amount = 200;

        const handleDateChange = (event) => {
                setDateValue(event.target.value);
        }

        const handleTimeChange = (event) => {
                setTimeValue(event.target.value);
        }

        const checkHandler = index => {
                setIsChecked(
                        isChecked.map((Checked, currentIndex) =>
                                currentIndex === index
                                        ? { ...Checked, checked: !isChecked.checked }
                                        : isChecked
                        )
                )
        }

        const checkAvailable = () => {
                let result;
                let result2;
                console.log("Checking")
                console.log(available.seatID);
                available?.map(data => {
                        console.log("Checking2");
                        result = data.seatID;
                        console.log("result" + result)
                }
                )

                result?.map(data => {
                        console.log(data.seatID);
                        result2 = data.seatID;
                }
                )


                const index = seats.map(object => object.name).indexOf(`${result2}`);
                console.log("Index:" + index)
                seats.indexOf(1, {checked: true})
                //seats.splice(index, 1);
                console.log(seats)
                console.log("Exists:" + data);
        }

        useEffect(() => {
                seatAvailable(timeValue, dateValue);
                checkAvailable();
        }, [timeValue, dateValue])

        const seatAvailable = (time, date) => {
                console.log(dateValue);
                axios.get(`http://localhost:3000/bookings/get/${data.movieTitle}/${date}/${time}`)
                        .then(response => {
                                setAvailable(response.data)
                        }).catch((exception) => {
                                console.log(exception);
                        });
        }

        return (
                <>
                        <h2>Movie Title: {data.movieTitle} </h2>
                        <h2>Date:</h2>
                        <select id="dateSelected" onChange={handleDateChange}>
                                {
                                        data.movieShowings?.map((entry, i) => (
                                                <option key={i} value={`${entry.date}`}>{`${entry.date}`}</option>
                                        ))} </select>


                        <select id="timeSelected" onChange={handleTimeChange}>
                                {
                                        data.movieShowings?.map((entry, i) => (
                                                <option key={i} value={`${entry.time}`}>{`${entry.time}`}</option>
                                        ))
                                }</select>

                        <div>
                                <label>
                                        <br />Name: </label>
                                <br /> <input type="text" id="name" />
                        </div>
                        <div>
                                <label>
                                        <br />Email</label>
                                <br /> <input type="text" id="email" />
                        </div>
                        <div >
                                <label>
                                        <br />Children</label>
                                <br /> <input type="number" id="children" />
                        </div>

                        <div>
                                <p>Seats</p>
                                {isChecked.map((Checked, index) => (
                                        <Checkbox
                                                key={Checked.name}
                                                isChecked={isChecked.checked}
                                                checkHandler={() => checkHandler(index)}
                                                index={index}
                                        />
                                ))}
                        </div>
                        <PayPal amount={amount}/>
                </>
        );
}

export default BC11;