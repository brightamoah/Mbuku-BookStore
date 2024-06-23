<template>
  <NavbarComponent />

  <main class="main">
    <section class="search py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h2 class="text-center">Find the ebook you need</h2>
            <form action="#" target="_blank">
              <input type="text" class="form-control" name="term" placeholder="Search" />
              <button type="submit" class="btn btn-primary">Search</button>
            </form>
          </div>
          <div class="col-md-8">
            <img src="/images/hero.webp" alt="Search image" class="img-fluid" />
          </div>
        </div>
      </div>
    </section>

    <section id="digital-bookstore py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4"></div>
          <h2>Digital Bookstore</h2>
          <p>
            Mbuku is an online bookstore selling books in PDF format for users who sign in to access
            the collection. The book collection features various genres and topics for readers to
            explore once they create a user account on the site.
          </p>
        </div>
      </div>
      <div class="image-container" style="padding: 25px; width: 1250px;">
        <img src="/images/digi-1.webp" alt="Book Image 1" id="book-image-1" />
        <img src="/images/digi-2.webp" alt="Book Image 2" id="book-image-2" />
        <img src="/images/digi-3.webp" alt="Book Image 3" id="book-image-3" />
      </div>
    </section>

    <section class="register py-5">
      <div class="container">
        <h2 class="text-center">Buy your child's textbooks easily via Mbuku Shop</h2>
        <p>
          If your child's school is using Snapplify Engage for prescribed book orders, you'll find
          everything your child needs in one place.
        </p>
        <a href="#" target="_blank" class="btn btn-primary">Get Prescribed Books</a>
      </div>
    </section>

    <section class="purchase py-5">
      <div class="container">
        <h2 class="text-center">Everything you need to teach, collaborate and learn</h2>
        <p>
          Thousands of schools and higher education institutions around the world are using
          Snapplify’s solutions to promote reading, boost literacy, support research, build
          21st-century skills, and save educators time.
        </p>
        <a href="#" class="btn btn-primary">Find Out More</a>
      </div>
    </section>

    <section class="blocks py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h3>Technical support</h3>
            <p>Find helpful how-to articles or speak to our support team any day of the week.</p>
            <a href="#" class="btn btn-primary">Find Help</a>
          </div>
          <div class="col-md-4">
            <h3>Partner vouchers</h3>
            <p>Have you received a voucher code from one of our partners? Redeem it here.</p>
            <a href="#" target="_blank" class="btn btn-primary">Redeem Voucher</a>
          </div>
          <div class="col-md-4">
            <h3>Cloud Services</h3>
            <p>Edtech company, publisher, or bookseller? Use our tech to grow your business.</p>
            <a href="#" target="_blank" class="btn btn-primary">Find Out More</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <FooterComponent />
</template>

<script setup>
import FooterComponent from '@/components/FooterComponent.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'
</script>

<style scoped>
.main {
  padding: 3rem 0;
}

.main h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.main form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.main form input[type='text'] {
  width: 3rem;
}

.main {
  padding: 3rem 0;
}

.main h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.main form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.main form input[type='text'] {
  width: 50%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.main form button[type='submit'] {
  width: 20%;
  padding: 0.5rem;
  background-color: #ff6347;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.main form button[type='submit'] {
  width: 20%;
  padding: 0.5rem;
  background-color: #ff6347;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.main a {
  display: block;
  margin: 0 auto;
  margin-top: 2rem;
}

.search {
  background-color: #f8f9fa;
  padding: 3rem 0;
}

.search h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.search form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.search form input[type='text'] {
  width: 50%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search form button[type='submit'] {
  width: 20%;
  padding: 0.5rem;
  background-color: #ff6347;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.search img {
  width: 100%;
  height: auto;
  overflow: hidden;
}

.hero {
  background-color: #f8f9fa;
  padding: 3rem 0;
}

.hero h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.hero form {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}

.hero form input[type='text'] {
  width: 50%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.hero form button[type='submit'] {
  width: 20%;
  padding: 0.5rem;
  background-color: #ff6347;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

@media (max-width: 767.98px) {
  .main h2 {
    font-size: 1.5rem;
  }

  .main form input[type='text'] {
    width: 100%;
  }

  .main form button[type='submit'] {
    width: 100%;
  }
}
.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.image-container {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.image-container img {
  width: 30%; /* Adjust width for smaller screens */
  height: auto;
}

#book-image-1 {
  border: 2px solid red; /* Example border for Book Image 1 */
}

#book-image-2 {
  border: 2px solid green; /* Example border for Book Image 2 */
}

#book-image-3 {
  border: 2px solid blue; /* Example border for Book Image 3 */
}

.blocks h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #222;
  border: 1rem;
}

.blocks p {
  margin-bottom: 1rem;
}

@media (max-width: 767.98px) {
  .main h2 {
    font-size: 1.5rem;
  }

  .main form input[type='text'] {
    width: 100%;
  }

  .main form button[type='submit'] {
    width: 100%;
  }
}

.btn-primary {
  background-color: #ff6347;
  border-color: #ff63;
  border-radius: 4px;
  cursor: pointer;
}

.main a {
  display: block;
  margin: 0 auto;
  margin-top: 2rem;
}
</style>
