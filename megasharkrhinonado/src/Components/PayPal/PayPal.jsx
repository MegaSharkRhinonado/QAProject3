import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import axios from "axios";
import { useEffect } from "react";
const style = { "layout": "vertical" };
const currency = "GBP";

const ButtonWrapper = ({ currency, showSpinner, amount }) => {
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
                        //Code here after create the order
                        return orderId;
                    });
            }}
            onApprove={function (data, actions) {
                return actions.order.capture().then(function () {
                    axios.post('http://localhost:3000/bookings/post', {
                        //Forced Input for testing
                        movieTitle: 'title',
                        email: 'email@email.com',
                        date: '1',
                        time: '1',
                        children: '',
                        seatID: [
                            {
                                seatID: 'A1',
                                price: 21,
                                booked: true
                            }
                        ],
                        payment: [{
                             amount: 21
                        }    
                        ]
                    })
                    .then(response => {
                        console.log(response);
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

export default function PayPal({ amount }) {
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
                    amount={amount}
                />
            </PayPalScriptProvider>
        </>
    );
}