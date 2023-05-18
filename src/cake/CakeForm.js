import { useState } from "react";

const CakeForm = ({listOfCakes, setListOfCakes}) => {

    const [cakeNameEntry, setCakeName] = useState("");
    const [ingredientsEntry, setIngredients] = useState([]);
    const [priceEntry, setPrice] = useState(0);
    const [ratingEntry, setRating] = useState(0);
    // const [error, setError] = useState("");

    // const handleFormValidation = () => {
    //     let errorMessage = "";
    //     for(i = 0; i < listOfCakes.length; i++){
    //         if (listOfCakes[i].name.includes(cakeNameEntry)) {
    //         errorMessage = "Cake name already exists in list";
    //     };
    //     }
    //     if (listOfCakes.includes(cakeNameEntry)) {
    //         errorMessage = "Cake name already exists in list";
    //     };
    //     setError();
    //     return errorMessage !== "";
    // }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // if(!handleFormValidation()){
            const updatedCakesList = [...listOfCakes];
            const newCake = {
                cakeName: cakeNameEntry,
                ingredients: ingredientsEntry,
                price: priceEntry,
                rating: ratingEntry
            }
            updatedCakesList.push(newCake);
            setListOfCakes(updatedCakesList);
        // }
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
            {/* <p>{error}</p> */}
        </> 
    );

}
 
export default CakeForm;


