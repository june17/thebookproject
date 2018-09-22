<template>
    <div>
        <section class="hero container">
                <div>
                    <img src="static/images/logo.svg" height="87px"/>
                    <p class="logoText">Vaayana</p>
                </div>
                <h1>Create your own <br />local reading network.</h1>
                <button class="gradientPrimaryBtn">Request Access</button>
        </section>
        <section class="heroBg">
            <img src="static/images/hero-bg.svg" width="100%">
        </section>
        <section class="features">
            <div class="container">
                <div class="row">
                    <div class="feature yellowfeature col-md-6">
                        <img src="static/images/encourage.svg" height="120">
                        <h2>Encourage members to read widely beyond their favorite genre or author.</h2>
                        <p>It’s hard to say when in our lives each of us become aware of this thing called “astronomy”. But it is safe to say that at some point on our lives, each and every one of us has that moment when we are suddenly stunned.</p>
                    </div>
                    <div class="feature greenfeature col-md-6">
                        <img src="static/images/review.svg" height="120">
                        <h2>Encourage readers to write book reviews.</h2>
                        <p>It’s hard to say when in our lives each of us become aware of this thing called “astronomy”. But it is safe to say that at some point on our lives, each and every one of us has that moment when we are suddenly stunned.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="feature violetfeature col-md-6">
                        <img src="static/images/medal.svg" height="120">
                        <h2>Rewards readers by points, achievement badges or levels.</h2>
                        <p>It’s hard to say when in our lives each of us become aware of this thing called “astronomy”. But it is safe to say that at some point on our lives, each and every one of us has that moment when we are suddenly stunned.</p>    
                    </div>
                    <div class="feature redfeature col-md-6">
                        <img src="static/images/friends.svg" height="120">
                        <h2>Allow members to share books between them.</h2>
                        <p>It’s hard to say when in our lives each of us become aware of this thing called “astronomy”. But it is safe to say that at some point on our lives, each and every one of us has that moment when we are suddenly stunned.</p>    
                    </div>
                </div>
            </div>
        </section>
        <section class="caseStudy">
            <div class="container">
                <button class="readCaseBtn">
                    <img src="static/images/arrowRight.svg" />
                    Read case study
                </button>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
nav {
    height: 4.28rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    span {
        font-family: 'Nunito', sans-serif;
        font-size: .9rem;
        letter-spacing: -0.1px;
        text-align: right;
        color: #adadad;
        
    }
}
.gradientPrimaryBtn {
    outline: 0;
    width: 15rem;
    height: 3.6rem;
    border: none;
    font-size: 1.43rem;
    font-family: 'Nunito', sans-serif;
    color: #ffffff;
    font-weight: 400;
    border-radius: .72rem;
    cursor: pointer;
    background-image: linear-gradient(138deg, #a865ff, #ff3445);
    box-shadow: 0 2px 64px 20px rgba(0, 255, 20, 0.04), 0 2px 4px 0 rgba(0, 0, 0, 0.21), 0 4px 1px 0 #cd0f67;
}
.hero {
    text-align: center;
    padding: 4.28rem 0;
    }
    .logoText {
        color: #8F8F8F;
        font-family: 'Nunito', sans-serif;
        font-size: 1.42rem;
        margin: 0;
    }
    .hero h1 { margin-top: 1rem;}
.heroBg {
    margin-top: 10vh;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #f6fdf9);
}
h1 {
    font-family: 'Nunito', sans-serif;
    font-size: 3.3rem;
    font-weight: 800;
    line-height: 1.2;
}
.features {
    padding: 7.5rem 0;
    background: #F6FDF9;
     background-image: url('../assets/images/paths.svg');
    background-repeat: no-repeat;
    background-position: center;
    margin-top: -7rem;
}
.feature {
    min-height: 36rem;
    border-radius: 2.6rem;
    padding: 4.28rem 2.85rem !important;
    margin-bottom: 3rem;
    }
    .yellowfeature { background-color: #f6f9ec; }
    .yellowfeature h2 { color: #ff9f00; }

    .greenfeature { background-color: #e9fbf5; }
    .greenfeature h2 { color: #00c6a0; }

    .violetfeature { background-color: #f2f6f8; }
    .violetfeature h2 { color: #8e4fd2; }

    .redfeature { background-color: #f6f3f0; }
    .redfeature h2 { color: #ff3445; }



    .feature h2 {
        font-family: 'Nunito', sans-serif;
        font-size: 2.1rem;
        font-weight: 800;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.2;
        letter-spacing: -0.1px; 
        margin: 1.714rem 0 .85rem 0;
    }
    .feature p {
        font-size: 1.28rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        line-height: 1.67;
        letter-spacing: -0.2px;
        color: #020202;
        opacity: .6;
        margin: 0;
    }
    .feature:nth-child(2) { border-left: 1.4rem solid #F6FDF9; }
    .feature:nth-child(1) { border-right: 1.4rem solid #F6FDF9; }

.caseStudy {
    background: url('../assets/images/caseStudy.png') no-repeat;
    background-size: cover; 
    height: 26.5rem;
    }
    .caseStudy .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 26.5rem;
    }
        .readCaseBtn {
            font-family: 'Nunito', sans-serif;
            max-width: 20rem;
            font-size: 2rem;
            font-weight: 800;
            background: transparent;
            border: none;
            outline: none;
            text-align: center;
            color: #ffffff;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0;
            cursor: pointer;
        }
            .readCaseBtn img {
                width: 4.4rem;
            }
</style>


