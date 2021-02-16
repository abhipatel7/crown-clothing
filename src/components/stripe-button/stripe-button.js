import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import logoForStripe from '../../assets/4.3 crown.svg';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51I6evYLKx272rZ2P4hFJnYkalLuFHejKdfLPDf24l7bjeWzjhcX0hMeSGQszMsUYpHZlN717gpjTpiycnhBnCay100x1QI4rPk';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image={logoForStripe}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
