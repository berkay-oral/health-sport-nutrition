import React, {useState} from 'react'


const  Kart = (props) => {
    

    const [goster, setGoster] = useState(true)

    

    const kartGoster = () => {
        if(goster == true){
            setGoster(!true)
        }
        else{
            setGoster(true)
        }
    }
        return (
         
         <>
   
             <button onClick={kartGoster}   className={`${goster ?"btn btn-primary" :"btn btn-success"}  w-100 mt-3` }     >{props.btnisim}</button>

               <div className="card text-center" style={{ transition: "1s ease", maxHeight: `${goster ?"0" :"450"}px`, overflow:"hidden"}}>

                <img  onClick={props.buyukResimGoster}  src={props.resim} style={{width:"250px", height:"250px", objectFit:"cover", cursor:"pointer" 
                                                                           
                                                                           }} className="card-img-top img-fluid mx-auto mt-3 border"/>
                  
                 <div className="card-body"  style={{border:`${props.brd}`}}>
                        <h4 className="card-title">{props.baslik}</h4>
                        <span>{props.altbaslik}</span>
                        <p className="card-text">{props.metin}</p>
                 </div>
              </div> 
          
            </>
        )
  
}

export default Kart;
