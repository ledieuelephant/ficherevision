import React from 'react';
import {Page, Text, View, Document, StyleSheet, Font , PDFViewer} from '@react-pdf/renderer'
import OpenFont from "./IndieFlower-Regular.ttf"
import {SketchPicker, CirclePicker} from "react-color"
import './App.css'


Font.register({family : "pdf", src : OpenFont})

// Create styles
const styles = StyleSheet.create({
  matiere : {
    textAlign: "left",
    margin: 10,
    padding: 10,
    fontFamily : "pdf",
  },
  chapitre : {
    textAlign: "center",
    fontFamily : "pdf",
  },
  sectionname : {
    textAlign: "center",
    fontFamily : "pdf",
    padding: 10
  },
  page: {
    border : "7pt solid #000"
  },
  section: {
    fontFamily : "pdf",
    margin: 10,
    padding: 10,
    flexGrow: 0
  },
  flex : {
    display: "flex"
  },
});

// Create Document Component
const MyDocument = (props) => (
  <Document>
    <Page size="A4" style={{border : `7pt solid ${props.color}`}}>
      <View style={styles.matiere}>
        <Text>{props.matiere}</Text>
      </View>
      <br></br>
      <View style={styles.chapitre}>
        <Text>{props.chapitre}</Text>
      </View>
      <View style={styles.sectionname}>
        <Text>{props.section1name}</Text>
      </View>
      <View style={styles.section}>
        <Text>{props.section1}</Text>
      </View>
      <View style={styles.sectionname}>
        <Text>{props.section2name}</Text>
      </View>
      <View style={styles.section}>
        <Text>{props.section2}</Text>
      </View>
    </Page>
  </Document>
);

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      matiere : "",
      chapitre : "",
      section1name : "",
      section1 : "",
      section2name : "",
      section2 : "",
      affichage : "flex",
      borderColor : "#000"
    }
  }

  colorChange = (color, event) => {
    this.setState({borderColor: color.hex})
  }

  affichageChange = () => {
    if (this.state.affichage === "flex"){
      this.setState({affichage : "none"})
    }
    else {
      this.setState({affichage : "flex"})
    }
  }

  matiereOnChange = (e) => {
    this.setState({matiere : e.target.value})
  }

  chapitreOnChange = (e) => {
    this.setState({chapitre : e.target.value})
  }

  nom1OnChange = (e) => {
    this.setState({section1name : e.target.value})
  }

  section1OnChange = (e) => {
    this.setState({section1 : e.target.value})
  }

  nom2OnChange = (e) => {
    this.setState({section2name : e.target.value})
  }

  section2OnChange = (e) => {
    this.setState({section2name : e.target.value})
  }

  render() {
    return(
      <div style={{display: "flex", justifyContent: "center"}}>
        <div className="pdf" style={{display : this.state.affichage}}>
          <PDFViewer width="800" height="940">
            <MyDocument color={this.state.borderColor} matiere={this.state.matiere} chapitre={this.state.chapitre} section1name={this.state.section1name} section1={this.state.section1} section2name={this.state.section2name} section2={this.state.section2}/>
          </PDFViewer>
        </div>
        <div className="champs" style={styles.section}>
          <center>Fiches de revisions</center>
          <label>Matiere : </label><input type="text" name="" placeholder="Matiere" onChange={this.matiereOnChange}/> <br /><br />
          <label>Chapitre : </label><input type="text" name="" placeholder="Chapitre" onChange={this.chapitreOnChange}/> <br /><br />
          <label>Nom Section 1 : </label><input type="text" name="" placeholder="Nom de la section 1" onChange={this.nom1OnChange}/> <br /><br />
          <label>Section 1 : </label><textarea onChange={this.section1OnChange}></textarea><br /><br />
          <label>Nom Section 2 : </label><input type="text" name="" placeholder="Nom de la section 2" onChange={this.nom2OnChange}/> <br /><br />
          <label>Section 2 : </label><textarea onChange={this.section2OnChange}></textarea><br /><br />
          <CirclePicker onChangeComplete={this.colorChange}/><br /><br />
          <button class="affichage" onClick={this.affichageChange}>Change Affichage</button>
        </div>
      </div>
    )
  }
}