import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import AddCardIcon from '@mui/icons-material/AddCard';
import TextField from "@material-ui/core/TextField";
import MuiAlert from "@material-ui/lab/Alert";
import '../styles.css';

const CreditCardForm = () => {
    const [number, setNumber] = useState("");
    const [isNumberValid, setIsNumberValid] = useState("");
    const [expiry, setExpiry] = useState("");
    const [isExpiryValid, setIsExpiryValid] = useState("");
    const [ccv, setCcv] = useState("");
    const [isCcvValid, setIsCcvValid] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);

    const dispatch = useDispatch();
    
    const handleNumberChange = (e) => {
        const { value } = e.target;
        let newValue = value;

        setNumber(newValue);
        setIsNumberValid(/^\d{16}$/.test(e.target.value));
    };
    //Formik
    const handleExpiryChange = (e) => {
        const { value } = e.target;
        let newValue = value;

        setExpiry(newValue);
        setIsExpiryValid(/^\d{4}$/.test(e.target.value));
    };

    const handleCcvChange = (e) => {
        const { value } = e.target;
        let newValue = value;

        setCcv(newValue);
        setIsCcvValid(/^\d{3}$/.test(e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isNumberValid && isExpiryValid && isCcvValid) {
            const id = Math.floor(Math.random() * 1000); //cryptorandomUi
            
            dispatch({
                type: "ADD_CREDIT_CARD",
                payload: { id, number, expiry, ccv }
            });
            
            setNumber("");
            setExpiry("");
            setCcv("");
            
            // Move to the Alert
            setShowSuccess(true);
            setTimeout(() => {
            setShowSuccess(false);
            }, 2000);

        } else {
            setIsNumberValid("Enter valid credit card number");
            setIsExpiryValid("Enter valid expiry date");
            setIsCcvValid("Enter valid CCV number");
        } 
      };

    return (
        <form onSubmit={handleSubmit}>
            {showSuccess ? (
                <MuiAlert severity="success">Credit card added successfully!</MuiAlert>
            ) : null}
            <TextField 
                label="Credit card number"
                required
                error={!isNumberValid}
                helperText={isNumberValid ? "" : "Enter a valid 16 digit credit card number"}
                value={number} 
                onChange={handleNumberChange}
            />
            <br />
            <TextField 
                label="Expiry date"
                required
                error={!isExpiryValid}
                helperText={isExpiryValid ? "" : "Please enter a valid expiry"}
                value={expiry} 
                onChange={handleExpiryChange}
            />
            <br />
            <TextField 
                label="CCV"
                required
                error={!isCcvValid}
                helperText={isCcvValid ? "" : "Please enter a valid CCV"}
                value={ccv} 
                onChange={handleCcvChange}
            />
            <br />
            <IconButton type="submit">
                <AddCardIcon />
            </IconButton>
        </form>
    );
}

export default CreditCardForm;