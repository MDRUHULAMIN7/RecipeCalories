


const AdCook = ({toAdrecipe,cartDelete}) => {
    const{recipe_name,preparing_time,calories}=toAdrecipe;


  


    return (
        <div className="flex gap-5 px-2 py-4  bg-purple-500 text-white items-center my-2 rounded-xl">
               <tbody>
  
      <tr className="flex gap-5">
        <th >1</th>
        <td className="ml-2">{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories }</td>
      </tr>
 
    </tbody>
    <button  onClick={()=>cartDelete(toAdrecipe.recipe_id)}   className="btn btn-success">Preparing</button> 
   
            </div>
    
    );
};

export default AdCook;