<script>

export default {
  data() {
    return {
      variabile: false
    }
  },
  methods: {
    isOn() {
      this.variabile = false
    },
    isDown() {
      this.variabile = true
    }
  },
  created() {

  },
  mounted() {
//  placxehgolder
  }
}
</script>


<template>
  <div class="container">
    <div class="ty_message">Grazie per avver acquistato da &#128523;</div>
    <div class="restaurant_photo">{{ `{foto ristorante ?}` }}</div>
    <div class="restaurant_name">{{ `{nome ristorante ?}` }}</div>
    <div class="delivery_messa">Il tuo ordine e stato spedito e verra consegnato a breve</div>
    <div class="order_id">ID ORDINE: {{ `{eventual e id ordine ?}` }}</div>
    <button :class="{ darken: variabile }" @mouseup="this.variabile = !this.variabile" @mousedown="isDown" type="button">Continua a fare
      aquisti</button>

  </div>
</template>


<style scoped>
.darken {
  background: orangered;
}

button {
  margin: 2rem;
  padding: .7rem 1.5rem;
  border: none;
  color: white;
  background: orange;
  border-radius: 10px;
  font-weight: bold;
}

button:hover {
  cursor: pointer;
}

.ty_message {
  font-size: 2rem;
  padding: 1rem;
}

.restaurant_photo {
  width: 10rem;
  height: 10rem;
  border: 2px dashed purple;
}

.restaurant_name {
  font-size: 1.7rem;
  padding: 1rem
}

.delivery_messa {
  padding: .5rem;
}

.order_id {
  color: grey;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 20rem;
  border: 2px dashed red;
  padding: 4rem;
}
</style>
