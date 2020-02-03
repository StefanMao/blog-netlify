<template>
    <div class="arr-back">
    <g-link onClick="history.go(-1)" class="back-link">  &larr; Go Back</g-link>
  </div>
</template>

<style>
.back-link{
  display: block;
  color: black;
  padding: 10px;
  text-decoration:none;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 1.3vw;
  font-weight: bold;
  /*text-decoration-thickness: 0.15em;*/
}
.arr-back a.active {
  color: rgb(13, 158, 241);
  text-decoration: underline   rgb(13, 158, 241);
  text-underline-position: under;
}

/* Links on mouse-over */
.arr-back a:hover:not(.active) {
  text-decoration: underline   rgb(13, 158, 241);
  color: black;
  text-underline-position: under;
}
</style>