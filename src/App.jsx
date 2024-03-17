


import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Recipes from './Components/Recipes/Recipes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  
  const[arecipes,setRecipes2]=useState([])
  const  addToCook=recipe=>{
    const aseki =arecipes.find((item)=> item.recipe_id==recipe.recipe_id)
    if(!aseki){
      const newRecipe=[...arecipes,recipe]
      setRecipes2(newRecipe)
    }
    else{
      const notify = () => toast("Already Exist!");
 notify()

     
//   
  
    }
   
    // setRecipes2([...arecipes,recipe])
  }
  return (
    <>
        <ToastContainer />
   
    <Navbar ></Navbar>
    <Banner></Banner>
    <Recipes   addToCook={addToCook} arecipes={arecipes} setRecipes2={setRecipes2}></Recipes>


      
    </>
  )
}

export default App
