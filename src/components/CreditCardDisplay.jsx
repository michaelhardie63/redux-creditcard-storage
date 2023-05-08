import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import MuiAlert from "@material-ui/lab/Alert";
import '../styles.css';

const CreditCardDisplay = () => {
    const dispatch = useDispatch();
    const creditCards = useSelector(state => state.creditCards);
    const [deleteSuccess, setDeleteSuccess] = useState(false);

    const handleDelete = id => {
        if (window.confirm("Are you sure you want to delete this credit card?")) {
            dispatch({
                type: "DELETE_CREDIT_CARD",
                payload: id
            });

            setDeleteSuccess(true);
            setTimeout(() => {
            setDeleteSuccess(false);
            }, 2000);
        }
    };

    return (
        <div className="cardDisplay">
            {deleteSuccess ? (
                <MuiAlert severity="success">Credit card deleted</MuiAlert>
            ) : null}
            {creditCards.map((creditCard, index) => (
                <div key={index}>
                    <div className="credit-card">
                        <div className='credit-card-inner'>
                            <div className="delete">
                                <IconButton onClick={() => handleDelete(creditCard.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                            <span className="number-display">{creditCard.number}</span><br />
                            <span className="meta-display">EXP: {creditCard.expiry}</span>
                            <span className="meta-display">CCV: {creditCard.ccv}</span>
                        </div>
                    </div>                     
                </div>
            ))}
        </div>
    );
}

export default CreditCardDisplay;