
import React, {useState} from 'react';
import { Data } from '../../helpers/Data';
import '../../componets/Menu/menu.css';
import { NavLink, } from "react-router-dom";

const MenuItem = ({ image, name, content, price }) => {
  const handleAddToCart = () => {
    //sepete ekleme islemi burada gerceklesecek
    console.log('urun sepete eklendi: ${name}');
    alert('Ürün sepetinize eklenmistir.');
  }
  return (
    <div className="MenuItem">
      <div className="imageContainer" style={{ backgroundImage: `url(${image})` }}></div>

      <h2>{name}</h2>
      <h6>{content}</h6>
      <p>{price}</p>
      <button onClick = {handleAddToCart}> Sepete Ekle</button>
    </div>
  );
};

const Menu = () => {
  const handleclick= ()=> {
    console.log()
  }
  return (
    <div className='menu'>
      <div className="buttonContainer">
       <button onClick={handleclick}>< NavLink to ='/pizzalar'>Pizzalar </NavLink> </button> 
       <button onClick={handleclick}>< NavLink to ='/citircerezler'>Citir Cerezler </NavLink> </button> 
       <button onClick={handleclick}>< NavLink to ='/icecekler'>Icecekler </NavLink> </button> 
      </div>
      <h1 className='menuTitle'>Pizzalar</h1>
      <div className='menuList'>
        {Data.map((menuItem, key) => (
          <MenuItem
            key={key}
            image={menuItem.image}
            name={menuItem.name}
            content={menuItem.content}
            price={menuItem.price}
            
          />
        ))}
      </div>
    </div>

  );
};

export default Menu;
