import { useBasketContext } from '../../Context/BasketContext';
import { Button, Container, Typography } from "@mui/material";
import Swal from "sweetalert2";
import {Helmet} from "react-helmet";
const Basket = () => {
    const { basket, setBasket } = useBasketContext();
  
    function handleClearBasket() {
        

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                setBasket([])
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }
    return (
        <Container>
            <Helmet><title>Basket Page</title></Helmet>
             <div
           
        >
            <div style={{paddingTop:"10%"}}>
                <Typography align="center">
                    You Have {basket.length} products in your basket!

                </Typography>
                <Button onClick={handleClearBasket} style={{ display: 'block', margin: '20px auto' }} variant="contained" color="warning">
                    Clear All?
                </Button>
            </div>
       
        </div> 
        </Container>
      

    )
}

export default Basket