import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "./CheckoutPage";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51N82MGJ7Px4ryVzGyuA0gcN0osrJSMdgkdoZYjuJ23Fe64JHqXLJbZ8it1zf94SwDmb3UPyOsBka6XWbG7bN3dJl00rwFmfj41')

export default function CheckoutWrapper() {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutPage />
        </Elements>
    )
}