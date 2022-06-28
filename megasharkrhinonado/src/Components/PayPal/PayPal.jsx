import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import axios from "axios";
import { useEffect } from "react";
const style = { "layout": "vertical" };
const currency = "GBP";

const ButtonWrapper = ({ currency, showSpinner, bookingData }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

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
            forceReRender={[bookingData.amount, currency, style]}
            fundingSource={undefined}
            createOrder={(data, actions) => {
                return actions.order
                    .create({
                        purchase_units: [
                            {
                                amount: {
                                    currency_code: currency,
                                    value: bookingData.amount,
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
                    const {payer} = details;
                    console.log({payer})
                    axios.post('http://localhost:3000/bookings/post', {
                        movieTitle: bookingData.movieTitle,
                        email: details.payer.email_address,
                        date: bookingData.bookingDate,
                        time: bookingData.bookingTime,
                        children: bookingData.children,
                        seatID: bookingData.seatSelected,
                        payment: [{
                             amount: bookingData.amount
                        }    
                        ]
                    })
                    .then(response => {
                        console.log(response);
                        console.log(details)
                    })
                    .catch(error => {
                        console.log(error);
                    })
                })
            }}
        />
    </>
    );
}

export default function PayPal({ bookingData }) {
    return (
        <>
            <PayPalScriptProvider options={{
                "client-id": "test",
                components: "buttons",
                currency: "GBP"
            }}>
                <ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                    bookingData={bookingData}
                />
            </PayPalScriptProvider>
        </>
    );
}