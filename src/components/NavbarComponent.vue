<template>
  <BNavbar toggleable="lg" v-b-color-mode="'light'" class="header">
    <BNavbarBrand class="navbar-brand">
      <img src="/images/mbuku.logo.png" alt="mbuku-logo" style="width: 180px" />
    </BNavbarBrand>
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav>
        <BNavItem href="#" style="font-size: 1.2rem">Home</BNavItem>
        <BNavItem href="#" style="font-size: 1.2rem">Shop</BNavItem>
        <BNavItem href="#" style="font-size: 1.2rem">Contact</BNavItem>
        <BNavItem href="#" style="font-size: 1.2rem">About</BNavItem>
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
<style></style>
