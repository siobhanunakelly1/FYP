<template>
    <div class="question-box-container">
        <b-jumbotron >
            <template #lead>
                Welcome, please log in or signup below!
            </template>

            <hr class="my-4">

            <p>
                <input v-model ="usernameInput" placeholder="Username">
                <br>
                <input v-model ="passwordInput" placeholder = "Password">
            </p>

            <button v-on:click ="addUser">Login</button>
            <button variant="success" href="#">Sign Up</button>
        </b-jumbotron>
    </div>
</template>