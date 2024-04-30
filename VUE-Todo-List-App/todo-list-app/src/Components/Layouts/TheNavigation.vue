<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/">All Todos</router-link>
        </li>
        <li>
          <router-link to="/completed-todos">Completed</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

li {
  margin: 0 2rem;
}

a {
  text-decoration: none;
  border: 1px solid transparent;
  cursor: pointer;
  color: black;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  border-radius: 10px;
  font-size: 25px;
}

a:hover,
a:active,
a.router-link-active {
  color: blueviolet;
}
</style>
