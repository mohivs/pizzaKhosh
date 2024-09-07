import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  // const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const {
    _id,
    name,
    catagory,
    peopleToEat,
    preprationTime,
    img: imageUrl,
    ingredients,
    price,
  } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(_id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: _id,
      name,
      quantity: 1,
      price,
      totalPrice: price * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2" dir="rtl">
      <img
        src={imageUrl}
        alt={name}
        // className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
        className={`h-24`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <p className="text-sm">{formatCurrency(price)}</p>
          {/* {!soldOut ? (
            <p className="text-sm">{formatCurrency(price)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )} */}

          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity
                pizzaId={_id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={_id} />
            </div>
          )}
          {/* 
          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )} */}
          <Button type="small" onClick={handleAddToCart}>
            افزودن
          </Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
