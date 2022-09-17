import { Component } from "react";
class Profil extends Component {
  state = {
    fullname: 'Mehdi Bouzghaya',
    profession: 'Manager',
    imgprofil: './me.jpg',
    counter: 0
}
    componentDidMount() {
        setInterval(() => {
            this.setState({ counter: this.state.counter + 1 })
        }, 1000)
        

    }

    render(){ 
     return <div className="container mt-5 ">
      <div className="card p-3">
        <div className="d-flex ">
          <div className="image">
          <img src={this.state.imgprofil} alt="" width={150} />
          </div>
          <div className="ml-3 w-100">
            <h4 className="mb-0 mt-0">{this.state.fullname}</h4>
            <span>{this.state.profession}</span>
            
              <div className="d-flex ">
                <span className="number1">{this.state.counter}</span>
              </div>
          </div>
        </div>
      </div>
    </div>
    
   
  }}

  export default Profil 