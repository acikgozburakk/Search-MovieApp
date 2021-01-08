<template>
  <div class="navbar">
    <div>
      <router-link to="/">ANASAYFA</router-link>
      <router-link to="/favourite">FAVORİLER</router-link>
    </div>
  </div>
</template>

<style>
.navbar {
  height: 75px;
  background-color: #c00000;

  color: #fff;
  font-size: 23px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 10px !important;
  width: 100%;
}

.navbar a {
  color: #ccc;
  margin-right: 10px;
  text-decoration: none;
}

.navbar a:hover {
  color: #fff;
}

.navbar a.router-link-active,
.navbar a.router-link-exact-active {
  color: #f5e20c;
}
</style>
