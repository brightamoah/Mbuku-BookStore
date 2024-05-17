<template>
  <footer class="footer">
    <div class="container">
      <div class="row" style="background-color: #222">
        <div class="col-md-4" style="background-color: #222">
          <h3>About Mbuku</h3>
          <p>
            Mbuku is a leading provider of digital education solutions for schools and universities.
            We offer a wide range of products and services to help educators and students succeed in
            the digital age.
          </p>
        </div>
        <div class="col-md-4" style="background-color: #222">
          <h3>Follow Us</h3>
          <ul class="list-unstyled">
            <li>
              <a href="#"><FontAwesome-icon :icon="['fab', 'facebook']" /></a>
            </li>
            <li>
              <a href="#"><FontAwesome-icon :icon="['fab', 'twitter']" /></a>
            </li>
            <li>
              <a href="#"><FontAwesome-icon :icon="['fab', 'instagram']"></FontAwesome-icon></a>
            </li>
            <li>
              <a href="#"><FontAwesome-icon :icon="['fab', 'linkedin']"></FontAwesome-icon></a>
            </li>
          </ul>
        </div>
        <div class="col-md-4" style="background-color: #222">
          <h3>Newsletter</h3>

          <form>
            <div class="form-group">
              <input type="email" class="form-control" placeholder="Enter your email address" />
            </div>
            <button type="submit" class="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      <p class="text-center mt-5" style="background-color: #222; color: #fff">
        Copyright © 2023 Mbuku. All rights reserved.
      </p>
    </div>
  </footer>
</template>
<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>
<style scoped>
.footer {
  background-color: #222;
}
.container {
  background-color: #222;
}

.form {
  background-color: #222;
  border: none;
}
</style>
