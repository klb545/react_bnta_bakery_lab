import { useState } from "react";

const CakeForm = ({listOfCakes, setListOfCakes}) => {

    // const cakeName = cakeInfo.cakeName;
    // const cakePrice = cakeInfo.price;
    // const cakeRating = cakeInfo.rating;
    // const cakeIngredients = cakeInfo.ingredients.map( (ingredient, index) => <li key={index}>{ingredient}</li> );

    const [cakeNameEntry, setCakeName] = useState("");
    const [ingredientsEntry, setIngredients] = useState([]);
    const [priceEntry, setPrice] = useState(0);
    const [ratingEntry, setRating] = useState(0);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const updatedCakesList = [...listOfCakes];
        const newCake = {
            cakeName: cakeNameEntry,
            ingredients: ingredientsEntry,
            price: priceEntry,
            rating: ratingEntry
        }
        updatedCakesList.push(newCake);
        setListOfCakes(updatedCakesList);
    };


    return ( 
        <>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="nameOfCake" placeholder="Name of cake" value={cakeNameEntry} onChange={(e)=>setCakeName(e.target.value)}/>
                <input type="text" name="ingredients" placeholder="Ingredients" value={ingredientsEntry}
                    onChange={(e)=> {
                        setIngredients(e.target.value.split(","));
                    }
                }/>
                <input type="number" name="price" placeholder="Price" value={priceEntry} onChange={(e)=> setPrice(e.target.value)}/>
                <input type="number" name="rating" placeholder="Rating" value={ratingEntry} onChange={(e)=> setRating(e.target.value)}/>
                <input type="submit" value="Submit"/>
            </form>
        </> 
    );

}
 
export default CakeForm;


