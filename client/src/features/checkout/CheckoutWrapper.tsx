import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "./CheckoutPage";
import { loadStripe } from "@stripe/stripe-js";
import { useAppDispatch } from "../../app/store/configureStore";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import { setBasket } from "../basket/basketSlice";

const stripePromise = loadStripe('pk_test_51N82MGJ7Px4ryVzGyuA0gcN0osrJSMdgkdoZYjuJ23Fe64JHqXLJbZ8it1zf94SwDmb3UPyOsBka6XWbG7bN3dJl00rwFmfj41')

export default function CheckoutWrapper() {
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        agent.Payments.createPaymentIntent()
            .then(basket => dispatch(setBasket(basket)))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [dispatch]);

    return (
        <Elements stripe={stripePromise}>
            <CheckoutPage />
        </Elements>
    )
}