<template>
  <div class="join">
    <div class="formWrapper">
      <p>Login</p>
      <form name="join">
        <div class="bgWrapper">
          <img src="#" alt="e">
          <input type="text" placeholder="Email address" required="">
          <img src="#" alt="e">
          <input type="password" placeholder="Password" required="">
        </div>
        <input type="checkbox" value="None" id="checkbox" name="check" checked />
        <label for="squaredTwo">label</label>
        <input type="checkbox" value="None" id="checkbox" name="check" checked />
        <label for="squaredTwo">label</label>
      </form>
    </div>
  </div>

</template>

<script>

</script>

<style scoped>
  .join {
    display: flex;
    box-sizing: border-box;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    border: 1px solid blue;
  }
  .formWrapper {
    width: 300px;
    height: 300px;
  }
  .bgWrapper {
    padding: 10px;
    background-color: #eaf2f0;
    border: 1px solid #c9c9c9;
  }
  p {
    margin: 8px 0px;
  }
  input {
    margin: 0;
    padding: 8px 8px;
    width: 220px;
    font-size: 12px;
    line-height: 12px;
    color: #4e4e4d;
    background-color: #eaf2f0;
    border: 1px solid #c9c9c9;
  }
  #checkbox {
    width: 16px;
    height: 16px;
    position: relative;
    margin: 20px auto;
  }
  img {
    display: inline-block;
    margin: 0px;
    padding: 0px;
    width: 30px;
    height: 30px;
  }
</style>
