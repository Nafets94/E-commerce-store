import { Typography } from "@mui/material";
import { useSelector } from "react-redux/es/exports";
import { CounterState } from "./counterReducer";

export default function ContactPage() {
    const { title, data } = useSelector((state: CounterState) => state);
    return (
        <>
            <Typography variant="h2">
                {title}
            </Typography>
            <Typography variant="h5">
                The data is: {data}
            </Typography>
        </>
    )
}