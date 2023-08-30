import { styled } from "styled-components"

  export const Login2 = () => {
    return (
        <Container>

            <h1 style={{color: "red", fontSize: "14px"}}>Login</h1>
            <form className="form"> 

                <input type="text" placeholder="Nombre"/>
                <input type="text" placeholder="Apellido"/>

                <button>
                    Enviar 
                    <span> Ahora</span>
                </button>
            </form>
        </Container>
    )
}

const Container =styled.div`

    h2{
        color: blue;
        font-size:20px;
    }

    .form{
        background: #ccc;
        padding: 1em;
        max-width: 300px;

        input {
            padding: 1em;
            border: none;
            margin:10px;
        }   
        
        button{
            padding: 10px;
            cursor:pointer;

            span{
                color: #2c2;
                font-weight:900;    
            }
        }
    }
     

`