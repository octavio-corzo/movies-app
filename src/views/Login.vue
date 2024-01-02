<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <label for="username">Usuario:</label>
            <input type="text" v-model="username" required />

            <label for="password">Contraseña:</label>
            <input type="password" v-model="password" required />

            <button type="submit">Iniciar Sesión</button>
        </form>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            password: '',
            accessToken: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTFmOTVmMzI0NDlhMDBhMmQ1YmFhZTg1NjgxNzdjMCIsInN1YiI6IjY1N2U3MDkxOTA0ZjZkMDcwOTdmNWNjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DhXeFsj26ssDIkopduQw7Zf-GQBrNLgGSElZON7vc-4',
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post(
                    'https://api.themoviedb.org/3/authentication/token/validate_with_login',
                    {
                        username: this.username,
                        password: this.password,
                        request_token: null, // No uses request_token aquí
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${this.accessToken}`,
                        },
                    }
                );

                // Manejar la respuesta de inicio de sesión (aquí deberías manejar el token de sesión, etc.)
                console.log('Respuesta de inicio de sesión:', response.data);

                // Redirigir a otra página después del inicio de sesión si es necesario
                // this.$router.push('/dashboard');
            } catch (error) {
                console.error('Error de inicio de sesión:', error);
            }
        },
    },
};
</script>
  