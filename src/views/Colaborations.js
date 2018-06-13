import React from 'react'
import Diagram from '../components/Diagram'
import MenuItem from '../components/MenuItem'
import {render} from 'react-dom'
import {Launcher} from '../components/Chat/index'
import app from '../base'

class Colaborations extends React.Component {
  
    constructor() {
        super();        
        this.state = {
          messageList: []
          
        };
      }

      componentDidMount(){
        app.database().ref('mensajes4/').on('value', snap =>{
         const mensajesRecientes = snap.val();
         if(mensajesRecientes!== null){
          
          var mensaje='puede ser'         
          var texto= 'puede ser'  
          var autor=''      
          var a= app.auth().currentUser
         
          Object.keys(mensajesRecientes).forEach(author => {
            mensaje = mensajesRecientes[author]                                                         
            texto = mensaje.data        
            Object.keys(texto).forEach(text=>{
              texto=texto[text]
            })   
            texto= ""+texto;           
            
            try{              
              autor = (a.uid==mensaje.id)? 'me':'them'
              console.log('El usuario Inicio Sesion')
            }catch(error){
              autor = 'them'
              console.log('Error por que no inicio Sesion')
            }
            
            const sms ={
                  type: mensaje.type,
                  author: autor,
                  data:  {text: texto},
                  id: mensaje.id,
            }             
            this.setState({
                messageList: [...this.state.messageList, sms]
            })

           });      
         }	
        });
        }
       
      _onMessageWasSent(message) {        
        var texto= 'puede ser'
        Object.keys(message).forEach(data => {
          texto = message[data]      
        });
        Object.keys(texto).forEach(text => {
          texto = texto[text]      
        });
        
        var Ntexto = ''+ texto;  
        this._sendMessage(texto);        
      }
     
      _sendMessage(text) {
        if (text.length > 0) {   
          const mensaje ={
            author: 'me',
              type: 'text',
              data: { text },
              id: app.auth().currentUser.uid,
          }
          app.database().ref('mensajes4/').push(mensaje)        
          this.setState({
              messageList: [...this.state.messageList, mensaje]
          })
         
        }

      }
      
    render(){
        return (          
        <div>
        <Diagram />    
        <Launcher
        agentProfile={{
          teamName: 'Chat',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji
        />
        </div>
        )
    }
}

export default Colaborations