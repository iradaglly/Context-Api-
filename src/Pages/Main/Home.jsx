import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Toaster, toast } from "react-hot-toast";
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useBasketContext } from '../../Context/BasketContext';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const Home = () => {
    const [product, setProducts] = useState([]);
    const { basket, setBasket } = useBasketContext();
    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data =>
            setProducts(data))

    }, [])
    return (
        <Container style={{ paddingTop: "5%" }}>

            <Grid container spacing={2}>
                {
                    product.map((product) => (

                        <Grid item xs={12} md={6} lg={4} style={{ marginBottom: "50px" }} >
                            <Item><Card sx={{ maxWidth: 365 }} style={{padding:"50px"}}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="350"
                                        image={product.image}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <b>Price:</b>  {product.price}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <b>Category:</b>  {product.category}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <b>Rate:</b>   {product.rating?.rate}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <b>Count:</b>   {product.rating?.count}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button variant="contained"
                                        onClick={() => {
                                            setBasket([...basket, product]);
                                            toast.success(`${product.title} Successfully Added to Basket!`)
                                        }}
                                    
                                        style={{ display: "block", margin: "0 auto", backgroundColor: "#eab3b8" }}>Add to Basket</Button>
                                </CardActions>
                            </Card></Item>
                        </Grid>
                    ))
                }

            </Grid >
            <Toaster position="bottom-right" reverseOrder={false} />
        </Container>
    )
}

export default Home