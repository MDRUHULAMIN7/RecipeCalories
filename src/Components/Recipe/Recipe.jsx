import pic3 from '../Navbar/image/w.png'
import pic4 from '../Navbar/image/f.png'



const Recipe = ({recipe,addToCook}) => {

const{recipe_image,recipe_name,short_description,ingredients,preparing_time,calories}=recipe;
    return (

        
     

<div>
<div className="card bg-base-100 shadow-xl   border-2 border-red-500 " >
  <figure><img className='w-full' src={recipe_image} alt="Photo" /></figure>
   <div className="card-body">
    <h2 className="card-title">{recipe_name}</h2>
    <p className="my-3">{short_description}</p>
    <hr />
    <ol className="list-disc	my-2">
        <h1 className="text-xl text-black font-bold">Ingredients : 6</h1>
        <li className="">
            {ingredients[0]}
        </li>
        <li>
            {ingredients[1]}
        </li>
        <li>
            {ingredients[2]}
        </li>
        <li>
            {ingredients[3]}
        </li>
        <li>
            {ingredients[4]}
        </li>
        <li>
            {ingredients[5]}
        </li>
      
    </ol>

    <hr />
    <div className='flex justify-evenly'>
        <div className='flex  space-x-3'><img src={pic3} alt="" /> <h2>{preparing_time}</h2></div>
        <div className='flex  space-x-3'><img src={pic4} alt="" /> <h2>{calories}</h2></div>
    </div>
    <div className="card-actions justify-start">
      <button onClick={()=>addToCook(recipe)}  className="btn bg-green-400 text-black text-xl fomt-bold rounded-full">Want to Cook</button>
    </div>
  </div>
 
  
       </div>
      
</div>


     
    );
};

export default Recipe;