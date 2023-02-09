import React, { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { cartContext } from "../../storage/CartContext";
import "./cartContainer.css"
import DeleteIcon from '@mui/icons-material/Delete';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    TextField,
    Typography,
} from '@mui/material'
import Spinner from "../Spinner/Spinner";



function CartContainer() {

    const cart = useContext(cartContext).cart;
    const { removeItem } = useContext(cartContext);
    const { getTotalPrice } = useContext(cartContext);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 800);
    }, [cart]);


    if (cart.length == 0) {
        return (

            isLoading ? (
                <Spinner />
            ) :

                <div>
                    <h1 className="cartTitle">Your bag is empty</h1>
                    <div className="btnContainer">
                        <Link to="/">
                            <button className="shopBtn">CONTINUE SHOPPING</button>
                        </Link>
                    </div>
                </div >
        )
    }

    return (

        isLoading ? (
            <Spinner />
        ) : (
            <>
                <h1 className="cartTitle">Order Summary</h1>

                <div className="orderContainer">

                    <div className="productsContainer">

                        {cart.map((item) => (
                            <div key={item.id} className="itemContainer">

                                <div className="imgContainer">
                                    <img src={item.imgurl} alt="item-image" className="itemImg"></img>
                                </div>

                                <div className="itemInfoContainer">
                                    <h3>{item.title}</h3>
                                    <div className="itemInfo">
                                        <h3>${item.price} x {item.cant}</h3>
                                    </div>
                                </div>
                                <DeleteIcon className="trash" onClick={() => removeItem(item.id)}>
                                </DeleteIcon>
                            </div>
                        ))}

                        <div className="totalCart">
                            <h3>Total</h3> <h3 className="price">${getTotalPrice(cart)}.00</h3>
                        </div>

                    </div>

                    <form autoComplete="off">
                        <Card variant="outlined">
                            <Box m={1}>
                                <CardContent >
                                    <Typography
                                        variant="h5"
                                        component="h2"
                                        style={{ fontWeight: 500 }}
                                    >
                                        Delivery Information
                                    </Typography>
                                    <Box mb={1}>
                                        <Divider />
                                    </Box>
                                    <TextField
                                        margin="normal"
                                        size="small"
                                        color="primary"
                                        variant="outlined"
                                        label="Name"
                                        placeholder="Enter your fullname"
                                        name="name"
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        margin="normal"
                                        size="small"
                                        color="primary"
                                        type="email"
                                        variant="outlined"
                                        label="Email"
                                        placeholder="Enter your email"
                                        name="email"
                                        fullWidth
                                        required
                                    />
                                    <TextField
                                        margin="normal"
                                        size="small"
                                        color="primary"
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        label="Address"
                                        placeholder="Enter your address"
                                        name="address"
                                        fullWidth
                                        required
                                    />
                                </CardContent>
                                <CardActions>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        // className={classes.submitBtn}
                                        disableElevation
                                        fullWidth
                                    >
                                        Check Out
                                    </Button>
                                </CardActions>
                            </Box>
                        </Card>
                    </form>
                </div>
            </>
        )
    )

}

export default CartContainer;