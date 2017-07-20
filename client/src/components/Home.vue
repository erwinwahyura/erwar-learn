<template lang="html">
  <div class="container">
    <b-card>
      <b-media>
        <img slot="aside" src="http://placeskull.com/200/200/ABABAB/-1/0">
        <h5 class="mt-0">Media Title</h5>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
          sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
          Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
          in faucibus.
        </p>
        <p class="mb-0">
          Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum
          sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <hr>
        <b-media>
          <img slot="aside" src="http://placeskull.com/200/200/ABABAB/-1/0">
          <h5 class="mt-0">Nested Media</h5>
          Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </b-media>
      </b-media>
    </b-card>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.container {
  margin-top: 30px;
}
img {
  height: 50px;
  width: auto;
}
</style>
