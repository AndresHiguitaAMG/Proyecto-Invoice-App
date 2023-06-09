import PropTypes from "prop-types";

/* eslint-disable react/prop-types */
export const RowItemView = ({ product, price, quantity  }) => {
  return (
    <>
        <tr>
            <td>{ product }</td>
            <td>{ price }</td>
            <td>{ quantity }</td>
        </tr>
    </>
  )
};

RowItemView.protoTypes = {
  product: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
}