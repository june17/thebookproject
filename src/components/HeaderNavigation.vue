<template>
    <nav>
        <div class="container">
            <div class="row">
                <ul class="logo">
                    <router-link :to="{ name: 'Home'}">
                        <img src="/static/images/logo.png" height="40px">
                    </router-link>
                </ul>
                <ul>
                    <li>
                        0/1
                        <img src="/static/images/read.svg" height="18px" style="margin-left: 6px">
                    </li>
                    <li>
                        0/1
                        <img src="/static/images/request.svg" height="20px" style="margin-left: 6px">
                    </li>
                    <li>
                        Arunraj 
                        <img src="/static/images/user.png" height="40px" style="margin-left: 6px">
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
    export default {
        name: 'HeaderNavigation'
    }
</script>

<style scoped>

.row {        
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    font-size: 15px;
  }
  .row ul {
          display: flex;
          align-items: center;
        }
  .row ul li {
            list-style: none;
            margin-left: 24px;
            color: #B0B0B0;
          }
  li:last-child {
                color: #1D1C1C;
            }
</style>
