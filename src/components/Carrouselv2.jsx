import { useState } from "react";
//fake data for carrousel test
let fakeData = [{id:0,name:"avatar",src:"https://lumiere-a.akamaihd.net/v1/images/p_disneymovies_avatarthewayofwater_1710_b7d39b03.jpeg"},
{id:1,name:"pocajonta",src:"https://lumiere-a.akamaihd.net/v1/images/p_mulan_20529_83d3893a.jpeg?region=0%2C0%2C513%2C810"},
{id:2,name:"cars",src:"https://lumiere-a.akamaihd.net/v1/images/p_cars_19643_4405006d.jpeg"}];




function Container(props){
    const [slide,setSlide]=useState(0);
    let rightHandler = function() {
    if (slide === fakeData.length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };
    let leftHandler = function() {
    if (slide === 0) {
      setSlide(fakeData.length - 1);
    } else {
      setSlide(slide - 1);
    }
  };
    
    function BackGround(props){
        return(
            <article style={{ backgroundImage: `url(${fakeData[slide].src})` }} id={props.id}>
    
            </article>    
        );
    }
    function Slides(props){
        return(
            <figure className="slides" id={props.id}>
                <img hidden={props.id==slide?false:true} src={props.src} alt={props.alt}/>
            </figure>
        );   
    }
    return(
        <section className="liked">
            {
                fakeData.map(
                    (bg)=>(
                        <BackGround
                        id={bg.name}
                        />
                    )
                )
            }
            <section>
                <div id="slides">
                    {
                        fakeData.map(
                            (data)=>(
                                <Slides
                                id={data.id}
                                src={data.src}
                                alt={data.id}
                                />
                            )
                        )
                    }
                </div>
                <div id="navigation">
                    <i className="fa-solid fa-chevron-left" onClick={leftHandler} id="likel"></i>
                    <i className="fa-solid fa-chevron-right" onClick={rightHandler} id="liker"></i>
            </div>
            </section>
            
        </section>
    );
}

function MainCarrousel(){
    return(
        <section className="MainC">
            <Container/>
        </section>
    );
}

export default MainCarrousel