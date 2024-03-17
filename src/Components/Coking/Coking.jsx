import { useState } from "react";
import AdCook from "../AdCook/AdCook";
import CurrentCoking from "../CurrentCoking/CurrentCoking.jsx";








const Coking = ({arecipes,toAdrecipe,setRecipes2}) => {

  const [curent,setCurent]=useState([])
 
  const toAddCurrent=(toAdrecipe)=>{
   const newCurent =[...curent,toAdrecipe]
setCurent(newCurent )


  }


  const [curentpd,setCurentpd]=useState([])

const cartDelete=(id)=>{
 console.log(arecipes,id);
 const a = arecipes.filter(pd=>pd.recipe_id != id);
 const b = arecipes.filter(pd2=>pd2.recipe_id == id);
console.log(b);
 const newcurentpd=[...curentpd,b ]

 setRecipes2(a)

 setCurentpd(newcurentpd)


}


    return (
        <div className="w-1/3 border-2 border-slate-400 rounded-xl">
            <h1 className="text-2xl my-2 font-bold text-black text-center">Want To Cook: {arecipes.length}</h1>
            <hr />
                  <div className="overflow-x-auto">
  <table className="table text-2xl font-bold w-3/4  ">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
  
  </table>
{  arecipes.map(toAdrecipe =><AdCook toAddCurrent={toAddCurrent}  toAdrecipe={toAdrecipe} cartDelete={cartDelete}  ></AdCook>)  }
 
</div>  
<div>

</div>
{}
<CurrentCoking curentpd={curentpd} ></CurrentCoking> 
        </div>
        
    );
};

export default Coking;