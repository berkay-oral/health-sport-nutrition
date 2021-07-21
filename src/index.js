

//node-modules ten react ı alıp  React adlı değişkene atadık
import React from 'react';

//node-modules ten react-dom dan ReactDOM adlı değişkene atadık
import ReactDOM from 'react-dom';

//import bootrap 
import 'bootstrap/dist/css/bootstrap.css';

import Kart from './components/Kart';

import Galeri from './components/Galeri';

import beslenme from './components/kartresimler/beslenme.jpg' 
import saglik from './components/kartresimler/sağlık.png' 
import spor from './components/kartresimler/spor.png' 


//function component
class App extends React.Component{
 
    constructor(props){
        super(props);

        this.state = { 
                      buyukResim : true
                     
                      
                    }

        this.resimgosterFonks = this.resimgosterFonks.bind(this);
    }


    resimgosterFonks = e => {

      if(this.state.buyukResim == true){
          this.setState({ buyukResim : false})
      }
      else{
          this.setState({ buyukResim : true})
      }
    }


  

 
    render(){
        return (<>

              <Galeri  buyukResimGoster={this.resimgosterFonks}    bResim={this.state.buyukResim} />

               <section>

                  

                  <div className="container m-4 mx-auto">
                      <div className="row">

                      <div className="col-md-4" >
                          <Kart buyukResimGoster={this.resimgosterFonks} onClick={() => this.setState(this.props.resimler[1])}   bResim={this.state.buyukResim}  btnisim="SAĞLIK" resim={saglik}  baslik="SAĞLIK"   altbaslik="Neden sağlık çok önemli?"      metin="Sağlık ile ilgili metin" />
                      </div> 

                      <div className="col-md-4">
                          <Kart buyukResimGoster={this.resimgosterFonks}  bResim={this.state.buyukResim}  btnisim="SPOR" resim={spor} baslik="SPOR"     altbaslik="Neden spor yapmalıyız?"        metin="Spor ile ilgili metin"/>
                      </div>

                      <div className="col-md-4"> 
                          <Kart buyukResimGoster={this.resimgosterFonks}  bResim={this.state.buyukResim}  btnisim="BESLENME" resim={beslenme} baslik="BESLENME" altbaslik="Neden sağlıklı besslenmeliyiz?" metin="Beslenme ile ilgili metin"/>
                      </div>

                      </div>           
                     

                     
                  </div>
            </section>
          
            </>   
        )
    }
}
//App adlı functional componetimizi id si root olan html ye aktarıyoruz componentimizi
ReactDOM.render(<App/>, document.getElementById("root"));
