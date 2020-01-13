import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  /* body {
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
  } */
@import url("https://fonts.googleapis.com/css?family=Holtwood+One+SC|Source+Code+Pro|Abel");

*,
*:before,
*:after {
    box-sizing: border-box;
}

body {
    font-family: "Abel", Courier, monospace;
    text-transform: uppercase;
    color: #fa4b23;
    background: #111;
    overflow: hidden;
}

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}

.container {
    text-align: center;
}

h1,
h2,
h3 {
    margin: 0;
    padding: 0;
    font-family: "Holtwood One SC", Arial, sans-serif;
    font-size: 5em;
    line-height: 1em;
    color: #fa4b23;
}

.community {
    white-space: nowrap;
}

h3 {
    font-family: "Source Code Pro", Courier, monospace;
    font-size: 2em;
}

.line {
    display: block;
    overflow-y: hidden;
    height: 90px;
    color: #fff;
}

.line.bottom {
    line-height: 1.7em;
    border-bottom: 3px solid white;
}

.line.top {
    line-height: 0.5em;
    border-top: 3px solid white;
}

p {
    margin: 0;
    padding: 0;
    color: #fa4b23;
}

.slogan {
    font-size: 3em;
    font-family: "Abel", Arial, sans-serif;
}

.slogan .fa {
    padding: 0 0.5em;
    font-size: 0.75em;
    color: #fa4b23;
}

.glitch {
    animation: glitch 1s infinite linear;
    animation-delay: 5s;
}

.social-buttons {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    padding-top: 3em;
    color: #fa4b23;
}

.social-buttons .icon-wrap {
    padding: 0 1em;
    
}

a {
    color: #666;
    text-decoration: none;
}

a:hover {
    color: #fa4b23;
}


@keyframes updown {
    10% {
        transform: translateY(-5px);
    }
    50% {
        transform: translateY(-5px);
    }
    70% {
        transform: translateY(0);
    }
}

@keyframes downup {
    10% {
        transform: translateY(10px);
    }
    50% {
        transform: translateY(10px);
    }
    70% {
        transform: translateY(0);
    }
}

@keyframes rotate {
    10% {
        transform: rotate(10deg);
    }
    50% {
        transform: rotate(10deg);
    }
    70% {
        transform: rotate(0deg);
    }
}

@keyframes rotate-evil1 {
    10% {
        transform: rotate(25deg);
    }
    50% {
        transform: rotate(25deg);
    }
    70% {
        transform: rotate(0deg);
    }
}

@keyframes rotate-evil2 {
    10% {
        transform: rotate(-35deg);
    }
    50% {
        transform: rotate(-35deg);
    }
    70% {
        transform: rotate(0deg);
    }
}

@keyframes leftright {
    10% {
        transform: translateX(-10px);
    }
    50% {
        transform: translateX(-10px);
    }
    70% {
        transform: translateX(0);
    }
}

@keyframes leftright2 {
    10% {
        transform: translateX(-5px);
    }
    50% {
        transform: translateX(-5px);
    }
    70% {
        transform: translateX(0);
    }
}

@keyframes rightleft {
    10% {
        transform: translateX(2px);
    }
    50% {
        transform: translateX(2px);
    }
    70% {
        transform: translateX(0);
    }
}

@keyframes blink1 {
    10% {
        transform: scale(1.2);
    }
    50% {
        transform: scale(1.2);
    }
    70% {
        transform: scale(1);
    }
}

@keyframes blink2 {
    10% {
        transform: scale(0.9);
    }
    50% {
        transform: scale(0.9);
    }
    70% {
        transform: scale(1);
    }
}

/* GLITCH ANIMATION */

@keyframes glitch {
    0%,
    2%,
    5%,
    42%,
    45%,
    72%,
    75%,
    100% {
        opacity: 1;
        transform: scaleX(1) scaleY(1);
    }
    3% {
        opacity: 0.8;
        transform: scaleY(2);
    }
    43% {
        opacity: 0.8;
        transform: scaleX(1.3);
    }
    73% {
        opacity: 8;
        transform: rotate(5deg) scale(2);
    }
}

/* Some kind of... let's say... 'semi-responsiveness' */

@media (max-width: 960px) {
    .container {
        transform: scale(0.7);
    }
}
@media (max-width: 840px) {
    .container {
        transform: scale(0.65);
    }
}
@media (max-width: 800px) {
    .container {
        transform: scale(0.6);
    }
}
@media (max-width: 780px) {
    .container {
        transform: scale(0.5);
    }
}
@media (max-width: 600px) {
    .container {
        transform: scale(0.45);
    }
    .slogan .fa {
        display: none;
    }
}
@media (max-width: 480px) {
    .container {
        transform: scale(0.4);
    }
    .slogan .fa {
        display: none;
    }
}

`;

function Home() {
  return (
    <HomeContainer>
    <main>
  <div class="lp">

    {/* <nav>
      <div class="lp__nav__logo"><span>BASK</span>TOUR</div>
      <div class="lp__nav__linkSet">
        <a href="#" class="lp__nav__link">About</a>
        <a href="#" class="lp__nav__link">Shop</a>
        <a href="#" class="lp__nav__link">Explore</a>
        <a href="#" class="lp__nav__link">Contact</a>
      </div>
      <div class="lp__nav__linkSet">
        <a href="#" class="lp__nav__link">Sign Up</a>
        <a href="#" class="lp__nav__link">Login</a>
      </div>
    </nav> */}


    <section class="lp__grid-3">
      <div class="lp__grid__item lp__grid-col">
        <div class="textHolder">
          {/* <p>80,88,96,104,112,120,128,136,144,152,160,168,176</p> */}
        </div>
        <div class="lp__gridImage-1"></div>
        <div class="image "></div>
      </div>
      <div class="lp__grid__item">
        <div class="lp__subgrid lp__subgrid-sm">
          <div>
            {/* <p>Lorem ipsum dolor </p>
            <p>sit amet, consectetur elit</p>
            <p>sed do eiusmod tempor incididunt </p> */}
          </div>
          <div class="lp__gridImage-2"></div>
        </div>
      </div>
      <div class="lp__grid__item">
        <div class="lp__subgrid lp__subgrid-md">
          <h1><span>WHISKEY</span>TOUR</h1>
          <div class="image lp__gridImage-3"></div>
        </div>

      </div>

    </section>



    <section class="lp__social">
      <div class="lp__social__item"><img src="https://www.desertfinancial.com/-/media/desert-financial/learning-center-banner/test/iconfbshare.ashx" class="social__logo"/></div>
      <div class="lp__social__item"><img src="https://www.desertfinancial.com/-/media/desert-financial/learning-center-banner/test/icontwshare.ashx" class="social__logo"/></div>
      <div class="lp__social__item"><img src="https://www.desertfinancial.com/-/media/desert-financial/learning-center-banner/test/iconfbshare.ashx" class="social__logo"/></div>
      <div class="lp__social__item"><img src="https://www.desertfinancial.com/-/media/desert-financial/learning-center-banner/test/icontwshare.ashx" class="social__logo"/></div>
    </section>
 

  </div>
</main>

<div class="wrapper">
    <div class="container">

        {/* <div class="owl">
            <span class="head"><span class="brows"><span class="brow-left">_</span><span class="brow-right">_</span></span><br/>
            {<span class="eye-left">0</span><span class="nose">,</span><span class="eye-right">0</span>}</span><br/>
            <span class="wing-left">(</span><span class="belly">__</span><span class="wing-right">(</span><span class="back">|</span><br/>
            <span class="stick">-<span class="foot-left">"</span>-<span class="foot-right">"</span>-</stick>
        </div> */}

        <h2 class="line bottom">The</h2>
        <h1 class="community">NOWAI GAMING</h1>
        <h2 class="line top">Community</h2>

        <p class="slogan glitch">
            <i class="fa fa-star"></i> Gaming outta control
            <i class="fa fa-star"></i>
        </p>

        <div class="social-buttons">

            <p class="icon-wrap youtube">
                <a href="https://www.youtube.com/nowaigaming">
                    <i class="fa fa-3x fa-youtube"></i><br/>
                    <small>Watch us fail</small>
                </a>
            </p>

            <p class="icon-wrap teamspeak">
                <a href="http://gaming.nowai.eu">
                    <i class="fa fa-3x fa-headphones"></i><br/>
                    <small>Chat with us</small>
                </a>
            </p>

            <p class="icon-wrap support">
                <a href="http://gaming.nowai.eu">
                    <i class="fa fa-3x fa-beer"></i><br/>
                    <small>Buy us a beer</small>
                </a>
            </p>

        </div>
    </div>
</div>
      {/* <div id="main" class="is-loading">
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
      </div> */}

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

      {/* <div class="container-fluid text-center headliner">
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
        </div> */}
    </HomeContainer>
  );
}

export default Home;
