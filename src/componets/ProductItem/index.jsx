import "./index.css";

import Wishlist from '../Wishlist';
import ThumbnailProduct from '../ThumbnailProduct';
import TitleProduct from '../TitleProduct';
import Price from '../Price';
import AddCart from '../AddCart';

function ProductItem(props){
    return(
        
        <li className="productItem" id={props.item.id}>
            <Wishlist 
                wishlistId={props.id}
            />
            <ThumbnailProduct 
                src={props.item.image} 
                title={props.item.title}
            />
            <TitleProduct 
                title={props.item.title}
            />
            <Price 
                oldprice={props.item.oldprice}
                bestprice={props.item.bestprice}
                installments={props.item.installments}
            />
            <AddCart 
                addCart_added="Adicionado"
                addCart_default="Adicionar"
                prodId={props.item?.id}
            />
        </li>
    )
}

export default ProductItem