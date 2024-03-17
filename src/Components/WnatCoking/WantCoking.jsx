

const WantCoking = ({spd}) => {
  console.log(spd);
const{recipe_name,preparing_time,calories}=spd[0];

    return (
      
        <div>

            
            <div className="overflow-x-auto mx-3">
  <table className="table flex gap-5 px-2 py-4  bg-purple-500 text-white items-center my-2 rounded-xl">
  
  <tbody>
  
  <tr className="flex gap-5 ">
    <th >1</th>
    <td className="ml-2">{recipe_name}</td>
    <td>{preparing_time}</td>
    <td>{calories }</td>
  </tr>

</tbody>
  </table>
</div>
        </div>
    );
};

export default WantCoking;