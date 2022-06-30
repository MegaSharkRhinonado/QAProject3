import PayPal from "../../PayPal/PayPal";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Checkbox } from "./Checkbox";


const BC11 = ({ data }) => {

        const seats = [{ name: "A1", checked: false, price: 10.00 }, { name: "A2", checked: false, price: 10.00 }, { name: "A3", checked: false, price: 10.00 }, { name: "A4", checked: false, price: 10.00 }, { name: "A5", checked: false, price: 10.00 }]

        const [available, setAvailable] = useState([]);
        const [timeValue, setTimeValue] = useState("");
        const [childValue, setChildValue] = useState(0);
        const [dateValue, setDateValue] = useState("");
        const [isChecked, setIsChecked] = useState(seats)
        const [amount, setAmount] = useState(0);
        const [childArray, setChildArray] = useState([]);

        const movieTitle = data.movieTitle;
        const bookingDate = data.date;
        const bookingTime = data.time;
        const children = "";
        let maxChildren = 0;

        const handleDateChange = (event) => {
                setDateValue(previosState => {
                        return previosState = event.target.value;
                })
        }

        const handleTimeChange = (event) => {
                setTimeValue(event.target.value);
        }

        const handleChildrenChange = (event) => {
                setChildValue(event.target.value);
        }

        const checkHandler = (index) => {
                const updateChecked = isChecked.map((Checked, currentIndex) =>
                        currentIndex === index ? !Checked : Checked
                );

                setIsChecked(updateChecked);
                checkPrice();
                checkChildren();
                childrenList();
        }

        const checkPrice = () => {
                let total = 0;
                for (let i = 0; i < isChecked.length; i++) {
                        if (isChecked[i] === true) {
                                total += seats[i].price;
                                console.log(total)
                        }
                }
                setAmount(total)
        }

        const checkChildren = () => {
                maxChildren = 0;
                for (let i = 0; i < isChecked.length; i++) {
                        if (isChecked[i] === true) {
                                maxChildren++
                        }
                }
                console.log("Children" + maxChildren)
        }

        const childrenList = () => {
                let selected = [];
                if (maxChildren > 0) {
                        for (let i = 1; i <= maxChildren; i++) {
                                selected.push(i);
                        }
                }
                setChildArray(selected);
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
                })

                result?.map(data => {
                        console.log(data.seatID);
                        result2 = data.seatID;
                })

                const index = isChecked.map(object => object.name).indexOf(`${result2}`);
                console.log("Index:" + index)
                isChecked.indexOf(1, { checked: true })
                checkHandler(index);
                console.log(isChecked)
                console.log("Exists:" + data);
        }

        useEffect(() => {
                seatAvailable(timeValue, dateValue);
                checkAvailable();
                checkChildren();
                console.log("Children" + maxChildren)
                //reset seat state
        }, [timeValue, dateValue])

        const seatAvailable = (time, date) => {
                console.log("Date:" + dateValue);
                console.log("Time:" + timeValue)
                axios.get(`http://localhost:3000/bookings/get/${data.movieTitle}/${date}/${time}`)
                        .then(response => {
                                setAvailable(response.data)
                        }).catch((exception) => {
                                console.log(exception);
                        });
        }

        return (
                <>
                        <div className="miniDiv">
                                <h2>Movie Title: {data.movieTitle} </h2>
                                <h2>Price = {amount} </h2>
                        </div>
                        <div className="miniDiv">

                        
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
                                        <label><br />Children</label><br />
                                        <select id="childrenList" onChange={handleChildrenChange}>
                                                {
                                                        childArray.map((entry, i) => (
                                                                <option key={i} value={entry}>{entry}</option>
                                                        ))}
                                        </select>
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
                        </div>
                        <div className="miniDiv">
                                <PayPal
                                        amount={amount}
                                        movieTitle={movieTitle}
                                        bookingDate={bookingDate}
                                        bookingTime={bookingTime}
                                        children={children}
                                        seatSelected={isChecked}
                                />
                        </div>
                </>
        );
}
export default BC11;