import React, {Component}  from 'react'
import './Galeri.css'

import beslenme from '../components/kartresimler/beslenme.jpg' 
import saglik from '../components/kartresimler/sağlık.png' 
import spor from '../components/kartresimler/spor.png' 




class Galeri extends Component {

    constructor(props){
        super(props);
        this.state = {
                       resimDeger :0,
                       resimler : [beslenme, saglik, spor]
                       
           }
    }


    ileri = () => {
        if(this.state.resimDeger < this.state.resimler.length -1){
            this.setState({ resimDeger: this.state.resimDeger + 1 })
            
        }
        else{
            this.setState( {resimDeger : 0} )
        }
    }


    geri = () => {
         if(this.state.resimDeger > 0){
             this.setState({ resimDeger: this.state.resimDeger - 1 })
         }
         else{
             this.setState({ resimDeger: this.state.resimler.length -1})
         }
    }
  





    render() {
        return (
            <div className="container-fluid"  style={{display: `${this.props.bResim ?"none" :"block"}`}}>
                 <div className="row">
                     <div className="col-12">
      
                         
                         <div className="galeriArea  ">
                          <button onClick={this.props.buyukResimGoster} className="btn btn-danger" >x</button>
                                    <div className="btns-container clearfix">
                                         <i onClick={this.geri} className="btn btn-primary fa fa-angle-left geri"></i> 
                                         <i onClick={this.ileri} className="btn btn-primary fa fa-angle-right ileri"></i>  
                                    </div> 


                           <img   src={this.state.resimler[this.state.resimDeger]} />
                           
                         </div>

                    

                     </div>
                 </div>
            </div>
        )
    }
}

export default Galeri;

