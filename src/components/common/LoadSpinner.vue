<template>
    <div class="loading-container">
        <div class="loading"></div>
    </div>
</template>

<style lang="scss" scoped>
.loading-container {
    height: 100%;
    width: 100%;
    background: black;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: grid;
}

.loading {
    border: 5px solid #f3f3f3;
    border-top: 5px solid #555;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    margin: auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>