<template>
    <div class="container">
        <div class="col-grid">
            <form @submit.prevent="signIn" class="card card-form">
                <h1 class="text-center">Login</h1>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input v-model="form.email" type="text" class="form-input">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input v-model="form.password" type="password" class="form-input">
                </div>
                <div class="push-top">
                    <button type="submit" class="btn-blue btn-block">Log in</button>
                </div>
                <div class="form-actions text-right">
                    <router-link :to="{name: 'PageRegister'}">
                        Create an Account
                    </router-link>
                </div>
            </form>
            <div class="push-top text-center">
                <button @click="registerWithGoogle" class="btn-red btn-xsmall"><i class="fa fa-google fa-btn"></i>Sign up with Google</button>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data () {
        return {
            form: {
                email: null,
                password: null
            }
        }
    },
    methods: {
        signIn () {
            this.$store.dispatch('signInWithEmailAndPassword',{ email: this.form.email, password: this.form.password }) 
                .then(() => { this.$router.push({name: 'PageHome'}) })
        },
        registerWithGoogle () {
            console.log('👹👻')
            this.$store.dispatch('signInWithGoogle')
                .then(() => this.successRedirect())
        },
        successRedirect () {
            //$route and $router are not same, $route is the active route and $router is the global router instance 
            const redirectTo = this.$route.query.redirectTo || {name:'PageHome'}
            this.$router.push(redirectTo)
        }	          
    },
    created () {
        this.$emit('ready')
    }
}
</script>
