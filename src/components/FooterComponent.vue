<template>
  <div>
    <footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
      <div class="footer-newsletter">
        <div class="container">
          <div class="row">
            <div class="col-lg-6" style="background-color: #0d2735">
              <h4 style="background-color: #0d2735">Our Newsletter</h4>
              <p style="background-color: #0d2735; color: #fff">
                Subscribe to our newsletter for the latest updates, promotions, and exclusive
                offers! Stay informed about our products/services and upcoming events
              </p>
            </div>
            <div class="col-lg-6" style="background-color: #0d2735">
              <form action="" method="post">
                <input type="email" name="email" /><input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-top">
        <div class="container">
          <div class="row" style="background-color: #0d2735">
            <div
              class="col-lg-3 col-md-6 footer-links"
              style="background-color: #0d2735; text-decoration: none"
            >
              <h4 style="background-color: #0d2735">Useful Links</h4>
              <ul>
                <li style="background-color: #0d2735">
                  <i class="bx bx-chevron-right"></i>
                  <a href="index.html" style="background-color: #0d2735; text-decoration: none">Introduction</a>
                </li>
                <li style="background-color: #0d2735">
                  <i class="bx bx-chevron-right"></i>
                  <a href="key.html" style="background-color: #0d2735; text-decoration: none">Key Health Challenges </a>
                </li>
                <li style="background-color: #0d2735">
                  <i class="bx bx-chevron-right"></i>
                  <a href="strategies.html" style="background-color: #0d2735; text-decoration: none"
                    >Strategies for improvement</a
                  >
                </li>
                <li style="background-color: #0d2735">
                  <i class="bx bx-chevron-right"></i>
                  <a href="Initiatives.html" style="background-color: #0d2735; text-decoration: none"
                    >Global Initiatives</a
                  >
                </li>
                <li style="background-color: #0d2735">
                  <i class="bx bx-chevron-right"></i>
                  <a href="get.html" style="background-color: #0d2735; text-decoration: none">Get Involved</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 footer-links" style="background-color: #0d2735">
              <h4 style="background-color: #0d2735">Company</h4>
              <ul>
                <li style="background-color: #0d2735">
                  <i class="bx bx-chevron-right"></i>
                  <a href="#" style="background-color: #0d2735; text-decoration: none">About Us</a>
                </li>
                <li style="background-color: #0d2735">
                  <i class="bx bx-chevron-right"></i>
                  <a href="#" style="background-color: #0d2735 ;text-decoration: none" >Legal</a>
                </li>
                <li style="background-color: #0d2735">
                  <i class="bx bx-chevron-right"></i>
                  <a href="contact.html" style="background-color: #0d2735
                  ;text-decoration: none">About SDG's</a>
                </li>
              </ul>
            </div>

            <div
              class="col-lg-3 col-md-6 footer-contact"
              style="background-color: #0d2735; color: #a2cce3"
            >
              <h4 style="background-color: #0d2735">Contact Us</h4>
              <p style="background-color: #0d2735; color: white">
                Border-hub <br />
                Busia,<br />
                Kenya <br />
                <strong style="background-color: #0d2735;color: white">Phone:</strong> +254 792 516 158<br />
                <strong style="background-color: #0d2735;color: white">Email:</strong>
                logankhainga69@gmail.com<br />
              </p>
            </div>

            <div class="col-lg-3 col-md-6 footer-info" style="background-color: #0d2735">
              <h3 style="background-color: #0d2735">Join the conversation</h3>
              <div class="social-links mt-3" style="background-color: #0d2735">
                <a href="https://twitter.com/khainga_simons" class="twitter"
                  ><i class="bx bxl-twitter"></i
                ></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container" style="background-color: #0d2735">
        <div class="copyright" style="background-color: #0d2735;color: white; ">
          &copy; Copyright
          <strong><span style="background-color: #0d2735; color: white">Logan </span></strong
          >. All Rights Reserved
        </div>
        <div class="credits" style="background-color: #0d2735">
          Designed by <a href="#" style="background-color: #0d2735">Logan</a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup></script>
<style scoped>
/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
#footer {
  background: #0b212d;
  padding: 0 0 30px 0;
  color: #fff;
  font-size: 14px;
}

#footer .footer-newsletter {
  padding: 50px 0;
  background: #0d2735;
}

#footer .footer-newsletter h4 {
  font-size: 24px;
  margin: 0 0 20px 0;
  padding: 0;
  line-height: 1;
  font-weight: 600;
  color: #a2cce3;
}

#footer .footer-newsletter form {
  margin-top: 30px;
  background: #fff;
  padding: 6px 10px;
  position: relative;
  border-radius: 50px;
}

#footer .footer-newsletter form input[type='email'] {
  border: 0;
  padding: 4px;
  width: calc(100% - 100px);
}

#footer .footer-newsletter form input[type='submit'] {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  border: 0;
  background: none;
  font-size: 16px;
  padding: 0 20px;
  margin: 3px;
  background: #68a4c4;
  color: #fff;
  transition: 0.3s;
  border-radius: 50px;
}

#footer .footer-newsletter form input[type='submit']:hover {
  background: #468db3;
}

#footer .footer-top {
  background: #0d2735;
  border-top: 1px solid #17455e;
  border-bottom: 1px solid #123649;
  padding: 60px 0 30px 0;
}

#footer .footer-top .footer-info {
  margin-bottom: 30px;
}

#footer .footer-top .footer-info h3 {
  font-size: 18px;
  margin: 0 0 20px 0;
  padding: 2px 0 2px 0;
  line-height: 1;
  color: #a2cce3;
  font-weight: 600;
}

#footer .footer-top .footer-info p {
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0;
  font-family: 'Roboto', sans-serif;
  color: #fff;
}

#footer .footer-top .social-links a {
  font-size: 18px;
  display: inline-block;
  background: #1e4356;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#footer .footer-top .social-links a:hover {
  background: #68a4c4;
  color: #fff;
  text-decoration: none;
}

#footer .footer-top h4 {
  font-size: 18px;
  font-weight: 600;
  color: #a2cce3;
  position: relative;
  padding-bottom: 12px;
}

#footer .footer-top .footer-links {
  margin-bottom: 30px;
}

#footer .footer-top .footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

#footer .footer-top .footer-links ul i {
  padding-right: 2px;
  color: #a2cce3;
  font-size: 18px;
  line-height: 1;
}

#footer .footer-top .footer-links ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}

#footer .footer-top .footer-links ul li:first-child {
  padding-top: 0;
}

#footer .footer-top .footer-links ul a {
  color: #fff;
  transition: 0.3s;
  display: inline-block;
  line-height: 1;
}

#footer .footer-top .footer-links ul a:hover {
  color: #a2cce3;
}

#footer .footer-top .footer-contact {
  margin-bottom: 30px;
}

#footer .footer-top .footer-contact p {
  line-height: 26px;
}

#footer .copyright {
  text-align: center;
  padding-top: 30px;
}

#footer .credits {
  padding-top: 10px;
  text-align: center;
  font-size: 13px;
  color: #fff;
}

#footer .credits a {
  color: #a2cce3;
}

.container {
  background-color: #0b212d;
}
</style>
