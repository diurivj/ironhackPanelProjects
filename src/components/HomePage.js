import React from 'react';
import { Card, Button, Collapse, Icon } from 'antd';
import photo from '../assets/_DSC0100.JPG'
const Panel = Collapse.Panel;

class HomePage extends React.Component{

  handleSubmit = () => {
    this.refs.list.scrollIntoView({ block: 'end',  behavior: 'smooth' });
  };

  render(){
    return(
      <div>
        <div style={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center" }} >
          <Card hoverable className="contain" cover={<img alt="ironhackers" src={photo} />} >
            <h2 style={{ marginTop: "-10px" }}>Project 2</h2>
            <h3 style={{ color: "#2DC5FA" }}>Full Stack Web App</h3>
            <Button size="large" onClick={this.handleSubmit} icon="down-circle" style={{marginTop: "2px"}}>Ver presentaciones</Button>
          </Card>
        </div>
        <div ref="list" >
          <div style={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center" }}  >
            <Card hoverable style={{ width: "60%" }} >
              <h2 style={{ color: "#2DC5FA", fontSize: "3em" }}>PROJECTS</h2>
              <Collapse bordered={false} defaultActiveKey style={{ textAlign: "left", fontSize: "1.2em" }} >

                <Panel header="Rafel González & Eduardo Mijangos" key="1">
                  <Icon type="desktop" /> <a rel="noopener noreferrer" href="https://slides.com/rafaremo/deck/#/" target="_blank" >Slides</a>
                  <br />
                  <Icon type="code" /> <a rel="noopener noreferrer" href="https://dietcalc.herokuapp.com/" target="_blank" >Nutrition Calculator</a>
                  <br />
                  <Icon type="github" /> <a rel="noopener noreferrer" href="https://github.com/rafaremo/Diet-Calc" target="_blank" >Github</a>
                </Panel>

                <Panel header="Maite Rojas & Miguel Barrera" key="2">
                  <Icon type="desktop" /> <a rel="noopener noreferrer" href="https://slides.com/mariateresarojasillanes/deck/" target="_blank" >Slides</a>
                  <br />
                  <Icon type="code" /> <a rel="noopener noreferrer" href="https://irondj.herokuapp.com/" target="_blank" >Indie DJ</a>
                  <br />
                  <Icon type="github" /> <a rel="noopener noreferrer" href="https://github.com/mtrojas/project2" target="_blank" >Github</a>
                </Panel>

                <Panel header="Rodrigo Ortiz & Ricardo Lopez" key="3">
                  <Icon type="desktop" /> <a rel="noopener noreferrer" href="https://slides.com/ricaarmal/deck-1#/" target="_blank" >Slides</a>
                  <br />
                  <Icon type="code" /> <a rel="noopener noreferrer" href="https://sleepy-lowlands-81745.herokuapp.com/" target="_blank" >Sheltair</a>
                  <br />
                  <Icon type="github" /> <a rel="noopener noreferrer" href="https://github.com/rolortizg/dogShelterProject" target="_blank" >Github</a>
                </Panel>

                <Panel header="Fernanda Velázquez & Ricardo Hernández" key="4">
                  <Icon type="desktop" /> <a rel="noopener noreferrer" href="https://slides.com/fvel4z/deck#/" target="_blank" >Slides</a>
                  <br />
                  <Icon type="code" /> <a rel="noopener noreferrer" href="https://young-tor-25184.herokuapp.com/" target="_blank" >Tamborcitos</a>
                  <br />
                  <Icon type="github" /> <a rel="noopener noreferrer" href="https://github.com/ferferv/revistaProject" target="_blank" >Github</a>
                </Panel>

                <Panel header="Nallely Tomas & Yanely Solis" key="5">
                  <Icon type="desktop" /> <a rel="noopener noreferrer" href="https://slides.com/yannyyss/deck-1/#/" target="_blank" >Slides</a>
                  <br />
                  <Icon type="code" /> <a rel="noopener noreferrer" href="https://sleepy-hollows-30088.herokuapp.com/" target="_blank" >Está Malandro</a>
                  <br />
                  <Icon type="github" /> <a rel="noopener noreferrer" href="https://github.com/yannyyss/AppWeb" target="_blank" >Github</a>
                </Panel>

                <Panel header="Juan Casanova & Pablo Turati" key="6">
                  <Icon type="desktop" /> <a rel="noopener noreferrer" href="https://slides.com/pabloturati/lost-found#/" target="_blank" >Slides</a>
                  <br />
                  <Icon type="code" /> <a rel="noopener noreferrer" href="https://radiant-reaches-45815.herokuapp.com/" target="_blank" >Lost/Found</a>
                  <br />
                  <Icon type="github" /> <a rel="noopener noreferrer" href="https://github.com/pabloturati/lostFound" target="_blank" >Github</a>
                </Panel>

                <Panel header="Beth Shook & Alberto Morales" key="7">
                  <Icon type="desktop" /> <a rel="noopener noreferrer" href="http://slides.com/bethshook/deck#/" target="_blank" >Slides</a>
                  <br />
                  <Icon type="code" /> <a rel="noopener noreferrer" href="https://gentle-everglades-51910.herokuapp.com/" target="_blank" >Nutrition Hack</a>
                  <br />
                  <Icon type="github" /> <a rel="noopener noreferrer" href="https://github.com/bethshook/nutrition-app" target="_blank" >Github</a>
                </Panel>

                <Panel header="Lili Cadena & Felipe Vallina" key="8">
                  <Icon type="desktop" /> <a rel="noopener noreferrer" href="https://prezi.com/view/wDcKwuRDXcTKT3HOlFeG/" target="_blank" >Slides</a>
                  <br />
                  <Icon type="code" /> <a rel="noopener noreferrer" href="https://beautychangers.herokuapp.com/login" target="_blank" >Beauty Changers</a>
                  <br />
                  <Icon type="github" /> <a rel="noopener noreferrer" href="https://github.com/lipeval/proyecto-modulo2" target="_blank" >Github</a>
                </Panel>

                <Panel header="Javier Ramirez & Ricardo Campos" key="9">
                  <Icon type="desktop" /> <a rel="noopener noreferrer" href="https://slides.com/ricampos/deck-2#/" target="_blank" >Slides</a>
                  <br />
                  <Icon type="code" /> <a rel="noopener noreferrer" href="https://protected-reef-98621.herokuapp.com/" target="_blank" >Buena Receta</a>
                  <br />
                  <Icon type="github" /> <a rel="noopener noreferrer" href="https://github.com/javieramirez90/proyecto2.git" target="_blank" >Github</a>
                </Panel>

                <Panel header="Patrick La Guardia & Fernando Mendez" key="10">
                  <Icon type="desktop" /> <a rel="noopener noreferrer" href="https://slides.com/fernandomendezrios/deck#/1" target="_blank" >Slides</a>
                  <br />
                  <Icon type="code" /> <a rel="noopener noreferrer" href="https://ironflix.herokuapp.com/" target="_blank" >Ironflix</a>
                  <br />
                  <Icon type="github" /> <a rel="noopener noreferrer" href="https://github.com/Patdlg/ironflix" target="_blank" >Github</a>
                </Panel>

              </Collapse>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}
export default HomePage;