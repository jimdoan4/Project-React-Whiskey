import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  body {
    background: #445;
    color: #fff;
  }

  #main {
    background: url("https://themes.muffingroup.com/be/whiskey/wp-content/uploads/2019/02/whisky-home-sliderbg.jpg");
    background-size: cover, cover;
    background-position: center, center;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-family: "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Osaka,
      "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
    font-size: 2rem;
    display: inline-block;
    padding: 1rem;
    font-weight: 400;
    position: relative;
    opacity: 1;
    transform: scale(1);
    transition: transform 0.5s ease, opacity 1s ease;
  }

  .caption {
    display: block;
    width: 100%;
    max-width: 100%;
    position: absolute;
    top: 58%;
    z-index: 1;
  }

  .caption h1 {
    color: #f91e53;
    font-size: 4.1rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.3rem;
    text-shadow: 0.1rem 0.1rem 0.8rem black;
    padding-bottom: 1rem;
  }

  .caption h3 {
    color: white;
    font-size: 2.1rem;
    text-transform: uppercase;
    font-weight: 400;
    text-shadow: 0.1rem 0.1rem 0.5rem black;
    padding-bottom: 2rem;
  }
  .btn-lg {
    border-width: medium;
    border-radius: 0;
    padding: .8rem 1.5rem;
    font-size: 1.1rem;
    font-weight: 400;
    text-transform: uppercase;
    display: inline-block !important;
  }
  
  .about {
    padding-top: 40px;
    padding-bottom: 0px;
    background-color: white;
     background-image: url(https://themes.muffingroup.com/be/whiskey/wp-content/uploads/2019/02/whiskey-home-barrlers-bg.png);
    background-repeat: no-repeat;
    background-position: left top; 
  }
  
  .container-fluid {
    padding-top: 15px;
    padding-bottom: 0px;
    background-color: white;
     /* background-image: url(https://themes.muffingroup.com/be/whiskey/wp-content/uploads/2019/02/whiskey-home-barrlers-bg.png);
    background-repeat: no-repeat;
    background-position: left top;  */
  }
  
  .headliner h3 {
    color: black;
    font-size: 48px;
    line-height: 53px;
    letter-spacing: 0px;
    margin: 0px 0px 15px;

  }
  
  .headliner h4 {
    color: black;
    font-weight: bold;
    font-size: 24px;
  }
`;

function Home() {
  return (
    <HomeContainer>
      <div id="main" class="is-loading">
        <div class="caption text-center">
          <div
            class="os-animation"
            data-animation="bounceInUp"
            data-delay=".8s"
          >
            <h1>ORIGINAL FLAVOR</h1>
            <h3>Since 1981</h3>
          </div>
        </div>
      </div>

      {/* <div class="container-fluid about text-center headliner">
        <div class="row text-light m-5">
          <div class="col-lg-6 col-md-6 mb-4">
            <img
              src="https://themes.muffingroup.com/be/whiskey/wp-content/uploads/2019/02/whiskey-basement.png"
              class="img-fluid"
              alt=""
            />
          </div>

          <div class="col-lg-6 col-md-6 mb-1 text-dark">
            <p>SINCE 1934</p>
            <h4 class="my-3 font-weight-bold">
              Original flavour Betheme's Whiskeyh
            </h4>
            <p>
              Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel
              justo cursus, faucibus lorem eget, egestas eros.
            </p>
            <div class="button_align align_center m-5">
             
                <button class="button_label bg-dark text-light p-2">BUY NOW</button>
            
            </div>
          </div>
        </div>
      </div> */}

      <div class="container-fluid text-center headliner">
            <h3 class="font-weight-bold m-5">Selection of Whiskeys</h3>
            <div class="row text-light m-5">
                <div class="col-lg-4 col-md-6 mb-4">
                    <img src="https://themes.muffingroup.com/be/whiskey/wp-content/uploads/2019/02/whiskey-home-bootle3.jpg"
                        class="img-fluid" alt=""/>
                    <h4 class="my-4 font-weight-bold">Betheme's Schotch</h4>
                    <h4>Aged 18</h4>
                </div>
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="view overlay z-depth-1-half">
                        <img src="https://themes.muffingroup.com/be/whiskey/wp-content/uploads/2019/02/whiskey-home-bootle1.jpg"
                            class="img-fluid" alt=""/>
                    </div>
                    <h4 class="my-4 font-weight-bold">Betheme's Schotch</h4>
                    <h4>Aged 18</h4>

                </div>
                <div class="col-lg-4 col-md-6 mb-1">
                    <img src="https://themes.muffingroup.com/be/whiskey/wp-content/uploads/2019/02/whiskey-home-bootle2.jpg"
                        class="img-fluid" alt=""/>
                    <h class="my-3 font-weight-bold">Betheme's Schotch</h>
                    <h4>Aged 18</h4>
                  

                </div>
            </div>
        </div>
    </HomeContainer>
  );
}

export default Home;
