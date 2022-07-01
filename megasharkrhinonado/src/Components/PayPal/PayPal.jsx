import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const style = { "layout": "vertical" };
const currency = "GBP";

const ButtonWrapper = ({ id, currency, showSpinner, amount, movieTitle, bookingDate, bookingTime, children, seatSelected }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();


    //  testing Console.log
    console.log("this is reading Button Wrapper" + bookingDate +  bookingTime +  seatSelected);

    // ---
    const navigate = useNavigate();
    const bookingComplete = (id) => navigate(`/BookingConfirmation/${id}`);


    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);


    return (<>
        {(showSpinner && isPending) && <div className="spinner" />}
        <PayPalButtons
            style={style}
            disabled={false}
            forceReRender={[amount, currency, style]}
            fundingSource={undefined}
            createOrder={(data, actions) => {
                return actions.order
                    .create({
                        purchase_units: [
                            {
                                amount: {
                                    currency_code: currency,
                                    value: amount,
                                },
                            },
                        ],
                    })
                    .then((orderId) => {
                        console.log(orderId);
                        return orderId;
                    });
            }}
            onApprove={function (data, actions) {
                return actions.order.capture().then(function (details) {
                    const { payer } = details;
                    console.log({ payer })
                    axios.post('http://localhost:3000/bookings/post', {
                        movieTitle: movieTitle,
                        email: details.payer.email_address,
                        date: bookingDate,
                        time: bookingTime,
                        children: children,
                        seatID: seatSelected,
                        payment: [{
                            amount: amount
                        }
                        ]
                    })
                        .then(response => {
                            bookingComplete(response.data._id);
                            console.log("THIS IS A RESPONSE PLEASE WORK " + response);
                            console.log(details)
                        })
                        .catch(error => {
                            console.log(error);
                        });

                    
                })


            }}
        />
    </>
    );
}

export default function PayPal({ id, amount, movieTitle, bookingDate, bookingTime, children, seatSelected }) {
    return (
        <>
            <PayPalScriptProvider options={{
                "client-id": "test",
                components: "buttons",
                currency: "GBP"
                
            }}>
                <ButtonWrapper
                    id={id}
                    currency={currency}
                    showSpinner={false}
                    amount={amount}
                    movieTitle={movieTitle}
                    bookingDate={bookingDate}
                    bookingTime={bookingTime}
                    children={children}
                    seatSelected={seatSelected}
                />
            </PayPalScriptProvider>
        </>
    );
}
