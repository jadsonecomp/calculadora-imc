import React, { useState, useEffect } from "react";

/* Material-Ui Imports  */
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import InputAdornment from '@material-ui/core/InputAdornment';


/*Icons */
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FunctionsOutlinedIcon from '@material-ui/icons/FunctionsOutlined';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import TouchAppOutlinedIcon from '@material-ui/icons/TouchAppOutlined';

/*List */
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  calculoImc: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.primary.main,
    width: "100%"
  },
  divForm: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%"
  },

  listaImc: {
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },

  divListaImc: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.grey[100],
    width: "100%"
  },

  tituloListaImc: {
    backgroundColor: theme.palette.primary.main,
  },
  listaMargemRight: {
    marginRight: theme.spacing(50),
  },
  listaMargemLeft: {
    marginLeft: theme.spacing(2),
  },

  inicial: {
    backgroundColor: theme.palette.grey[100],
  },

  magreza: {
    backgroundColor: "#ff731e",
  },

  normal: {
    backgroundColor: "green",
  },

  sobrepeso: {
    backgroundColor: "#ff731e",
  },

  obesidade: {
    backgroundColor: "rgb(247, 39, 53)",
  },

  obesidadeGrave: {
    backgroundColor: "#840019",
  },
  
  icone: {
    color: theme.palette.secondary.main
  },
  form: {
    width: "100%", 
    marginTop: theme.spacing(1)
  },
  formIMC: {
    width: "100%", 
    marginTop: theme.spacing(8),
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Imc() {
  const classes = useStyles(); //estilos do Material-UI
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState(null);
  const [botaoDesabilitado, setBotaoDesabilitado] = useState(true);
  const [error, setError] = useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [background, setBackground] = useState(classes.inicial);
  const [backgroundMagreza, setBackgroundMagreza] = useState(classes.inicial);
  const [backgroundNormal, setBackgroundNormal] = useState(classes.inicial);
  const [backgroundSobrepeso, setBackgroundSobrepeso] = useState(classes.inicial);
  const [backgroundObesidade, setBackgroundObesidade] = useState(classes.inicial);
  const [backgroundObesidadeGrave, setBackgroundObesidadeGrave] = useState(classes.inicial);


  useEffect(() => {
    if (altura.trim() && peso.trim()) {
      setBotaoDesabilitado(false);
    } else {
      setBotaoDesabilitado(true);
    }
  }, [altura, peso]);

  useEffect( () => {

    if(resultado){

        if(resultado < 18.5){
            console.log("Aqui1");
            setSelectedIndex(2);  
            setBackground(classes.magreza); 
            setBackgroundMagreza(classes.magreza); 

            setBackgroundNormal(classes.inicial); 
            setBackgroundObesidade(classes.inicial); 
            setBackgroundObesidadeGrave(classes.inicial); 
            setBackgroundSobrepeso(classes.inicial);  

        }else if(resultado >= 18.5 && resultado <= 24.9){
            console.log("Aqui2");
            setSelectedIndex(3);  
            setBackground(classes.normal); 
            setBackgroundNormal(classes.normal);   
            
            setBackgroundMagreza(classes.inicial); 
            setBackgroundObesidade(classes.inicial); 
            setBackgroundObesidadeGrave(classes.inicial); 
            setBackgroundSobrepeso(classes.inicial);  

        }else if(resultado > 24.9 && resultado <= 29.9){
            console.log("Aqui3");
            setSelectedIndex(4);    
            setBackground(classes.sobrepeso); 
            setBackgroundSobrepeso(classes.sobrepeso);  
            
            setBackgroundNormal(classes.inicial); 
            setBackgroundObesidade(classes.inicial); 
            setBackgroundObesidadeGrave(classes.inicial); 
            setBackgroundMagreza(classes.inicial);  

        }else if(resultado > 29.9 && resultado <= 39.9){
            console.log("Aqui4");
            setSelectedIndex(5); 
            setBackground(classes.obesidade); 
            setBackgroundObesidade(classes.obesidade);     
            
            setBackgroundNormal(classes.inicial); 
            setBackgroundMagreza(classes.inicial); 
            setBackgroundObesidadeGrave(classes.inicial); 
            setBackgroundSobrepeso(classes.inicial);  

        }else{
            console.log("Aqui5");
            setSelectedIndex(6);   
            setBackground(classes.obesidadeGrave); 
            setBackgroundObesidadeGrave(classes.obesidadeGrave);   
            
            setBackgroundNormal(classes.inicial); 
            setBackgroundObesidade(classes.inicial); 
            setBackgroundMagreza(classes.inicial); 
            setBackgroundSobrepeso(classes.inicial); 
            

        }

    }

  
  }, [resultado, background, backgroundMagreza, backgroundNormal, 
    backgroundSobrepeso, backgroundObesidade, backgroundObesidadeGrave]);

  
  const calculaImc = async e => {
    e.preventDefault();
    try {
        const response = (peso/(altura*altura));
        setResultado(parseFloat(response.toFixed(2)))
        console.log("response: ", response);

        // if(response < 18.5){
        //     console.log("Aqui1");
        //     setSelectedIndex(2);  
        //     setBackground(classes.magreza); 
        //     setBackgroundMagreza(classes.magreza); 

        //     setBackgroundNormal(classes.inicial); 
        //     setBackgroundObesidade(classes.inicial); 
        //     setBackgroundObesidadeGrave(classes.inicial); 
        //     setBackgroundSobrepeso(classes.inicial);  

        // }else if(response >= 18.5 && response <= 24.9){
        //     console.log("Aqui2");
        //     setSelectedIndex(3);  
        //     setBackground(classes.normal); 
        //     setBackgroundNormal(classes.normal);   
            
        //     setBackgroundMagreza(classes.inicial); 
        //     setBackgroundObesidade(classes.inicial); 
        //     setBackgroundObesidadeGrave(classes.inicial); 
        //     setBackgroundSobrepeso(classes.inicial);  

        // }else if(response > 24.9 && response <= 29.9){
        //     console.log("Aqui3");
        //     setSelectedIndex(4);    
        //     setBackground(classes.sobrepeso); 
        //     setBackgroundSobrepeso(classes.sobrepeso);  
            
        //     setBackgroundNormal(classes.inicial); 
        //     setBackgroundObesidade(classes.inicial); 
        //     setBackgroundObesidadeGrave(classes.inicial); 
        //     setBackgroundMagreza(classes.inicial);  

        // }else if(response > 29.9 && response <= 39.9){
        //     console.log("Aqui4");
        //     setSelectedIndex(5); 
        //     setBackground(classes.obesidade); 
        //     setBackgroundObesidade(classes.obesidade);     
            
        //     setBackgroundNormal(classes.inicial); 
        //     setBackgroundMagreza(classes.inicial); 
        //     setBackgroundObesidadeGrave(classes.inicial); 
        //     setBackgroundSobrepeso(classes.inicial);  

        // }else{
        //     console.log("Aqui5");
        //     setSelectedIndex(6);   
        //     setBackground(classes.obesidadeGrave); 
        //     setBackgroundObesidadeGrave(classes.obesidadeGrave);   
            
        //     setBackgroundNormal(classes.inicial); 
        //     setBackgroundObesidade(classes.inicial); 
        //     setBackgroundMagreza(classes.inicial); 
        //     setBackgroundSobrepeso(classes.inicial); 
            

        // }


        setError(false);
        
    } catch (err) {
        setError(true);
        console.log("erro: ", err);
    }

  };


  return (
    
    <React.Fragment>
        
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <div className={classes.paper}>

              <div className={classes.form}>          
                <Typography variant="h6" color="inherit" className={classes.title} >
                    IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.
                </Typography>       
                <Typography variant="h6" color="inherit" className={classes.title} >
                    O índice é calculado da seguinte maneira: divide-se o peso do paciente pela sua altura elevada ao quadrado. 
                    Diz-se que o indivíduo tem peso normal quando o resultado do IMC está entre 18,5 e 24,9.
                </Typography>       
                <Typography variant="h6" color="inherit" className={classes.title} >
                    Quer descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo e compare com os índices da tabela. Importante: siga os exemplos e use pontos como separadores.
                </Typography>            
              </div>      

              <div className={classes.calculoImc}>

                <Avatar className={classes.avatar}>
                  <FunctionsOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Cálculo do IMC
                </Typography>

              </div>

              <form className={classes.form}  onSubmit={calculaImc}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="altura"
                    label="Altura (ex: 1,70)"
                    name="altura"
                    autoComplete="altura"
                    autoFocus
                    value={altura}
                    onChange={e => setAltura(e.target.value)}
                    error={error}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircleIcon fontSize="large" className={classes.icone}/>
                        </InputAdornment>
                        ),
                        type: "number",
                    }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="peso"
                    label="Peso (ex: 80,5)"
                    name="peso"
                    autoComplete="peso"
                    value={peso}
                    onChange={e => setPeso(e.target.value)}
                    error={error}
                    InputProps={{
                        startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircleIcon fontSize="large" className={classes.icone}/>
                        </InputAdornment>
                        ),
                        type: "number",
                    }}
                />
                
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={botaoDesabilitado}
                    className={classes.submit}
                >
                    <TouchAppOutlinedIcon /> Calcular
                </Button>
              </form>

              {resultado && (


              <div className={classes.formIMC}>

                <TextField
                    className={background}
                    variant="filled"
                    margin="dense"
                    fullWidth
                    disabled={true}
                    id="resultado"
                    label="Resultado: "
                    name="resultado"
                    autoComplete="resultado"
                    value={resultado}
                    onChange={e => setResultado(e.target.value)}
                    error={error}
                    InputProps={{
                        type: "number",
                    }}
                />

              </div>

              )}

              {resultado && (

              <div className={classes.divListaImc}>

                <List component="nav" className={classes.listaImc} aria-label="secondary mailbox folder">
                    <div className={classes.divForm}>

                        <ListItem className={classes.tituloListaImc}
                            selected={selectedIndex === 1}
                        >
                            <ListItemText primary="IMC" />
                        </ListItem>

                        <ListItem className={classes.tituloListaImc}
                            selected={selectedIndex === 1}
                        >
                            <ListItemText primary="CLASSIFICAÇÃO" />
                        </ListItem>

                        <ListItem className={classes.tituloListaImc}
                            selected={selectedIndex === 1}
                        >
                            <ListItemText primary="OBESIDADE (GRAU)" />
                        </ListItem>

                    </div>

                    <div className={classes.divForm}>

                        <ListItem
                            selected={selectedIndex === 2}
                            className={backgroundMagreza}
                        >
                            <ListItemText primary="MENOR QUE 18,5" />
                        </ListItem>

                        <ListItem
                            selected={selectedIndex === 2}
                            className={backgroundMagreza}
                        >
                            <ListItemText primary="MAGREZA" />
                        </ListItem>

                        <ListItem
                            selected={selectedIndex === 2}
                            className={backgroundMagreza}
                        >
                            <ListItemText primary="0" />
                        </ListItem>

                    </div>

                    <div className={classes.divForm}>

                        <ListItem
                            selected={selectedIndex === 3}
                            className={backgroundNormal}
                        >
                            <ListItemText primary="ENTRE 18,5 E 24,9" />
                        </ListItem>

                        <ListItem
                            selected={selectedIndex === 3}
                            className={backgroundNormal}
                        >
                            <ListItemText primary="NORMAL" />
                        </ListItem>

                        <ListItem
                            selected={selectedIndex === 3}
                            className={backgroundNormal}
                        >
                            <ListItemText primary="0" />
                        </ListItem>

                    </div>

                    <div className={classes.divForm}>

                        <ListItem
                            selected={selectedIndex === 4}
                            className={backgroundSobrepeso}
                        >
                            <ListItemText primary="ENTRE 25,0 E 29,9" />
                        </ListItem>

                        <ListItem
                            selected={selectedIndex === 4}
                            className={backgroundSobrepeso}
                        >
                            <ListItemText primary="SOBREPESO" />
                        </ListItem>

                        <ListItem
                            selected={selectedIndex === 4}
                            className={backgroundSobrepeso}
                        >
                            <ListItemText primary="I" />
                        </ListItem>

                    </div>

                    <div className={classes.divForm}>

                        <ListItem
                            selected={selectedIndex === 5}
                            className={backgroundObesidade}
                        >
                            <ListItemText primary="ENTRE 30,0 E 39,9" />
                        </ListItem>

                        <ListItem
                            selected={selectedIndex === 5}
                            className={backgroundObesidade}
                        >
                            <ListItemText primary="OBESIDADE" />
                        </ListItem>

                        <ListItem
                            selected={selectedIndex === 5}
                            className={backgroundObesidade}
                        >
                            <ListItemText primary="II" />
                        </ListItem>

                    </div>

                    <div className={classes.divForm}>

                        <ListItem
                            selected={selectedIndex === 6}
                            className={backgroundObesidadeGrave}
                        >
                            <ListItemText primary="MAIOR QUE 40,0" />
                        </ListItem>

                        <ListItem
                            selected={selectedIndex === 6}
                            className={backgroundObesidadeGrave}
                        >
                            <ListItemText primary="OBESIDADE GRAVE" />
                        </ListItem>

                        <ListItem
                            selected={selectedIndex === 6}
                            className={backgroundObesidadeGrave}
                        >
                            <ListItemText primary="III" />
                        </ListItem>

                    </div>

                    
                </List>

              </div>
              
              )}

          </div>
          
        </Container >
        
    </React.Fragment>
    
  );
}
