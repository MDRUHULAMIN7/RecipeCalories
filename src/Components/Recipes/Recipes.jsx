import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import Coking from "../Coking/Coking";




const Recipes = ({arecipes,addToCook,setRecipes2}) => {

    const[recipes,setRecipes]=useState([]);

    useEffect(()=>{
        fetch('Recipes.json')
        .then(res=> res.json())
        .then(data=>setRecipes(data))
    },[])
    return (
        <div>
            <div className="text-center space-y-3"><h1 className="text-6xl">Our Recipes</h1>
            <h3 className="text-xl">Our recipes very good and alwso vvery delicieous.we alwys trying to give our bewst and when our client satisfied that is our satied</h3></div>

            <div className="lg:flex gap-10 lg:mx-20 mx-5 ">
                <div className="grid lg:grid-cols-2 gap-5 lg:w-2/3 mt-7">
                {  recipes.map(recipe=> <Recipe recipe={recipe} key={recipe.id} addToCook={addToCook}></Recipe>)}

               
         
                </div>
               
              <Coking arecipes={arecipes} setRecipes2={setRecipes2}></Coking>
         
            
              
                
            </div>

        </div>


    );
};

export default Recipes;