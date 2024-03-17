import WantCoking from "../WnatCoking/WantCoking";




const CurrentCoking = ({curentpd}) => {

    return (
        <div>
         <h1 className="text-2xl mt-10 mb-5 font-bold text-black text-center">Currently Cooking:{curentpd.length} </h1>
            <hr />

            <div className="overflow-x-auto ">
  <table className="table text-2xl font-bold   ">
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
  {curentpd.map(spd=><WantCoking key={spd.id} spd={spd}></WantCoking>)}
  </div>   
        </div>
    );
};

export default CurrentCoking;