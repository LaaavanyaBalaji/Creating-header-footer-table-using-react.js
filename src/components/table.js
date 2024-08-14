import React,{Component} from "react";
import './table.css';
export default class Myform1 extends Component{
  addtotable=()=>{
    var ip1=document.getElementById("ip1");
    document.querySelector("#name").innerHTML=`${ip1}`; 

  }
    render(){
        return(
        <div>
            <table>
            <tr>
    <th>Name</th>
    <th>Department</th>
    <th>Register Number</th>
    <th>City</th>
</tr>
  <tr>
    <td>Lavanya B</td>
    <td>ECE</td>
    <td>59</td>
    <td>Trichy</td>


  </tr>
  <tr>
  <td>Lavanya B</td>
    <td>ECE</td>
    <td>59</td>
    <td>Trichy</td>

  </tr>
  <tr>
  <td>Lavanya B</td>
    <td>ECE</td>
    <td>59</td>
    <td>Trichy</td>

  </tr>
  <tr>
  <td>Lavanya B</td>
    <td>ECE</td>
    <td>59</td>
    <td>Trichy</td>

  </tr>
  <tr>
  <td>Lavanya B</td>
    <td>ECE</td>
    <td>59</td>
    <td>Trichy</td>

  </tr> <tr>
  <td>Lavanya B</td>
    <td>ECE</td>
    <td>59</td>
    <td>Trichy</td>

  </tr>
  <tr>
  <td id="name"></td>
    <td id="dept"></td>
    <td id="reg"></td>
    <td id="city"></td>

  </tr>
            </table>

            <form id="form1">
                <h3 style={{textAlign:"center"}}>Fill This Form</h3>
                <label>Name</label>
                <input type="text" placeholder="Please enter your Name" id="ip1"  style={{marginLeft:100}}></input><br></br>
                <label>Department</label>
                <select id="ip2"style={{marginLeft:65}}>
                    <option>ECE</option>
                    <option>ECE</option>
                    <option>ECE</option>
                    <option>ECE</option>
                </select> <br></br>
                <label>Register Number</label>
                <input id="ip3" type="number" placeholder="Please enter your Register Number" style={{marginLeft:33}}></input><br></br>
                <label>City</label>
                <input id="ip4" type="text" placeholder="Please enter your City"style={{marginLeft:115}}></input><br></br>
            
                <button type="submit" onClick={this.addtotable}>submit</button>
                
                
            </form>
            </div>
        )
    }
}
