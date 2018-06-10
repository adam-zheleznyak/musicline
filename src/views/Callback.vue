<template>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Callback',
    async mounted () {
        const response = await axios.get(`http://206.189.223.220:3000/grant/${this.$route.query.code}`)
        const data = response.data.split('|||||')

        localStorage.setItem('access-token', data[0])
        localStorage.setItem('refresh-token', data[1])

        this.spotify.setAccessToken(data[0])
        this.spotify.setRefreshToken(data[1])

        this.$router.push('/dashboard')
    }
}
</script>
