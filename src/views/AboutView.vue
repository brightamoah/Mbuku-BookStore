<template>
  <NavbarComponent />
  <div>
 
    <section class="About">
            <div class="Main">
                <img src="/images/mbuku.logo.png">
                <div class="About-text">
                    <h1>About Us</h1>
                    <h5>Welcome to Mbuku Bookstore!</h5>
                    <!-- paragraph -->
                    <p>At Mbuku Bookstore, we believe in the power of stories. Our mission is to provide a vast selection of books that inspire, educate, and entertain readers of all ages. Whether you are a passionate reader, a curious learner, or someone just discovering the joy of books, Mbuku Bookstore is your destination for all things literally.</p>
                        
                        
                </div>
            </div>
        </section>
        <!-- ======= Service Details Section ======= -->
    <section class="service-details">
      <div class="container">

        <div class="row">
          <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <div class="card">
              <div class="card-img">
                <img src="/images/serve.jpg" alt="...">
              </div>
              <div class="card-body">
                <h5 class="card-title"><a href="#">Our Mission</a></h5>
                <p class="card-text"> Our mission is to support education by providing high-quality school books and educational resources that cater to the diverse needs of students and educators.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <div class="card">
              <div class="card-img">
                <img src="/images/serve2.jpg" alt="...">
              </div>
              <div class="card-body">
                <h5 class="card-title"><a href="#">Our Plan</a></h5>
                <p class="card-text">Our plan is to continuosly keep updating our inventory with the latest educational materials and also provide resources and tools to help teachers enhance their teaching experience.</p>
                
              </div>
            </div>

          </div>
          <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <div class="card">
              <div class="card-img">
                <img src="/images/serve3.jpg" alt="...">
              </div>
              <div class="card-body">
                <h5 class="card-title"><a href="#">Our Vision</a></h5>
                <p class="card-text">We envision a future where we are the leading provider of educational materials. We aspire to be recognized for our extensive collection, commitment to quality, and dedication to fostering a love of learning in our community.</p>
               
              </div>
            </div>
          </div>
          <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
            <div class="card">
              <div class="card-img">
                <img src="/images/serve4.webp" alt="...">
              </div>
              <div class="card-body">
                <h5 class="card-title"><a href="#">Our Care</a></h5>
                <p class="card-text">We take great care in curating the best content on our website to ensure it is accurate, informative, and engaging. Our team is dedicated to regular updates, quality control, and user experience.</p>
               
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  
  </div>
  <FooterComponent />
</template>
<script setup>
    import FooterComponent from '@/components/FooterComponent.vue'
    import NavbarComponent from '@/components/NavbarComponent.vue'
</script>
<style>
  *{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}
.About{
    width: 100%;
    padding: 78px 0px;
    background-color: #191919;
}
.About img{
    height: 80vh;
    width: 420px;
    object-fit: cover;
}
.About-text{
    width: 550px;
}
.Main{
    width: 1130px;
    max-width: 95%;
    border: 5px solid #ff6347;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.About-text h1{
    color: #ff6347; 
    font-size: 5rem;
    text-transform: capitalize;
    margin-bottom: 20px;
}
.about-text h5{
    color: #fff;
    font-size: 25px;
    text-transform: capitalize;
    margin-bottom: 25px;
    letter-spacing: 2px;
}

.about-text p{
    color: #fcfc;
    letter-spacing: 1px;
    line-height: 28px;
    font-size: 18px;
    margin-bottom: 45px;
}


/*--------------------------------------------------------------
# Strategies Details
--------------------------------------------------------------*/
.service-details {
  padding-bottom: 10px;
}

.service-details .card {
  border: 0;
  padding: 0 30px;
  margin-bottom: 60px;
  position: relative;
}

.service-details .card-img {
  width: calc(100% + 60px);
  margin-left: -30px;
  overflow: hidden;
  z-index: 9;
  border-radius: 0;
}

.service-details .card-img img {
  max-width: 100%;
  transition: all 0.3s ease-in-out;
}

.service-details .card-body {
  z-index: 10;
  background: #fff;
  border-top: 4px solid #fff;
  padding: 30px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  margin-top: -60px;
  transition: 0.3s;
}

.service-details .card-title {
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
}

.service-details .card-title a {
  color: #000;
  transition: 0.3s;
}

.service-details .card-text {
  color: #000;
}


.service-details .read-more a:hover {
  color: orangered
}

.service-details .card:hover img {
  transform: scale(1.1);
}

.service-details .card:hover .card-body {
  border-color: #ffcccb;
}

.service-details .card:hover .card-body .card-title a {
  color: orangered;
}

</style>