import { useState } from 'react';
import { Container, Grid, Card, CardHeader, CardContent, CardActions, Button, Typography, TextField, InputLabel, Select, MenuItem, Radio, RadioGroup, FormControlLabel, FormControl, Divider, IconButton } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckoutIcon from '@mui/icons-material/Payment';

export default function BuyProduct() {
  const [quantity, setQuantity] = useState(1);
  const [country, setCountry] = useState('USA');
  const [deliveryMethod, setDeliveryMethod] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <form>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <img
                src="/placeholder.svg"
                alt="Product Image"
                width={400}
                height={400}
                style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: 8 }}
              />
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  Wireless Noise-Cancelling Headphones
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Experience immersive audio with our premium headphones.
                </Typography>
              </CardContent>
              <CardContent>
                <InputLabel id="quantity-label">Quantity</InputLabel>
                <Select
                  labelId="quantity-label"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  fullWidth
                  variant="outlined"
                  sx={{ mb: 2 }}
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <MenuItem key={num} value={num}>
                      {num}
                    </MenuItem>
                  ))}
                </Select>
                <Typography variant="h6" component="div">
                  $99.99
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <TextField
                  id="name"
                  label="Name"
                  placeholder="Enter your name"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  id="address1"
                  label="Address Line 1"
                  placeholder="123 Main St"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  id="address2"
                  label="Address Line 2"
                  placeholder="Apt 456"
                  variant="outlined"
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <TextField id="city" label="City" placeholder="San Francisco" variant="outlined" fullWidth />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="state" label="State" placeholder="CA" variant="outlined" fullWidth />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="zip" label="Zip Code" placeholder="94101" variant="outlined" fullWidth />
                  </Grid>
                </Grid>
                <FormControl variant="outlined" fullWidth sx={{ mt: 2 }}>
                  <InputLabel id="country-label">Country</InputLabel>
                  <Select
                    labelId="country-label"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    label="Country"
                  >
                    <MenuItem value="USA">United States</MenuItem>
                    <MenuItem value="CAN">Canada</MenuItem>
                    <MenuItem value="UK">United Kingdom</MenuItem>
                    <MenuItem value="AUS">Australia</MenuItem>
                    <MenuItem value="NZ">New Zealand</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  Payment Method
                </Typography>
                <FormControl component="fieldset">
                  <RadioGroup
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    row
                  >
                    <FormControlLabel
                      value="card"
                      control={<Radio />}
                      label={
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <CreditCardIcon sx={{ mr: 1 }} />
                          Credit Card
                        </div>
                      }
                    />
                    <FormControlLabel
                      value="debit"
                      control={<Radio />}
                      label={
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <AccountBalanceWalletIcon sx={{ mr: 1 }} />
                          Debit Card
                        </div>
                      }
                    />
                    <FormControlLabel
                      value="paypal"
                      control={<Radio />}
                      label={
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <AttachMoneyIcon sx={{ mr: 1 }} />
                          PayPal
                        </div>
                      }
                    />
                  </RadioGroup>
                </FormControl>
                <TextField
                  id="card-number"
                  label="Card Number"
                  placeholder="1234 5678 9012 3456"
                  variant="outlined"
                  fullWidth
                  sx={{ mt: 2 }}
                />
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={4}>
                    <FormControl variant="outlined" fullWidth>
                      <InputLabel id="expiry-month-label">Expiry Month</InputLabel>
                      <Select
                        labelId="expiry-month-label"
                        value="01"
                        label="Expiry Month"
                      >
                        {[...Array(12)].map((_, i) => (
                          <MenuItem key={i} value={String(i + 1).padStart(2, '0')}>
                            {String(i + 1).padStart(2, '0')}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl variant="outlined" fullWidth>
                      <InputLabel id="expiry-year-label">Expiry Year</InputLabel>
                      <Select
                        labelId="expiry-year-label"
                        value="2024"
                        label="Expiry Year"
                      >
                        {[...Array(7)].map((_, i) => (
                          <MenuItem key={i} value={String(2024 + i)}>
                            {2024 + i}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField id="cvc" label="CVC" placeholder="123" variant="outlined" fullWidth />
                  </Grid>
                </Grid>
              </CardContent>
              <CardContent>
                <InputLabel id="delivery-method-label">Delivery Method</InputLabel>
                <Select
                  labelId="delivery-method-label"
                  value={deliveryMethod}
                  onChange={(e) => setDeliveryMethod(e.target.value)}
                  fullWidth
                  variant="outlined"
                >
                  <MenuItem value="standard">Standard Delivery (5-7 business days)</MenuItem>
                  <MenuItem value="express">Express Delivery (2-3 business days)</MenuItem>
                  <MenuItem value="priority">Priority Delivery (1-2 business days)</MenuItem>
                </Select>
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Delivery Charges: $9.99
                </Typography>
                <Typography variant="h6">
                  Estimated Delivery Date: June 15, 2023
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Order Summary" />
              <CardContent>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Typography>Total Items</Typography>
                  <Typography>1</Typography>
                </Grid>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Typography>Subtotal</Typography>
                  <Typography>$99.99</Typography>
                </Grid>
                <Grid container justifyContent="space-between" alignItems="center">
                  <Typography>Taxes</Typography>
                  <Typography>$9.00</Typography>
                </Grid>
                <Divider sx={{ my: 2 }} />
                <Grid container justifyContent="space-between" alignItems="center">
                  <Typography variant="h6">Total</Typography>
                  <Typography variant="h6">$108.99</Typography>
                </Grid>
              </CardContent>
              <CardActions>
                <Button startIcon={<ShoppingCartIcon />} variant="outlined" fullWidth>
                  Add to Cart
                </Button>
                <Button startIcon={<CheckoutIcon />} variant="contained" fullWidth
                  color="primary"
                  sx={{ mt: 2 }}
                >
                  Proceed to Checkout
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
