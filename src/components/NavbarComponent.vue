<template>
  <BNavbar toggleable="lg" v-b-color-mode="'light'" class="header">
    <BNavbarBrand class="navbar-brand">
      <img src="/images/mbuku.logo.png" alt="mbuku-logo" style="width: 180px" />
    </BNavbarBrand>
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav>
        <RouterLink to="/"><BNavItem href="#" style="font-size: 1.2rem">Home</BNavItem></RouterLink>
        <RouterLink to="/shop"
          ><BNavItem href="#" style="font-size: 1.2rem">Shop</BNavItem></RouterLink
        >
        <RouterLink to="/contact"
          ><BNavItem href="#" style="font-size: 1.2rem">Contact</BNavItem></RouterLink
        >
        <router-link to="/about"
          ><BNavItem href="#" style="font-size: 1.2rem">About</BNavItem></router-link
        >
      </BNavbarNav>
      <!-- Right aligned nav items -->
      <BNavbarNav class="ms-auto mb-2 mb-lg-0">
        <BButton variant="danger" style="margin: 10px">Login</BButton>
        <BButton variant="success" style="margin: 10px">Sign Up</BButton>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>

<script setup></script>
<style scoped>
.header {
  width: 100%;
  background-color: #ff6347;
  padding: 1rem;
}

.header a {
  color: #333;
  text-decoration: none;
  background-color: #f8f9fa;
}

.container-fluid {
  color: #333;
  background-color: #f8f9fa;
}

.navbar-brand {
  padding-right: 1rem;
  font-size: 1.5rem;
}

.navbar-nav {
  margin-left: auto;
}

.navbar-toggler {
  margin-right: 1rem;
}

.nav-link {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 10px;
}
.nav-link:hover {
  color: orangered;
}
.nav-item.active {
  color: orangered;
  font-weight: 600;
}

/*added*/
.navbar-brand {
  padding-right: 1rem;
  font-size: 1.5rem;
}

.navbar-nav {
  margin-left: auto;
}

.navbar-toggler {
  margin-right: 1rem;
}
</style>
